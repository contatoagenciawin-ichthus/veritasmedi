// src/app/api/lead/route.ts

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  kitSlug: string;
  kitName: string;
}

function sha256(value: string) {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

async function upsertBrevoContact(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY não definida.");
  }

  const listIds: Record<string, number> = JSON.parse(
    process.env.BREVO_LIST_IDS ?? "{}"
  );

  const listId = listIds[lead.kitSlug];

  const body: Record<string, unknown> = {
    email: lead.email,
    attributes: {
      FIRSTNAME: lead.name.split(" ")[0],
      LASTNAME: lead.name.split(" ").slice(1).join(" "),
      KIT: lead.kitName,
      KIT_SLUG: lead.kitSlug,
      PHONE_RAW: lead.phone,
    },
    updateEnabled: true,
  };

  if (listId) {
    body.listIds = [listId];
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    console.error(`Brevo upsert falhou (${res.status}): ${err}`);
  }
}

async function sendMetaLeadEvent(
  lead: LeadPayload,
  request: NextRequest
): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return;
  }

  const phone = digitsOnly(lead.phone);
  const eventTime = Math.floor(Date.now() / 1000);
  const eventId = `lead_${Date.now()}_${lead.kitSlug}`;

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: eventTime,
        event_id: eventId,
        action_source: "website",
        event_source_url: request.headers.get("referer") ?? "",
        user_data: {
          em: [sha256(lead.email)],
          ph: [sha256(phone)],
          fn: [sha256(lead.name.split(" ")[0])],
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error(`Meta CAPI falhou: ${err}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadPayload;
    const { name, email, phone, kitSlug, kitName } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !kitSlug) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const lead: LeadPayload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: digitsOnly(phone),
      kitSlug,
      kitName: kitName ?? kitSlug,
    };

    const results = await Promise.allSettled([
      upsertBrevoContact(lead),
      sendMetaLeadEvent(lead, request),
    ]);

    results.forEach((result, i) => {
      const dest = ["Brevo", "Meta"][i];

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