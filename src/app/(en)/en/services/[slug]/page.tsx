import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findService, metadataAlternates, site } from "@/content/site";
import { ServicePage } from "@/components/ServicePage";

const LOCALE = "en" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return site[LOCALE].servicePages.items.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = findService(LOCALE, slug);
  if (!found) return {};
  const { index, service } = found;

  return {
    title: service.metaTitle,
    description: service.description,
    alternates: metadataAlternates(LOCALE, { kind: "service", index }),
    openGraph: {
      title: `${service.metaTitle} | raumideenwerk`,
      description: service.description,
      type: "website",
      locale: "en_GB",
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!findService(LOCALE, slug)) notFound();
  return <ServicePage locale={LOCALE} slug={slug} />;
}
