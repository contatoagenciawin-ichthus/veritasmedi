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

export type KitMechanismStep = {
  n: string;
  title: string;
  desc: string;
};

export type KitMechanism = {
  intro: string;           // parágrafo de abertura da dobra
  cardCaption: string;     // legenda sobre a imagem card.webp
  steps: KitMechanismStep[];
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

  mechanism: KitMechanism;

  testimonials?: KitTestimonial[];

  whatsappNumber?: string;
  checkoutUrl: string;
};

const WHATSAPP_VERITASMEDI = "5519989734609";
const CHECKOUT_VERITASMEDI = "https://www.veritasmedi.com.br/";
const BASE_URL = "https://kits.veritasmedi.com.br";

export const kits: Kit[] = [

  // ─── 01. SONO PROFUNDO ────────────────────────────────────────────────────
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

    heroImage:          "/kits/sono-profundo/hero-bg.jpg",
    productImage:       "/kits/sono-profundo/product.png",
    productLeavesImage: "/kits/sono-profundo/product-leaves.png",
    sealImage:          "/kits/sono-profundo/seal.png",
    cardImage:          "/kits/sono-profundo/card.webp",
    ogPreviewImage:     "/kits/sono-profundo/og.webp",
    ogImage:            `${BASE_URL}/kits/sono-profundo/og.webp`,

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

    mechanism: {
      intro:
        "O protocolo atua em três frentes simultâneas: regulação do ciclo circadiano, relaxamento muscular e neurológico, e suporte à produção de melatonina endógena. O resultado é um sono que repara — não apenas que adormece.",
      cardCaption: "Sono de qualidade à noite.\nVida ativa durante o dia.",
      steps: [
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
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 02. INFLAMAÇÃO CRÔNICA ───────────────────────────────────────────────
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

    heroImage:          "/kits/inflamacao-cronica/hero-bg.jpg",
    productImage:       "/kits/inflamacao-cronica/product.png",
    productLeavesImage: "/kits/inflamacao-cronica/product-leaves.png",
    sealImage:          "/kits/inflamacao-cronica/seal.png",
    cardImage:          "/kits/inflamacao-cronica/card.webp",
    ogPreviewImage:     "/kits/inflamacao-cronica/og.webp",
    ogImage:            `${BASE_URL}/kits/inflamacao-cronica/og.webp`,

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

    mechanism: {
      intro:
        "A inflamação crônica é silenciosa: não tem febre, mas desgasta. O protocolo atua reduzindo os mediadores inflamatórios circulantes, neutralizando radicais livres e protegendo as células do estresse oxidativo acumulado.",
      cardCaption: "Menos inflamação.\nMais equilíbrio e disposição.",
      steps: [
        {
          n: "01",
          title: "Modula a resposta inflamatória",
          desc: "Ácidos graxos essenciais e curcumina agem nas vias inflamatórias, reduzindo mediadores como IL-6 e PCR.",
        },
        {
          n: "02",
          title: "Neutraliza o estresse oxidativo",
          desc: "O NAC eleva os níveis de glutationa — principal antioxidante intracelular — protegendo as células do dano acumulado.",
        },
        {
          n: "03",
          title: "Cria uma rotina de proteção contínua",
          desc: "O efeito é cumulativo: quanto mais consistente o uso, maior a proteção e menor a sobrecarga inflamatória.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 03. SAÚDE INTESTINAL ─────────────────────────────────────────────────
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

    heroImage:          "/kits/saude-intestinal/hero-bg.jpg",
    productImage:       "/kits/saude-intestinal/product.png",
    productLeavesImage: "/kits/saude-intestinal/product-leaves.png",
    sealImage:          "/kits/saude-intestinal/seal.png",
    cardImage:          "/kits/saude-intestinal/card.webp",
    ogPreviewImage:     "/kits/saude-intestinal/og.webp",
    ogImage:            `${BASE_URL}/kits/saude-intestinal/og.webp`,

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

    mechanism: {
      intro:
        "O intestino abriga 70% do sistema imune e produz grande parte dos neurotransmissores do corpo. O protocolo age restaurando o equilíbrio bacteriano, reparando a mucosa e reduzindo a permeabilidade intestinal aumentada.",
      cardCaption: "Intestino equilibrado.\nBem-estar de dentro para fora.",
      steps: [
        {
          n: "01",
          title: "Reequilibra a microbiota",
          desc: "Cepas probióticas diversas recolonizam o intestino, competindo com bactérias oportunistas e restaurando a diversidade bacteriana.",
        },
        {
          n: "02",
          title: "Repara a mucosa intestinal",
          desc: "A glutamina nutre diretamente as células do epitélio, reduzindo a permeabilidade e o desconforto associado à disbiose.",
        },
        {
          n: "03",
          title: "Estabelece uma barreira mais sólida",
          desc: "Com a mucosa íntegra e a flora equilibrada, o organismo absorve melhor os nutrientes e reduz reações de hipersensibilidade.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 04. ENERGIA CELULAR ──────────────────────────────────────────────────
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

    heroImage:          "/kits/energia-celular/hero-bg.jpg",
    productImage:       "/kits/energia-celular/product.png",
    productLeavesImage: "/kits/energia-celular/product-leaves.png",
    sealImage:          "/kits/energia-celular/seal.png",
    cardImage:          "/kits/energia-celular/card.webp",
    ogPreviewImage:     "/kits/energia-celular/og.webp",
    ogImage:            `${BASE_URL}/kits/energia-celular/og.webp`,

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

    mechanism: {
      intro:
        "A fadiga crônica tem origem celular: mitocôndrias sobrecarregadas produzem menos ATP. O protocolo age diretamente na cadeia respiratória mitocondrial, melhorando a eficiência energética e reduzindo o acúmulo de radicais livres.",
      cardCaption: "Energia sustentada ao longo do dia.\nSem picos e sem colapsos.",
      steps: [
        {
          n: "01",
          title: "Otimiza a produção de ATP",
          desc: "CoQ10 atua como cofator essencial na cadeia de transporte de elétrons, aumentando a síntese de energia nas mitocôndrias.",
        },
        {
          n: "02",
          title: "Transporta gordura para ser queimada",
          desc: "A L-Carnitina leva ácidos graxos para dentro da mitocôndria, convertendo-os em energia disponível para músculo e cérebro.",
        },
        {
          n: "03",
          title: "Sustenta o equilíbrio metabólico",
          desc: "O magnésio é cofator de mais de 300 reações enzimáticas — sem ele, toda a cadeia energética perde eficiência.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 05. SAÚDE CARDÍACA ───────────────────────────────────────────────────
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

    heroImage:          "/kits/saude-cardiaca/hero-bg.jpg",
    productImage:       "/kits/saude-cardiaca/product.png",
    productLeavesImage: "/kits/saude-cardiaca/product-leaves.png",
    sealImage:          "/kits/saude-cardiaca/seal.png",
    cardImage:          "/kits/saude-cardiaca/card.webp",
    ogPreviewImage:     "/kits/saude-cardiaca/og.webp",
    ogImage:            `${BASE_URL}/kits/saude-cardiaca/og.webp`,

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

    mechanism: {
      intro:
        "A saúde cardiovascular depende de três pilares: perfil lipídico equilibrado, músculo cardíaco bem nutrido e vasos funcionais. O protocolo age nos três simultaneamente, com ingredientes de ação comprovada.",
      cardCaption: "Coração protegido.\nRotina cardiovascular ativa.",
      steps: [
        {
          n: "01",
          title: "Equilibra o perfil lipídico",
          desc: "Os ácidos graxos EPA e DHA reduzem triglicerídeos circulantes e modulam a inflamação nas paredes vasculares.",
        },
        {
          n: "02",
          title: "Nutre o músculo cardíaco",
          desc: "A CoQ10 é essencial para a produção de energia no miocárdio — o coração tem uma das maiores demandas energéticas do corpo.",
        },
        {
          n: "03",
          title: "Regula a pressão e o ritmo",
          desc: "O magnésio atua na contratilidade muscular e na regulação do ritmo cardíaco, sendo cofator indispensável para o equilíbrio eletrolítico.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 06. MOBILIDADE ARTICULAR ─────────────────────────────────────────────
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

    heroImage:          "/kits/mobilidade-articular/hero-bg.jpg",
    productImage:       "/kits/mobilidade-articular/product.png",
    productLeavesImage: "/kits/mobilidade-articular/product-leaves.png",
    sealImage:          "/kits/mobilidade-articular/seal.png",
    cardImage:          "/kits/mobilidade-articular/card.webp",
    ogPreviewImage:     "/kits/mobilidade-articular/og.webp",
    ogImage:            `${BASE_URL}/kits/mobilidade-articular/og.webp`,

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

    mechanism: {
      intro:
        "A dor articular crônica tem duas causas principais: degradação da cartilagem e inflamação local persistente. O protocolo age em ambas — reconstruindo a estrutura articular e reduzindo a cascata inflamatória que mantém a dor.",
      cardCaption: "Articulações protegidas.\nMovimento com conforto e liberdade.",
      steps: [
        {
          n: "01",
          title: "Reconstrói a cartilagem",
          desc: "Os componentes estruturais da matrix cartilaginosa inibem enzimas que degradam a articulação e estimulam sua regeneração.",
        },
        {
          n: "02",
          title: "Reduz a inflamação local",
          desc: "A curcumina e a PEA agem diretamente na inflamação articular, reduzindo a dor sem os efeitos adversos de anti-inflamatórios convencionais.",
        },
        {
          n: "03",
          title: "Preserva a viscosidade articular",
          desc: "Com a cartilagem nutrida e a inflamação controlada, a articulação recupera sua fluidez e amplitude de movimento.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 07. EMAGRECIMENTO ───────────────────────────────────────────────────
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

    heroImage:          "/kits/emagrecimento/hero-bg.jpg",
    productImage:       "/kits/emagrecimento/product.png",
    productLeavesImage: "/kits/emagrecimento/product-leaves.png",
    sealImage:          "/kits/emagrecimento/seal.png",
    cardImage:          "/kits/emagrecimento/card.webp",
    ogPreviewImage:     "/kits/emagrecimento/og.webp",
    ogImage:            `${BASE_URL}/kits/emagrecimento/og.webp`,

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

    mechanism: {
      intro:
        "Emagrecer rápido sem suporte adequado resulta em perda de músculo, flacidez e fadiga. O protocolo garante que a perda de peso seja composta majoritariamente de gordura — preservando estrutura, pele e energia durante o processo.",
      cardCaption: "Emagrecimento estruturado.\nCorpo mais firme e disposto.",
      steps: [
        {
          n: "01",
          title: "Preserva a massa muscular",
          desc: "A proteína de alto valor biológico fornece aminoácidos essenciais que sinalizam ao organismo para manter o músculo mesmo em déficit calórico.",
        },
        {
          n: "02",
          title: "Apoia a elasticidade da pele",
          desc: "O colágeno hidrolisado nutre a matriz extracelular da pele, reduzindo a flacidez associada à perda de peso rápida.",
        },
        {
          n: "03",
          title: "Mantém energia e estrutura ao longo do processo",
          desc: "Com proteína e colágeno adequados, o corpo emagrece com mais integridade — sem o ciclo de fadiga e reganho.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 08. ENERGIA FÍSICA E MENTAL ─────────────────────────────────────────
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

    heroImage:          "/kits/energia-fisica-mental/hero-bg.jpg",
    productImage:       "/kits/energia-fisica-mental/product.png",
    productLeavesImage: "/kits/energia-fisica-mental/product-leaves.png",
    sealImage:          "/kits/energia-fisica-mental/seal.png",
    cardImage:          "/kits/energia-fisica-mental/card.webp",
    ogPreviewImage:     "/kits/energia-fisica-mental/og.webp",
    ogImage:            `${BASE_URL}/kits/energia-fisica-mental/og.webp`,

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

    mechanism: {
      intro:
        "Energia física e mental têm a mesma origem: células bem nutridas e mitocôndrias funcionando com eficiência. O protocolo age nos substratos energéticos do cérebro e do músculo, melhorando foco, disposição e resistência ao cansaço.",
      cardCaption: "Foco e disposição durante todo o dia.\nSem depender de estimulantes.",
      steps: [
        {
          n: "01",
          title: "Eleva a disponibilidade de energia celular",
          desc: "Os compostos do Active Up atuam nos precursores energéticos do ciclo de Krebs, aumentando a produção de ATP disponível para cérebro e músculo.",
        },
        {
          n: "02",
          title: "Melhora a transmissão nervosa e o foco",
          desc: "A taurina modula neurotransmissores e reduz a excitabilidade neural excessiva — resultando em mais clareza e menos fadiga mental.",
        },
        {
          n: "03",
          title: "Sustenta a energia sem picos e quedas",
          desc: "Sem estimulantes, o protocolo melhora a energia de base — aquela que sustenta a rotina inteira, não só as primeiras horas do dia.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 09. IMUNIDADE ESSENCIAL ──────────────────────────────────────────────
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

    heroImage:          "/kits/imunidade-essencial/hero-bg.jpg",
    productImage:       "/kits/imunidade-essencial/product.png",
    productLeavesImage: "/kits/imunidade-essencial/product-leaves.png",
    sealImage:          "/kits/imunidade-essencial/seal.png",
    cardImage:          "/kits/imunidade-essencial/card.webp",
    ogPreviewImage:     "/kits/imunidade-essencial/og.webp",
    ogImage:            `${BASE_URL}/kits/imunidade-essencial/og.webp`,

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

    mechanism: {
      intro:
        "Imunidade baixa não é apenas 'pegar gripe com facilidade' — é um sistema de defesa que perdeu eficiência em múltiplos níveis. O protocolo age fortalecendo tanto a imunidade inata (primeira linha de defesa) quanto a adaptativa (resposta específica).",
      cardCaption: "Defesas fortalecidas.\nMenos interrupções, mais presença.",
      steps: [
        {
          n: "01",
          title: "Ativa a primeira linha de defesa",
          desc: "Os compostos do Imuno Swiss estimulam macrófagos e células NK — responsáveis pela resposta imediata a vírus e bactérias.",
        },
        {
          n: "02",
          title: "Amplifica a resposta antiviral",
          desc: "A própolis concentrada contém flavonoides e ácidos fenólicos com ação antimicrobiana e estimulante da produção de interferon.",
        },
        {
          n: "03",
          title: "Constrói uma imunidade de base sólida",
          desc: "Com uso contínuo, o protocolo eleva o limiar imunológico — reduzindo a frequência, intensidade e duração das infecções.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },

  // ─── 10. ESTRUTURA MUSCULAR ───────────────────────────────────────────────
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

    heroImage:          "/kits/estrutura-muscular/hero-bg.jpg",
    productImage:       "/kits/estrutura-muscular/product.png",
    productLeavesImage: "/kits/estrutura-muscular/product-leaves.png",
    sealImage:          "/kits/estrutura-muscular/seal.png",
    cardImage:          "/kits/estrutura-muscular/card.webp",
    ogPreviewImage:     "/kits/estrutura-muscular/og.webp",
    ogImage:            `${BASE_URL}/kits/estrutura-muscular/og.webp`,

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

    mechanism: {
      intro:
        "Músculo não é só estética — é o principal órgão metabólico do corpo. Perdê-lo acelera o envelhecimento, reduz o metabolismo e aumenta o risco de doenças. O protocolo fornece os três pilares da síntese muscular: proteína, energia imediata e regulação hormonal.",
      cardCaption: "Massa muscular preservada.\nForça e estrutura para a vida.",
      steps: [
        {
          n: "01",
          title: "Fornece os blocos de construção muscular",
          desc: "A proteína de alto valor biológico entrega todos os aminoácidos essenciais, ativando a via mTOR — o principal sinal de síntese proteica muscular.",
        },
        {
          n: "02",
          title: "Aumenta força e potência muscular",
          desc: "A creatina eleva os estoques de fosfocreatina, permitindo maior geração de força e melhor recuperação entre séries e treinos.",
        },
        {
          n: "03",
          title: "Regula hormônios e saúde óssea",
          desc: "A vitamina D3 otimiza a função muscular, regula testosterona e mantém a densidade óssea — base estrutural para sustentar a massa muscular.",
        },
      ],
    },

    testimonials: undefined,
    whatsappNumber: WHATSAPP_VERITASMEDI,
    checkoutUrl:    CHECKOUT_VERITASMEDI,
  },
];

export function getKitBySlug(slug: string) {
  return kits.find((kit) => kit.slug === slug);
}