// src/components/kit/kit-landing-page.tsx
//
// Estrutura de convencimento — 7 dobras:
//   1. HERO           — Dor + promessa + autoridade médica imediata
//   2. CREDENCIAL     — Quem elaborou e por quê confiar
//   3. ESPELHO        — Sintomas / identificação do usuário
//   4. MECANISMO      — Como funciona (sem jargão)
//   5. COMPOSIÇÃO     — O que está no kit e por quê cada um
//   6. PROVA SOCIAL   — Depoimentos (renderiza se kit.testimonials existe)
//   7. GRATUIDADE + LEAD → WhatsApp direto
//   + RODAPÉ DE CONFIANÇA
//
// Fonts — adicione no layout.tsx root:
//   <link rel="preconnect" href="https://fonts.googleapis.com" />
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
//
// tailwind.config.ts — adicione:
//   fontFamily: { display: ['Cormorant Garamond','serif'], sans: ['DM Sans','sans-serif'] }

import Image from "next/image";
import type { Kit } from "@/lib/kits";
import { LeadForm } from "@/components/kit/lead-form";

// ─── TOKENS DE COR ────────────────────────────────────────────────────────────
// Verde floresta  #0B1F12
// Verde médio     #1A5C35
// Verde claro     #4CAF78
// Creme claro     #F5F2EC
// Creme médio     #EDE9E0
// Texto           #111814
// Texto suave     #6B7570

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const Ic = {
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  WA: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  ),
  Moon: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Clock: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Sun: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Zap: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Leaf: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  Flask: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v5.5L19.5 17a3 3 0 0 1-2.6 4.5H7.1A3 3 0 0 1 4.5 17L9 8.5V3z"/>
      <line x1="9" y1="3" x2="15" y2="3"/>
    </svg>
  ),
  Lock: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Star: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

const indicationIcons = [<Ic.Moon />, <Ic.Clock />, <Ic.Sun />, <Ic.Zap />];

// ─── SUB-COMPONENTES ──────────────────────────────────────────────────────────

function Label({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <p className={`text-[10px] font-medium uppercase tracking-[0.42em] ${light ? "text-[#4CAF78]" : "text-[#1A5C35]"}`}>
      {text}
    </p>
  );
}

function BulletItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-sm ${light ? "text-white/70" : "text-[#6B7570]"}`}>
      <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${light ? "bg-[#4CAF78]/20 text-[#4CAF78]" : "bg-[#1A5C35]/10 text-[#1A5C35]"}`}>
        <Ic.Check />
      </span>
      <span>{children}</span>
    </li>
  );
}

// ─── COMPONENT PRINCIPAL ──────────────────────────────────────────────────────

