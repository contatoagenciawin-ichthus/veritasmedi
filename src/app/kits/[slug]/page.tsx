import { notFound } from "next/navigation";

import { getKitBySlug, kits } from "@/lib/kits";
import { KitLandingPage } from "@/components/kit/kit-landing-page";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return kits.map((kit) => ({
    slug: kit.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const kit = getKitBySlug(slug);

  if (!kit) {
    return {};
  }

  const title =
    kit.heroHeadline ??
    `${kit.name} | VeritasMedi`;

  const description =
    kit.subheadline;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url: `https://kits.veritasmedi.com.br/kits/${kit.slug}`,
      siteName: "VeritasMedi",
      locale: "pt_BR",
      type: "website",

      images: [
        {
          url: kit.ogImage,
          width: 1200,
          height: 630,
          alt: kit.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [kit.ogImage],
    },
  };
}

export default async function KitPage({ params }: Props) {
  const { slug } = await params;

  const kit = getKitBySlug(slug);

  if (!kit) {
    notFound();
  }

  return <KitLandingPage kit={kit} />;
}