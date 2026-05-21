// src/app/api/lead/route.ts
//
// Endpoint de captura de leads — chamado pelo LeadForm antes de redirecionar ao WhatsApp.
// Destinos em paralelo:
//   1. Google Sheets   — grava uma linha por lead, aba por kit
//   2. Brevo           — cadastra na lista correspondente ao kit
//   3. Meta CAPI       — preparado, ativado via variável de ambiente
//
// Variáveis necessárias no .env.local:
//   GOOGLE_SERVICE_ACCOUNT_EMAIL
//   GOOGLE_PRIVATE_KEY
//   GOOGLE_SPREADSHEET_ID
//   BREVO_API_KEY
//   BREVO_LIST_IDS         (JSON: { "sono-profundo": 3, "kit-energia": 4, ... })
//   META_PIXEL_ID          (opcional — deixe vazio para desativar)
//   META_ACCESS_TOKEN      (opcional)

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ─── TIPOS ────────────────────────────────────────────────────────────────────

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  kitSlug: string;
  kitName: string;
}

// ─── UTILITÁRIOS ──────────────────────────────────────────────────────────────

function sha256(value: string) {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

// Remove tudo que não é dígito
function digitsOnly(phone: string): string {
  return phone.replace(/\D/g, "");
}

// Garante formato E.164 com DDI 55 (Brasil)
// Brevo exige "+" na frente para o campo SMS
// Entrada aceita: "19989734609", "5519989734609", "+5519989734609"
function toE164Brazil(phone: string): string {
  const digits = digitsOnly(phone);
  if (digits.startsWith("55") && digits.length >= 12) {
    return `+${digits}`;
  }
  return `+55${digits}`;
}

// ─── GOOGLE SHEETS ────────────────────────────────────────────────────────────
//
// Usa a API REST do Google Sheets com autenticação via JWT (Service Account).
// Não requer nenhum SDK externo — só fetch nativo.
//
// ATENÇÃO — chave privada no .env.local:
//   O valor deve estar entre aspas duplas e com \n literal entre as linhas.
//   Exemplo no .env.local:
//     GOOGLE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIE...\n-----END RSA PRIVATE KEY-----"
//   A função parsePrivateKey abaixo normaliza qualquer variação.

function parsePrivateKey(raw: string): string {
  // Remove aspas externas que às vezes ficam na variável
  let key = raw.trim().replace(/^["']|["']$/g, "");
  // Converte \n literal (dois caracteres) em quebra de linha real
  key = key.replace(/\\n/g, "\n");
  return key;
}

async function getGoogleAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_EMAIL ou GOOGLE_PRIVATE_KEY não definidos.");
  }

  const privateKey = parsePrivateKey(rawKey);

  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const claim  = Buffer.from(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  ).toString("base64url");

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(`${header}.${claim}`);
  const signature = sign.sign(privateKey, "base64url");

  const jwt = `${header}.${claim}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`Google OAuth falhou: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function appendToSheets(lead: LeadPayload): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) throw new Error("GOOGLE_SPREADSHEET_ID não definido.");

  const token = await getGoogleAccessToken();

  // Nome da aba = slug do kit (ex: "sono-profundo")
  // A aba deve existir na planilha — crie manualmente
  const range     = encodeURIComponent(`${lead.kitSlug}!A:F`);
  const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[timestamp, lead.name, lead.email, lead.phone, lead.kitName, lead.kitSlug]],
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sheets append falhou: ${err}`);
  }
}

// ─── BREVO ────────────────────────────────────────────────────────────────────
//
// Cria ou atualiza o contato e adiciona à lista do kit correspondente.
// BREVO_LIST_IDS deve ser um JSON mapeando slug → ID numérico da lista no Brevo.
// Ex: { "sono-profundo": 3, "kit-energia": 4 }
//
// Campo SMS exige E.164 (+5519...). toE164Brazil() garante o formato.

async function upsertBrevoContact(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY não definida.");

  const listIds: Record<string, number> = JSON.parse(process.env.BREVO_LIST_IDS ?? "{}");
  const listId = listIds[lead.kitSlug];

  const phoneE164 = toE164Brazil(lead.phone);

  const body: Record<string, unknown> = {
    email: lead.email,
    attributes: {
      FIRSTNAME:  lead.name.split(" ")[0],
      LASTNAME:   lead.name.split(" ").slice(1).join(" "),
      SMS:        phoneE164,   // E.164 obrigatório pelo Brevo
      WHATSAPP:   digitsOnly(lead.phone), // sem "+" — campo livre
      KIT:        lead.kitName,
      KIT_SLUG:   lead.kitSlug,
    },
    updateEnabled: true,
  };

  if (listId) body.listIds = [listId];

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  // 201 = criado, 204 = atualizado — ambos OK
  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    console.error(`Brevo upsert falhou (${res.status}): ${err}`);
  }
}

// ─── META CONVERSIONS API ─────────────────────────────────────────────────────
//
// Ativado apenas quando META_PIXEL_ID e META_ACCESS_TOKEN estiverem definidos.
// Envia evento Lead com dados hasheados (SHA-256) conforme exigido pela Meta.

async function sendMetaLeadEvent(lead: LeadPayload, request: NextRequest): Promise<void> {
  const pixelId     = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) return; // desativado — sem variáveis

  const phone     = digitsOnly(lead.phone);
  const eventTime = Math.floor(Date.now() / 1000);
  const eventId   = `lead_${Date.now()}_${lead.kitSlug}`;

  const ip        = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";

  const payload = {
    data: [
      {
        event_name:        "Lead",
        event_time:        eventTime,
        event_id:          eventId,
        action_source:     "website",
        event_source_url:  request.headers.get("referer") ?? "",
        user_data: {
          em: [sha256(lead.email)],
          ph: [sha256(phone)],
          fn: [sha256(lead.name.split(" ")[0].toLowerCase())],
          client_ip_address: ip,
          client_user_agent: userAgent,
        },
        custom_data: {
          kit_slug: lead.kitSlug,
          kit_name: lead.kitName,
          currency: "BRL",
        },
      },
    ],
  };

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error(`Meta CAPI falhou: ${err}`);
  }
}

// ─── ROUTE HANDLER ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as LeadPayload;
    const { name, email, phone, kitSlug, kitName } = body;

    // Validação mínima
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !kitSlug) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const lead: LeadPayload = {
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      phone:   digitsOnly(phone),
      kitSlug,
      kitName: kitName ?? kitSlug,
    };

    // Dispara os três destinos em paralelo — falha individual não bloqueia os outros
    const results = await Promise.allSettled([
      appendToSheets(lead),
      upsertBrevoContact(lead),
      sendMetaLeadEvent(lead, request),
    ]);

    results.forEach((result, i) => {
      const dest = ["Sheets", "Brevo", "Meta"][i];
      if (result.status === "rejected") {
        console.error(`[lead/${dest}] ${result.reason}`);
      }
    });

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error("[lead/route] Erro inesperado:", error);
    return NextResponse.json(
      { error: "Erro interno." },
      { status: 500 }
    );
  }
}