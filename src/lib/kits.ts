// src/lib/kits.ts

export type KitTestimonial = {
  name: string;
  stars: number;
  text: string;
};

export type KitIngredientDetail = {
  name: string;
  role: string;
  detail: string;
};

export type Kit = {
  slug: string;
  name: string;

  headline: string;
  subheadline: string;
  heroHeadline?: string;
  heroBullets?: string[];
  indicationsHeadline?: string;

  heroImage: string;
  productImage: string;
  productLeavesImage?: string;
  productImageWithLeaves?: string;
  sealImage: string;
  cardImage: string;
  ogImage: string;
  ogPreviewImage: string;

  indications: string[];
  ingredients: string[];
  ingredientDetails?: KitIngredientDetail[];
  dosage: string[];
  benefits: string[];

  testimonials?: KitTestimonial[];

  whatsappNumber?: string;
  checkoutUrl: string;
};

export const kits: Kit[] = [
  {
    slug: "sono-profundo",
    name: "Kit Sono Profundo",

    headline: "Você acorda cansado mesmo depois de dormir?",
    subheadline:
      "Suporte nutricional voltado à qualidade do sono e ao descanso reparador.",

    heroHeadline: undefined,

    heroBullets: [
      "Melhore a qualidade do seu sono",
      "Reduza o cansaço e a desorientação matinal",
      "Desperte com mais disposição",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem:",

    heroImage: "/kits/sono-profundo/hero-bg.jpg",
    productImage: "/kits/sono-profundo/product.png",
    productLeavesImage: "/kits/sono-profundo/product-leaves.png",
    productImageWithLeaves: "/kits/sono-profundo/produto-kit.png",
    sealImage: "/kits/sono-profundo/seal.png",
    cardImage: "/kits/sono-profundo/card.webp",
    ogPreviewImage: "/kits/sono-profundo/og.webp",
    ogImage: "https://kits.veritasmedi.com.br/kits/sono-profundo/og.webp",

    indications: [
      "Dificuldade para adormecer",
      "Acordar no meio da noite",
      "Despertar precoce",
      "Cansaço e desorientação matinal",
    ],

    ingredients: ["SleepFor", "SuperMag III"],

    ingredientDetails: [
      {
        name: "SleepFor",
        role: "Regulador do ciclo do sono",
        detail:
          "Fórmula composta por Melatonina, L-triptofano, Glicina e Vitaminas B3 e B6. Atua regulando o ciclo circadiano e facilitando a entrada natural no sono sem causar dependência.",
      },
      {
        name: "SuperMag III",
        role: "Relaxamento muscular e neurológico",
        detail:
          "Magnésio bisglicinato em alta concentração (350 mg). Atua no relaxamento muscular e na modulação de neurotransmissores ligados ao estresse e à ansiedade noturna.",
      },
    ],

    dosage: [
      "SleepFor: 1 cápsula 30 minutos antes de dormir",
      "SuperMag III: 1 cápsula ao deitar",
    ],

    benefits: [
      "Melhora da qualidade do sono",
      "Rotina noturna simplificada",
      "Suporte ao descanso reparador",
      "Mais disposição ao acordar",
    ],

    testimonials: undefined,

    whatsappNumber: "5519989734609",
    checkoutUrl: "https://www.veritasmedi.com.br/",
  },
];

export function getKitBySlug(slug: string) {
  return kits.find((kit) => kit.slug === slug);
}