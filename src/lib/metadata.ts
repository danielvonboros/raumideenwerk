import type { Metadata } from "next";
import { legal } from "@/content/legal";
import { keywords, meta } from "@/content/meta";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { absoluteUrl, alternatesFor, findProject, findService, pathFor, type PageRef } from "./routes";

const ogLocale: Record<Locale, string> = { de: "de_DE", en: "en_GB" };

const alternates = (locale: Locale, page: PageRef) => {
  const all = alternatesFor(page);
  return {
    canonical: all[locale],
    languages: { de: all.de, en: all.en, "x-default": all.de },
  };
};

export const rootMetadata = (locale: Locale): Metadata => {
  const m = meta[locale];
  return {
    metadataBase: new URL(site.url),
    title: { default: m.title, template: `%s | ${site.name}` },
    description: m.description,
    keywords,
    authors: [{ name: site.owner }],
    openGraph: {
      title: m.ogTitle,
      description: m.description,
      url: absoluteUrl(pathFor(locale, { kind: "home" })),
      siteName: site.name,
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.description,
      images: [absoluteUrl("/website.webp")],
    },
    robots: { index: true, follow: true },
  };
};

export const homeMetadata = (locale: Locale): Metadata => ({
  alternates: alternates(locale, { kind: "home" }),
});

export const projectMetadata = (locale: Locale, slug: string): Metadata => {
  const found = findProject(locale, slug);
  if (!found) return {};
  const { index, project } = found;
  return {
    title: project.metaTitle,
    description: project.description,
    alternates: alternates(locale, { kind: "project", index }),
    openGraph: {
      title: `${project.metaTitle} | ${site.name}`,
      description: project.description,
      type: "article",
      locale: ogLocale[locale],
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
};

export const serviceMetadata = (locale: Locale, slug: string): Metadata => {
  const found = findService(locale, slug);
  if (!found) return {};
  const { index, service } = found;
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: alternates(locale, { kind: "service", index }),
    openGraph: {
      title: `${service.metaTitle} | ${site.name}`,
      description: service.description,
      type: "website",
      locale: ogLocale[locale],
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
};

export const legalMetadata = (locale: Locale, kind: "imprint" | "privacy"): Metadata => ({
  title: legal[locale].meta[kind].title,
  description: legal[locale].meta[kind].description,
  alternates: alternates(locale, { kind }),
});
