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
  productLeavesImage: string;
  sealImage: string;
  cardImage: string;
  ogPreviewImage: string;
  ogImage: string;

  indications: string[];
  ingredients: string[];
  ingredientDetails?: KitIngredientDetail[];
  dosage: string[];
  benefits: string[];

  testimonials?: KitTestimonial[];

  whatsappNumber?: string;
  checkoutUrl: string;
};

const WHATSAPP_VERITASMEDI = "5519989734609";
const CHECKOUT_VERITASMEDI = "https://www.veritasmedi.com.br/";
const BASE_URL = "https://kits.veritasmedi.com.br";

export const kits: Kit[] = [
  {
    slug: "sono-profundo",
    name: "Kit Sono Profundo",

    headline: "Você acorda cansado mesmo depois de dormir?",
    subheadline:
      "Suporte nutricional voltado à qualidade do sono e ao descanso reparador.",

    heroHeadline: "Você merece acordar verdadeiramente descansado.",

    heroBullets: [
      "Melhore a qualidade do seu sono",
      "Reduza o cansaço e a desorientação matinal",
      "Desperte com mais disposição",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem:",

    heroImage: "/kits/sono-profundo/hero-bg.jpg",
    productImage: "/kits/sono-profundo/product.png",
    productLeavesImage: "/kits/sono-profundo/product-leaves.png",
    sealImage: "/kits/sono-profundo/seal.png",
    cardImage: "/kits/sono-profundo/card.webp",
    ogPreviewImage: "/kits/sono-profundo/og.webp",
    ogImage: `${BASE_URL}/kits/sono-profundo/og.webp`,

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
        role: "Suporte ao ciclo do sono",
        detail:
          "Fórmula voltada ao apoio da rotina noturna e à preparação do corpo para o descanso.",
      },
      {
        name: "SuperMag III",
        role: "Relaxamento muscular e neurológico",
        detail:
          "Magnésio em formulação voltada ao suporte do relaxamento e ao equilíbrio da rotina de descanso.",
      },
    ],

    dosage: [
      "SleepFor: 1 cápsula à noite",
      "SuperMag III: 1 cápsula ao deitar",
    ],

    benefits: [
      "Suporte à qualidade do sono",
      "Apoio ao descanso reparador",
      "Rotina noturna mais organizada",
      "Mais disposição ao acordar",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "inflamacao-cronica",
    name: "Kit Inflamação Crônica",

    headline: "Dores pelo corpo, cansaço e indisposição têm feito parte da sua rotina?",
    subheadline:
      "Protocolo de suporte à modulação inflamatória e ao estresse oxidativo.",

    heroHeadline: "Apoio diário para uma rotina com mais equilíbrio.",

    heroBullets: [
      "Suporte à modulação inflamatória",
      "Apoio contra o estresse oxidativo",
      "Rotina pensada para cansaço e indisposição",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem sente:",

    heroImage: "/kits/inflamacao-cronica/hero-bg.jpg",
    productImage: "/kits/inflamacao-cronica/product.png",
    productLeavesImage: "/kits/inflamacao-cronica/product-leaves.png",
    sealImage: "/kits/inflamacao-cronica/seal.png",
    cardImage: "/kits/inflamacao-cronica/card.webp",
    ogPreviewImage: "/kits/inflamacao-cronica/og.webp",
    ogImage: `${BASE_URL}/kits/inflamacao-cronica/og.webp`,

    indications: ["Dores pelo corpo", "Cansaço", "Indisposição"],

    ingredients: ["Ômega For Plus", "Cúrcuma", "NAC"],

    ingredientDetails: [
      {
        name: "Ômega For Plus",
        role: "Suporte nutricional anti-inflamatório",
        detail:
          "Fonte de ácidos graxos essenciais, utilizada como apoio nutricional em protocolos de equilíbrio inflamatório.",
      },
      {
        name: "Cúrcuma",
        role: "Apoio à modulação inflamatória",
        detail:
          "Ingrediente tradicionalmente associado ao suporte antioxidante e ao equilíbrio inflamatório.",
      },
      {
        name: "NAC",
        role: "Suporte antioxidante",
        detail:
          "Nutriente utilizado em protocolos de apoio ao estresse oxidativo e à defesa celular.",
      },
    ],

    dosage: [
      "Ômega For Plus: 1 cápsula pela manhã",
      "Cúrcuma: 1 cápsula pela manhã",
      "NAC: 1 cápsula pela manhã",
    ],

    benefits: [
      "Apoio ao equilíbrio inflamatório",
      "Suporte antioxidante",
      "Rotina nutricional organizada",
      "Mais consistência no cuidado diário",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "saude-intestinal",
    name: "Kit Saúde Intestinal",

    headline: "Seu intestino tem dado sinais de desequilíbrio?",
    subheadline:
      "Suporte ao equilíbrio da microbiota intestinal e à integridade da mucosa.",

    heroHeadline: "Cuidar do intestino é cuidar da base do bem-estar.",

    heroBullets: [
      "Suporte à microbiota intestinal",
      "Apoio à integridade da mucosa",
      "Rotina voltada ao conforto intestinal",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem apresenta:",

    heroImage: "/kits/saude-intestinal/hero-bg.jpg",
    productImage: "/kits/saude-intestinal/product.png",
    productLeavesImage: "/kits/saude-intestinal/product-leaves.png",
    sealImage: "/kits/saude-intestinal/seal.png",
    cardImage: "/kits/saude-intestinal/card.webp",
    ogPreviewImage: "/kits/saude-intestinal/og.webp",
    ogImage: `${BASE_URL}/kits/saude-intestinal/og.webp`,

    indications: [
      "Intestino preso",
      "Flatulência",
      "Disbiose",
      "Desconforto intestinal",
    ],

    ingredients: ["Simfort Plus", "Glutamine Pure"],

    ingredientDetails: [
      {
        name: "Simfort Plus",
        role: "Suporte à microbiota intestinal",
        detail:
          "Formulação voltada ao apoio do equilíbrio intestinal e à rotina de cuidado digestivo.",
      },
      {
        name: "Glutamine Pure",
        role: "Suporte à mucosa intestinal",
        detail:
          "Aminoácido utilizado em protocolos de suporte à integridade da barreira intestinal.",
      },
    ],

    dosage: [
      "Simfort Plus: 2 cápsulas ao dia",
      "Glutamine Pure: 1 dose por dia",
    ],

    benefits: [
      "Suporte ao equilíbrio intestinal",
      "Apoio ao conforto digestivo",
      "Rotina intestinal mais organizada",
      "Cuidado com a microbiota",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "energia-celular",
    name: "Kit Energia Celular",

    headline: "Sua energia cai ao longo do dia?",
    subheadline:
      "Suporte à função mitocondrial, energia celular e performance física e mental.",

    heroHeadline: "Mais suporte para sua energia de dentro para fora.",

    heroBullets: [
      "Suporte à função mitocondrial",
      "Apoio à disposição diária",
      "Rotina voltada à performance física e mental",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem sente:",

    heroImage: "/kits/energia-celular/hero-bg.jpg",
    productImage: "/kits/energia-celular/product.png",
    productLeavesImage: "/kits/energia-celular/product-leaves.png",
    sealImage: "/kits/energia-celular/seal.png",
    cardImage: "/kits/energia-celular/card.webp",
    ogPreviewImage: "/kits/energia-celular/og.webp",
    ogImage: `${BASE_URL}/kits/energia-celular/og.webp`,

    indications: [
      "Fadiga crônica",
      "Baixa disposição",
      "Queda de energia ao longo do dia",
      "Busca por suporte metabólico",
      "Performance física e mental",
    ],

    ingredients: ["L-Carnitina", "Coenzyme Q10", "SuperMag III"],

    ingredientDetails: [
      {
        name: "L-Carnitina",
        role: "Suporte ao metabolismo energético",
        detail:
          "Nutriente utilizado em protocolos voltados ao apoio do metabolismo e da produção de energia.",
      },
      {
        name: "Coenzyme Q10",
        role: "Suporte mitocondrial",
        detail:
          "Composto associado ao apoio da função mitocondrial e da energia celular.",
      },
      {
        name: "SuperMag III",
        role: "Suporte muscular e metabólico",
        detail:
          "Magnésio em formulação voltada ao apoio da rotina de energia, relaxamento e equilíbrio.",
      },
    ],

    dosage: [
      "Coenzima Q10 Plus: 2 cápsulas pela manhã",
      "L-Carnitina: 1 cápsula ao dia",
      "SuperMag III: 1 cápsula ao deitar",
    ],

    benefits: [
      "Apoio à energia celular",
      "Suporte à disposição diária",
      "Rotina voltada à performance",
      "Cuidado metabólico estruturado",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "saude-cardiaca",
    name: "Kit Saúde Cardíaca",

    headline: "Sua saúde cardiovascular merece cuidado contínuo.",
    subheadline:
      "Suporte cardiovascular, apoio ao controle do colesterol e à rotina de cuidado da pressão arterial.",

    heroHeadline: "Cuidado cardiovascular com rotina e orientação.",

    heroBullets: [
      "Suporte à saúde cardiovascular",
      "Apoio ao cuidado com colesterol e triglicérides",
      "Rotina voltada ao equilíbrio diário",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem busca suporte em:",

    heroImage: "/kits/saude-cardiaca/hero-bg.jpg",
    productImage: "/kits/saude-cardiaca/product.png",
    productLeavesImage: "/kits/saude-cardiaca/product-leaves.png",
    sealImage: "/kits/saude-cardiaca/seal.png",
    cardImage: "/kits/saude-cardiaca/card.webp",
    ogPreviewImage: "/kits/saude-cardiaca/og.webp",
    ogImage: `${BASE_URL}/kits/saude-cardiaca/og.webp`,

    indications: [
      "Doenças cardíacas e vasculares",
      "Aumento de colesterol e triglicérides",
      "Hipertensão arterial",
    ],

    ingredients: ["Ômega For Plus", "Coenzima Q10 Plus", "Magnésio Plus"],

    ingredientDetails: [
      {
        name: "Ômega For Plus",
        role: "Suporte cardiovascular",
        detail:
          "Fonte de ácidos graxos essenciais, utilizada em protocolos de apoio à saúde cardiovascular.",
      },
      {
        name: "Coenzima Q10 Plus",
        role: "Suporte energético e cardiovascular",
        detail:
          "Composto utilizado como apoio à energia celular e à rotina de cuidado cardiovascular.",
      },
      {
        name: "Magnésio Plus",
        role: "Suporte ao equilíbrio diário",
        detail:
          "Mineral utilizado em protocolos de apoio ao equilíbrio muscular, metabólico e cardiovascular.",
      },
    ],

    dosage: [
      "Ômega For Plus: 1 cápsula pela manhã",
      "Coenzima Q10 Plus: 1 cápsula pela manhã",
      "Magnésio Plus: 1 cápsula ao deitar",
    ],

    benefits: [
      "Suporte cardiovascular",
      "Apoio ao cuidado com colesterol",
      "Rotina preventiva organizada",
      "Cuidado diário com orientação",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "mobilidade-articular",
    name: "Kit Mobilidade e Conforto Articular",

    headline: "Dores articulares têm limitado seus movimentos?",
    subheadline:
      "Suporte ao conforto articular, mobilidade e rotina de cuidado anti-inflamatório.",

    heroHeadline: "Menos desconforto, mais movimento na rotina.",

    heroBullets: [
      "Suporte ao conforto articular",
      "Apoio à mobilidade",
      "Rotina voltada ao cuidado das articulações",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem apresenta:",

    heroImage: "/kits/mobilidade-articular/hero-bg.jpg",
    productImage: "/kits/mobilidade-articular/product.png",
    productLeavesImage: "/kits/mobilidade-articular/product-leaves.png",
    sealImage: "/kits/mobilidade-articular/seal.png",
    cardImage: "/kits/mobilidade-articular/card.webp",
    ogPreviewImage: "/kits/mobilidade-articular/og.webp",
    ogImage: `${BASE_URL}/kits/mobilidade-articular/og.webp`,

    indications: [
      "Dores articulares",
      "Rigidez e limitação de movimento",
      "Desgaste articular",
      "Inflamação crônica",
      "Recuperação de lesões",
    ],

    ingredients: ["Cartipro", "Curcuflan PEA"],

    ingredientDetails: [
      {
        name: "Cartipro",
        role: "Suporte à estrutura articular",
        detail:
          "Formulação voltada ao apoio nutricional das articulações e da mobilidade.",
      },
      {
        name: "Curcuflan PEA",
        role: "Suporte ao conforto articular",
        detail:
          "Composição utilizada em protocolos voltados ao conforto, à modulação inflamatória e ao cuidado articular.",
      },
    ],

    dosage: [
      "Cartipro: 1 cápsula ao dia",
      "Curcuflan PEA: 1 cápsula ao dia",
    ],

    benefits: [
      "Suporte ao conforto articular",
      "Apoio à mobilidade",
      "Cuidado com rigidez e limitação",
      "Rotina articular organizada",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "emagrecimento",
    name: "Kit Suporte ao Emagrecimento",

    headline: "Seu processo de emagrecimento precisa de suporte adequado?",
    subheadline:
      "Apoio à perda de peso, manutenção de massa muscular e elasticidade da pele.",

    heroHeadline: "Suporte inteligente para uma jornada de emagrecimento mais estruturada.",

    heroBullets: [
      "Apoio à manutenção de massa muscular",
      "Suporte à elasticidade da pele",
      "Rotina pensada para quem usa canetas emagrecedoras",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem apresenta:",

    heroImage: "/kits/emagrecimento/hero-bg.jpg",
    productImage: "/kits/emagrecimento/product.png",
    productLeavesImage: "/kits/emagrecimento/product-leaves.png",
    sealImage: "/kits/emagrecimento/seal.png",
    cardImage: "/kits/emagrecimento/card.webp",
    ogPreviewImage: "/kits/emagrecimento/og.webp",
    ogImage: `${BASE_URL}/kits/emagrecimento/og.webp`,

    indications: [
      "Queda de cabelo",
      "Flacidez cutânea",
      "Fraqueza e fadiga",
      "Perda de massa muscular",
      "Uso de canetas emagrecedoras",
    ],

    ingredients: ["Whey Protein", "Colagentek Plus II"],

    ingredientDetails: [
      {
        name: "Whey Protein",
        role: "Suporte à massa muscular",
        detail:
          "Fonte proteica utilizada em protocolos de apoio à manutenção de massa magra durante mudanças de peso.",
      },
      {
        name: "Colagentek Plus II",
        role: "Suporte à pele e estrutura corporal",
        detail:
          "Formulação voltada ao apoio da elasticidade da pele e da estrutura corporal.",
      },
    ],

    dosage: [
      "Whey Q10 Endogen: 2 medidas em 200 ml de água ou leite",
      "Colagentek Vitafor: 1 cápsula pela manhã",
    ],

    benefits: [
      "Suporte à massa muscular",
      "Apoio à elasticidade da pele",
      "Rotina nutricional para emagrecimento",
      "Cuidado com fraqueza e fadiga",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "energia-fisica-mental",
    name: "Kit Energia Física e Mental",

    headline: "Sua energia mental e física não acompanha sua rotina?",
    subheadline:
      "Suporte à função mitocondrial e ao aumento da energia celular.",

    heroHeadline: "Mais clareza, disposição e suporte para sua rotina.",

    heroBullets: [
      "Apoio à energia física e mental",
      "Suporte à produtividade",
      "Rotina voltada à concentração e disposição",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem sente:",

    heroImage: "/kits/energia-fisica-mental/hero-bg.jpg",
    productImage: "/kits/energia-fisica-mental/product.png",
    productLeavesImage: "/kits/energia-fisica-mental/product-leaves.png",
    sealImage: "/kits/energia-fisica-mental/seal.png",
    cardImage: "/kits/energia-fisica-mental/card.webp",
    ogPreviewImage: "/kits/energia-fisica-mental/og.webp",
    ogImage: `${BASE_URL}/kits/energia-fisica-mental/og.webp`,

    indications: [
      "Fadiga física e mental",
      "Baixa produtividade",
      "Dificuldade de concentração",
      "Sonolência diurna",
    ],

    ingredients: ["Active Up", "Taurina"],

    ingredientDetails: [
      {
        name: "Active Up",
        role: "Suporte à energia celular",
        detail:
          "Formulação voltada ao apoio da disposição e da rotina de energia física e mental.",
      },
      {
        name: "Taurina",
        role: "Suporte à performance e foco",
        detail:
          "Aminoácido utilizado em protocolos voltados à energia, foco e desempenho diário.",
      },
    ],

    dosage: ["Active Up + Taurina: 1 cápsula pela manhã"],

    benefits: [
      "Apoio à energia diária",
      "Suporte à concentração",
      "Rotina voltada à produtividade",
      "Menos sonolência durante o dia",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "imunidade-essencial",
    name: "Kit Imunidade Essencial",

    headline: "Sua imunidade precisa de mais atenção?",
    subheadline:
      "Suporte ao sistema imunológico e fortalecimento das defesas naturais.",

    heroHeadline: "Proteção, resistência e bem-estar na rotina.",

    heroBullets: [
      "Suporte ao sistema imunológico",
      "Apoio às defesas naturais",
      "Rotina voltada à proteção diária",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem apresenta:",

    heroImage: "/kits/imunidade-essencial/hero-bg.jpg",
    productImage: "/kits/imunidade-essencial/product.png",
    productLeavesImage: "/kits/imunidade-essencial/product-leaves.png",
    sealImage: "/kits/imunidade-essencial/seal.png",
    cardImage: "/kits/imunidade-essencial/card.webp",
    ogPreviewImage: "/kits/imunidade-essencial/og.webp",
    ogImage: `${BASE_URL}/kits/imunidade-essencial/og.webp`,

    indications: [
      "Infecções recorrentes",
      "Prevenção de gripes recorrentes",
      "Baixa imunidade",
      "Fadiga constante",
    ],

    ingredients: ["Imuno Swiss", "Própolis"],

    ingredientDetails: [
      {
        name: "Imuno Swiss",
        role: "Suporte imunológico",
        detail:
          "Formulação voltada ao apoio das defesas naturais e da rotina de proteção imunológica.",
      },
      {
        name: "Própolis",
        role: "Apoio às defesas naturais",
        detail:
          "Ingrediente tradicionalmente utilizado em protocolos de suporte ao sistema imunológico.",
      },
    ],

    dosage: [
      "Imuno Swiss: 1 cápsula 2x ao dia",
      "Própolis: 20 gotas ao dia",
    ],

    benefits: [
      "Suporte ao sistema imunológico",
      "Apoio às defesas naturais",
      "Rotina de proteção diária",
      "Cuidado com fadiga constante",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },

  {
    slug: "estrutura-muscular",
    name: "Kit Estrutura Muscular",

    headline: "Sua massa muscular precisa de suporte?",
    subheadline:
      "Suporte à perda muscular e melhora da performance física.",

    heroHeadline: "Força, estrutura e suporte muscular para sua rotina.",

    heroBullets: [
      "Apoio à manutenção muscular",
      "Suporte à performance física",
      "Rotina voltada à estrutura corporal",
    ],

    indicationsHeadline: "Esse protocolo foi pensado para quem apresenta:",

    heroImage: "/kits/estrutura-muscular/hero-bg.jpg",
    productImage: "/kits/estrutura-muscular/product.png",
    productLeavesImage: "/kits/estrutura-muscular/product-leaves.png",
    sealImage: "/kits/estrutura-muscular/seal.png",
    cardImage: "/kits/estrutura-muscular/card.webp",
    ogPreviewImage: "/kits/estrutura-muscular/og.webp",
    ogImage: `${BASE_URL}/kits/estrutura-muscular/og.webp`,

    indications: [
      "Sarcopenia",
      "Perda de massa muscular",
      "Desequilíbrio",
      "Busca por suporte muscular",
    ],

    ingredients: ["Whey Q10", "Creatina Pure 100%", "Vita D3"],

    ingredientDetails: [
      {
        name: "Whey Q10",
        role: "Suporte proteico",
        detail:
          "Fonte proteica utilizada em protocolos de apoio à massa muscular e performance física.",
      },
      {
        name: "Creatina Pure 100%",
        role: "Suporte à força e performance",
        detail:
          "Composto utilizado em protocolos voltados à performance, energia muscular e estrutura corporal.",
      },
      {
        name: "Vita D3",
        role: "Suporte metabólico e muscular",
        detail:
          "Vitamina utilizada como apoio à saúde muscular, óssea e metabólica.",
      },
    ],

    dosage: [
      "Whey Q10: 2 medidas em 200 ml de água ou leite desnatado",
      "Creatina Pure: 1 dose ao dia",
      "Vita D3: 1 cápsula pela manhã",
    ],

    benefits: [
      "Apoio à massa muscular",
      "Suporte à performance física",
      "Rotina voltada à força",
      "Cuidado com perda muscular",
    ],

    testimonials: undefined,

    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl: CHECKOUT_VERITASMEDI,
  },
];

export function getKitBySlug(slug: string) {
  return kits.find((kit) => kit.slug === slug);
}