export function KitLandingPage({ kit }: { kit: Kit }) {
  return (
    <main className="bg-[#F5F2EC] text-[#111814]" style={{ fontFamily: "'DM Sans', sans-serif" }}>


      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#0B1F12]">

        {/* Foto de fundo */}
        <div className="absolute inset-0">
          <Image src={kit.heroImage} alt={kit.name} fill priority sizes="100vw"
            className="object-cover object-center opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F12]/97 via-[#0B1F12]/78 to-[#0B1F12]/10" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B1F12] to-transparent" />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-6 py-28 lg:px-10">
          <div className="w-full max-w-[620px]">

            {/* Badge de credencial — primeira coisa que o olho lê */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4CAF78]/30 bg-[#4CAF78]/10 px-4 py-2 text-xs font-medium text-[#4CAF78] backdrop-blur">
              <Ic.Shield />
              Protocolo elaborado por médico — gratuito para você
            </div>

            {/* Headline — espelha a dor antes de oferecer solução */}
            <h1
              className="text-5xl font-semibold leading-[1.06] tracking-[-0.02em] text-white md:text-6xl lg:text-[4.5rem]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {kit.heroHeadline ?? (
                <>Você merece acordar<br />
                <em className="not-italic text-[#4CAF78]">verdadeiramente descansado.</em></>
              )}
            </h1>

            <p className="mt-6 max-w-[460px] text-base leading-relaxed text-white/60">
              {kit.subheadline}
            </p>

            {/* Bullets rápidos */}
            <ul className="mt-8 space-y-3">
              {(kit.heroBullets ?? kit.benefits ?? []).slice(0, 3).map((b: string) => (
                <BulletItem key={b} light>{b}</BulletItem>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#lead"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#1A5C35] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#1A5C35]/30 transition hover:bg-[#0B1F12] hover:shadow-xl active:scale-[0.98]">
                <Ic.WA />
                Receber protocolo gratuito
              </a>
              <a href={kit.checkoutUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-4 text-sm font-medium text-white/85 backdrop-blur transition hover:border-white/35 hover:bg-white/14 active:scale-[0.98]">
                Comprar o kit <Ic.Arrow />
              </a>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-xs text-white/30">
              <Ic.Lock /> Seus dados são protegidos. Nenhum spam, jamais.
            </p>
          </div>
        </div>

        {/* Produto flutuante — desktop
            - right-16 garante margem da borda da tela
            - selo posicionado fora do container do produto (z mais alto, canto superior direito da área) */}
        <div className="pointer-events-none absolute bottom-0 right-16 z-10 hidden w-[38vw] max-w-[520px] lg:block xl:right-24">
          {/* Selo — fica acima e à direita do produto, sem sobreposição */}
          <div className="absolute -right-10 top-[8%] z-20 h-24 w-24 xl:-right-12 xl:h-32 xl:w-32">
            <Image src={kit.sealImage} alt="Elaborado sob protocolo médico" fill sizes="128px" className="object-contain drop-shadow-lg" />
          </div>
          {/* Produto */}
          <div className="relative aspect-[4/3]">
            <Image src={kit.productImage} alt={`Produtos do ${kit.name}`} fill sizes="38vw"
              className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]" />
          </div>
        </div>

        {/* Produto mobile — produto centralizado, selo no canto sem sobrepor */}
        <div className="relative z-10 px-6 pb-4 lg:hidden">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[340px]">
            <Image src={kit.productImage} alt={kit.name} fill className="object-contain drop-shadow-2xl" />
          </div>
          {/* Selo fora do container do produto, posicionado absolutamente na seção */}
          <div className="absolute bottom-8 right-6 h-20 w-20 sm:h-24 sm:w-24">
            <Image src={kit.sealImage} alt="Elaborado sob protocolo médico" fill className="object-contain" />
          </div>
        </div>

        {/* ─── RÉGUA DE CONFIANÇA (verde escura) ─── */}
        <div className="relative z-10 border-t border-white/8 bg-[#071410]/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { num: "01", title: "Protocolo médico",   sub: "Elaborado por especialista"       },
                { num: "02", title: "Fórmulas seguras",   sub: "Ingredientes com função clínica"  },
                { num: "03", title: "Sem custo",          sub: "Protocolo gratuito para você"     },
                { num: "04", title: "Atendimento direto", sub: "Via WhatsApp com o médico"        },
              ].map(({ num, title, sub }, i) => (
                <div
                  key={num}
                  className={`group relative flex flex-col justify-between gap-3 px-7 py-6 ${
                    i < 3 ? "border-r border-white/8" : ""
                  }`}
                >
                  {/* número refinado — fundo decorativo */}
                  <span
                    className="absolute right-5 top-3 select-none text-5xl font-bold leading-none text-white/5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >{num}</span>

                  {/* linha de acento verde */}
                  <div className="h-[1px] w-6 bg-[#4CAF78]/60 transition-all duration-500 group-hover:w-10" />

                  <div>
                    <p className="text-sm font-medium text-white/85">{title}</p>
                    <p className="mt-0.5 text-xs text-white/38">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. CREDENCIAL MÉDICA
      ══════════════════════════════════════════ */}
      <section className="bg-[#0B1F12]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-white/8 bg-white/4">
            <div className="grid lg:grid-cols-[1fr_1.5fr]">

              {/* OG image institucional */}
              <div className="relative min-h-[280px] lg:min-h-0">
                <Image src={kit.ogPreviewImage} alt="VeritasMedi — Suplementos sob protocolo médico"
                  fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1F12]/80 lg:bg-gradient-to-r" />
              </div>

              {/* Copy de credencial */}
              <div className="p-10 lg:p-14">
                <Label text="A origem do protocolo" light />
                <h2
                  className="mt-4 text-3xl font-semibold leading-snug text-white md:text-4xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Cada kit nasce de uma avaliação clínica real — não de tendências.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/55">
                  Os protocolos VeritasMedi são elaborados por médico especialista com base em evidência científica atual.
                  O que você recebe não é um produto de prateleira — é uma composição pensada para um perfil específico,
                  com sintomas específicos, e ingredientes que têm propósito clínico claro.
                </p>
                <p className="mt-4 text-base leading-8 text-white/55">
                  O protocolo é disponibilizado gratuitamente porque acreditamos que informação de qualidade
                  é o primeiro passo para uma escolha consciente.
                </p>

                {/* Números */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { n: "10+",      l: "anos de clínica"        },
                    { n: "100%",     l: "evidência científica"    },
                    { n: "Gratuito", l: "sem custo para você"     },
                  ].map(({ n, l }) => (
                    <div key={l} className="rounded-2xl border border-white/8 bg-white/5 p-5 text-center">
                      <p className="text-2xl font-semibold text-[#4CAF78]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}>{n}</p>
                      <p className="mt-1 text-xs text-white/45">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. ESPELHO — Identificação com sintomas
      ══════════════════════════════════════════ */}
      <section className="bg-[#EDE9E0]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <Label text="Você se reconhece aqui?" />
            <h2
              className="mt-4 text-4xl font-semibold leading-tight text-[#0B1F12] md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {kit.indicationsHeadline ?? "Esse protocolo foi pensado para quem:"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7570]">
              Se você se identifica com um ou mais desses pontos, o protocolo gratuito vai explicar
              exatamente por que isso acontece — e o que pode ser feito.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {kit.indications.map((item: string, i: number) => (
              <div key={item}
                className="group relative overflow-hidden rounded-[2rem] bg-[#F5F2EC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/6">
                {/* número decorativo de fundo */}
                <span
                  className="absolute -right-1 -top-3 select-none text-[6rem] font-bold leading-none text-[#0B1F12]/4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >{i + 1}</span>

                <span className="text-[#1A5C35]">{indicationIcons[i % indicationIcons.length]}</span>
                <p className="mt-5 text-lg font-medium leading-snug text-[#111814]">{item}</p>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-[#4CAF78] transition-all duration-300 group-hover:w-14" />
              </div>
            ))}
          </div>

          {/* CTA intermediário */}
          <div className="mt-14 text-center">
            <a href="#lead"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#1A5C35] px-8 py-4 text-sm font-medium text-white shadow-md transition hover:bg-[#0B1F12] hover:shadow-lg active:scale-[0.98]">
              <Ic.WA />
              Quero entender meu caso — protocolo gratuito
            </a>
            <p className="mt-3 text-xs text-[#6B7570]">Sem custo. Direto com o médico responsável.</p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. MECANISMO — Como funciona
      ══════════════════════════════════════════ */}
      <section className="bg-[#EDE9E0]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">

          {/* Card image */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative aspect-square">
              <Image src={kit.cardImage} alt="Sono de qualidade — vida ativa"
                fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F12]/65 to-[#0B1F12]/0" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#4CAF78]">O resultado esperado</p>
                <p className="mt-2 text-xl font-semibold leading-snug text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Sono de qualidade à noite.<br />Vida ativa durante o dia.
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <Label text="Como funciona" />
            <h2
              className="mt-4 text-4xl font-semibold leading-tight text-[#0B1F12] md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              O que acontece no seu corpo — e por que importa.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B7570]">
              O protocolo atua em três frentes simultâneas: regulação do ciclo circadiano,
              relaxamento muscular e neurológico, e suporte à produção de melatonina endógena.
              O resultado é um sono que repara — não apenas que adormece.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  n: "01",
                  title: "Regulariza o ciclo do sono",
                  desc: "Sinaliza ao organismo o momento de descanso com precisão cronobiológica.",
                },
                {
                  n: "02",
                  title: "Relaxa músculo e mente",
                  desc: "Reduz a tensão acumulada durante o dia sem causar dependência ou sedação.",
                },
                {
                  n: "03",
                  title: "Melhora a qualidade — não só a duração",
                  desc: "Você dorme o que precisa e acorda pronto. Sem arrastar.",
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-5">
                  <span
                    className="flex-shrink-0 text-3xl font-semibold leading-none text-[#4CAF78]/35 mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >{n}</span>
                  <div>
                    <p className="font-medium text-[#111814]">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6B7570]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          5. COMPOSIÇÃO
      ══════════════════════════════════════════ */}
      <section className="bg-[#F5F2EC]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">

            {/* product-leaves — fundo transparente, sem container quadrado */}
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-square">
                <Image
                  src={kit.productLeavesImage ?? kit.productImage}
                  alt={kit.name} fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-contain drop-shadow-[0_16px_48px_rgba(11,31,18,0.18)]"
                />
              </div>
              {/* Nota médica */}
              <div className="mt-2 rounded-2xl border border-[#1A5C35]/12 bg-[#EDE9E0] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1A5C35]">Nota do protocolo</p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7570]">
                  A combinação foi escolhida pela sinergia entre os compostos — cada ingrediente potencializa
                  o efeito do outro. Não é um suplemento isolado. É um protocolo.
                </p>
              </div>
            </div>

            {/* Ingredientes */}
            <div>
              <Label text="Composição do kit" />
              <h2
                className="mt-4 text-4xl font-semibold leading-tight text-[#0B1F12] md:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                O que está no kit — e por que cada um está lá.
              </h2>

              <div className="mt-10 space-y-5">
                {(kit.ingredientDetails ?? kit.ingredients.map((name: string) => ({ name, role: "", detail: "" }))).map(
                  (ing: { name: string; role: string; detail: string }) => (
                    <div key={ing.name}
                      className="rounded-2xl border border-[#0B1F12]/6 bg-white p-7 transition hover:border-[#4CAF78]/25 hover:shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xl font-semibold text-[#0B1F12]">{ing.name}</p>
                          {ing.role && <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[#1A5C35]">{ing.role}</p>}
                        </div>
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#4CAF78]/10 text-[#1A5C35]">
                          <Ic.Check />
                        </span>
                      </div>
                      {ing.detail && <p className="mt-3 text-sm leading-relaxed text-[#6B7570]">{ing.detail}</p>}
                    </div>
                  )
                )}
              </div>

              {/* Posologia */}
              <div className="mt-8 rounded-2xl bg-[#EDE9E0] p-7">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1A5C35]">Sugestão de uso</p>
                <ul className="mt-4 space-y-3">
                  {kit.dosage.map((d: string) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-[#6B7570]">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4CAF78]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          6. PROVA SOCIAL — renderiza só se kit.testimonials existe
      ══════════════════════════════════════════ */}
      {kit.testimonials && kit.testimonials.length > 0 && (
        <section className="bg-[#F5F2EC]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <Label text="Quem já usou" />
            <h2
              className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-[#0B1F12]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Resultados reais, de pessoas reais.
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {kit.testimonials.map((t: { name: string; text: string; stars?: number }) => (
                <div key={t.name} className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
                  {/* aspas decorativas */}
                  <span className="absolute -top-1 left-6 text-8xl font-bold leading-none text-[#0B1F12]/5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>"</span>

                  {t.stars && (
                    <div className="flex gap-0.5 text-[#4CAF78]">
                      {Array.from({ length: t.stars }).map((_, i) => <Ic.Star key={i} />)}
                    </div>
                  )}
                  <p className="relative mt-4 text-base leading-relaxed text-[#111814]">{t.text}</p>
                  <p className="mt-6 text-sm font-medium text-[#6B7570]">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ══════════════════════════════════════════
          7. GRATUIDADE + LEAD → WHATSAPP
      ══════════════════════════════════════════ */}
      <section id="lead" className="relative overflow-hidden bg-[#0B1F12]">
        {/* luz verde ambiente */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#4CAF78]/8 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#4CAF78]/6 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">

            {/* Copy */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4CAF78]/30 bg-[#4CAF78]/10 px-4 py-2 text-xs font-medium text-[#4CAF78]">
                <Ic.Shield />
                100% gratuito — sem custo, sem compromisso
              </div>

              <h2
                className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[3.4rem]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                O protocolo não tem preço.<br />
                <em className="not-italic text-[#4CAF78]">O seu descanso também não.</em>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-white/55">
                Preencha ao lado e você será direcionado para o WhatsApp do médico responsável.
                Ele envia o protocolo completo — orientações de uso, posologia e o que esperar —
                sem custo e sem compromisso de compra.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Protocolo elaborado por médico especialista",
                  "Orientações personalizadas, não genéricas",
                  "Sem custo. Sem spam. Sem compromisso de compra.",
                ].map((item) => (
                  <BulletItem key={item} light>{item}</BulletItem>
                ))}
              </ul>

              {/* Reforço de urgência sutil */}
              <div className="mt-10 rounded-2xl border border-white/8 bg-white/5 p-6">
                <p className="text-sm font-medium text-white/80">
                  Por que o protocolo é gratuito?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Porque acreditamos que informação de qualidade é o primeiro passo.
                  Quem entende o que está tomando — e por quê — faz escolhas melhores.
                  Esse é o nosso compromisso.
                </p>
              </div>
            </div>

            {/* Formulário dinâmico — valida, envia para /api/lead e redireciona ao WhatsApp */}
            <LeadForm
              kitSlug={kit.slug}
              kitName={kit.name}
              whatsappNumber={kit.whatsappNumber ?? "5519989734609"}
              sealImage={kit.sealImage}
            />

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          RODAPÉ DE CONFIANÇA
      ══════════════════════════════════════════ */}
      <footer className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-black/5 md:grid-cols-4">
          {[
            { icon: <Ic.Shield />, label: "Qualidade comprovada" },
            { icon: <Ic.Leaf />,   label: "Fórmulas seguras" },
            { icon: <Ic.Flask />,  label: "Tecnologia e inovação" },
            { icon: <Ic.Shield />, label: "Elaborado sob protocolo médico" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 py-8 text-center">
              <span className="text-[#1A5C35]">{icon}</span>
              <span className="text-xs font-medium text-[#6B7570]">{label}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-black/5 py-5 text-center text-xs text-[#6B7570]">
          © {new Date().getFullYear()} VeritasMedi. Todos os direitos reservados.{" "}
          Este conteúdo é informativo e não substitui consulta médica individualizada.
        </div>
      </footer>

    </main>
  );
}