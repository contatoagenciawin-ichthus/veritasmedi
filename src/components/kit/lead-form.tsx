"use client";
// src/components/kit/lead-form.tsx
//
// Substitui o bloco de formulário estático na kit-landing-page.tsx.
// Fluxo:
//   1. Usuário preenche nome + e-mail + WhatsApp
//   2. Clica no botão
//   3. POST para /api/lead (Sheets + Brevo + Meta em paralelo)
//   4. Redireciona para wa.me com mensagem pré-preenchida
//   5. Em caso de erro no POST, redireciona para WA mesmo assim
//      (o lead não é bloqueado por falha de integração)

import { useState, useRef } from "react";

interface LeadFormProps {
  kitSlug: string;
  kitName: string;
  whatsappNumber: string;
  sealImage: string; // src da imagem do selo
}

function IconWA() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function IconSpinner() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="animate-spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  );
}

export function LeadForm({ kitSlug, kitName, whatsappNumber, sealImage }: LeadFormProps) {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const formRef = useRef<HTMLDivElement>(null);

  // ── Validação ──────────────────────────────────────────────────
  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim())                     e.name  = "Informe seu nome.";
    if (!email.trim() || !email.includes("@")) e.email = "E-mail inválido.";
    if (phone.replace(/\D/g, "").length < 10) e.phone = "WhatsApp inválido.";
    return e;
  }

  // ── Máscara de telefone simples ────────────────────────────────
  function handlePhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    let masked = digits;
    if (digits.length > 2)  masked = `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    if (digits.length > 7)  masked = `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
    setPhone(masked);
  }

  // ── Submit ─────────────────────────────────────────────────────
  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);

    const waMessage = encodeURIComponent(
      `Olá! Me chamo *${name.trim()}* e quero receber o protocolo gratuito do *${kitName}*.`
    );
    const waUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.replace(/\D/g, ""),
          kitSlug,
          kitName,
        }),
      });
    } catch {
      // Falha silenciosa — o lead vai para o WhatsApp de qualquer forma
      console.warn("API lead falhou — redirecionando para WA mesmo assim.");
    }

    // Redireciona em qualquer caso
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setLoading(false);
  }

  const inputBase =
    "w-full rounded-full border bg-white/8 px-6 py-4 text-sm text-white placeholder-white/30 outline-none transition focus:ring-1";
  const inputOk    = "border-white/12 focus:border-[#4CAF78]/50 focus:ring-[#4CAF78]/25";
  const inputError = "border-red-400/60 focus:border-red-400/60 focus:ring-red-400/20";

  return (
    <div ref={formRef} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10">

      {/* Cabeçalho com selo */}
      <div className="mb-7 flex items-center gap-4">
        <div className="relative h-14 w-14 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sealImage} alt="Protocolo médico" className="h-14 w-14 object-contain" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Receba seu protocolo agora</p>
          <p className="text-xs text-white/40">Elaborado por médico especialista</p>
        </div>
      </div>

      {/* Campos */}
      <div className="grid gap-3">

        <div>
          <input
            type="text"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputBase} ${errors.name ? inputError : inputOk}`}
          />
          {errors.name && <p className="mt-1 pl-4 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputBase} ${errors.email ? inputError : inputOk}`}
          />
          {errors.email && <p className="mt-1 pl-4 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="WhatsApp — (19) 99999-9999"
            value={phone}
            onChange={(e) => handlePhone(e.target.value)}
            className={`${inputBase} ${errors.phone ? inputError : inputOk}`}
          />
          {errors.phone && <p className="mt-1 pl-4 text-xs text-red-400">{errors.phone}</p>}
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1ebe5c] hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? <><IconSpinner /> Aguarde...</> : <><IconWA /> Quero meu protocolo gratuito</>}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-white/28">
          <IconLock />
          Seus dados não são compartilhados com terceiros
        </p>
      </div>

      {/* Nota de entrega */}
      <div className="mt-6 rounded-2xl border border-[#4CAF78]/15 bg-[#4CAF78]/8 p-4">
        <p className="text-xs text-[#4CAF78]">
          ✓ Você será direcionado ao WhatsApp do médico e receberá o protocolo completo em minutos.
        </p>
      </div>
    </div>
  );
}