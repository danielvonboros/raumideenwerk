import type { Locale, SiteContent } from "./types";
import { de } from "./de";
import { en } from "./en";

export const locales: Locale[] = ["de", "en"];

export const site: Record<Locale, SiteContent> = { de, en };

export const localeLabel: Record<Locale, string> = { de: "de", en: "en" };

const segments: Record<Locale, { root: string; projects: string; imprint: string; privacy: string }> =
  {
    de: { root: "/", projects: "projekte", imprint: "impressum", privacy: "datenschutz" },
    en: { root: "/en/", projects: "projects", imprint: "imprint", privacy: "privacy" },
  };

export type PageRef =
  | { kind: "home" }
  | { kind: "imprint" }
  | { kind: "privacy" }
  | { kind: "project"; index: number };

export function pathFor(locale: Locale, page: PageRef): string {
  const s = segments[locale];
  switch (page.kind) {
    case "home":
      return s.root;
    case "imprint":
      return `${s.root}${s.imprint}/`;
    case "privacy":
      return `${s.root}${s.privacy}/`;
    case "project": {
      const project = site[locale].projects.items[page.index];
      return `${s.root}${s.projects}/${project.slug}/`;
    }
  }
}

export function alternatesFor(page: PageRef): Record<Locale, string> {
  return { de: pathFor("de", page), en: pathFor("en", page) };
}

export function metadataAlternates(locale: Locale, page: PageRef) {
  const all = alternatesFor(page);
  return {
    canonical: all[locale],
    languages: { de: all.de, en: all.en, "x-default": all.de },
  };
}

export function findProject(locale: Locale, slug: string) {
  const index = site[locale].projects.items.findIndex((item) => item.slug === slug);
  return index === -1 ? null : { index, project: site[locale].projects.items[index] };
}

const keywords = [
"interior design",
    "room concepts",
    "zoning",
    "space optimization",
    "small apartment design",
    "Berlin interior designer",
    "custom furniture",
    "mid-century modern",
    "Innenarchitektur Berlin",
    "Raumkonzept",
    "Raumaufteilung",
    "Wohnung einrichten",
    "Möbelplanung",
    "Wohnungsoptimierung",
    "kleine Wohnung gestalten",
    "Möbeldesign Berlin",
    "Möbeldesign",
    "maßgefertigte Möbel",
    "Innenarchitektur",
    "handgefertigte Möbel",
    "maßgeschneiderte Möbel",
    "Möbel nach Maß",
    "Innenraumgestaltung",
    "Raumkonzepte",
    "Designberatung",
    "Möbel",
    "Architektur",
    "Inneneinrichtung",
    "Raumgestaltung",
    "Wohnkultur",
    "Design",
    "Einrichtungsideen",
    "kreative Möbel",
    "exklusive Möbel",
    "individuelle Möbel",
    "Designmöbel",
    "Möbelherstellung",
    "Innenarchitekt",
    "Raumplanung",
    "Innenraumkonzepte",
    "Wohnraumgestaltung",
    "kreative Innenräume",
    "Designlösungen",
    "Inneneinrichtungsideen",
    "Möbelgestaltung",
    "Architekturdesign",];

const rootMeta: Record<Locale, { title: string; description: string; ogTitle: string }> = {
  de: {
    title: "Innenarchitektur Berlin für kleine Wohnungen | raumideenwerk",
    description:
      "Innenarchitektur und Raumplanung für kleine Wohnungen in Berlin. Clevere Raumkonzepte, Stauraumlösungen und individuelle Möbelplanung – für mehr Platz ohne Umzug.",
    ogTitle: "raumideenwerk — Innenarchitektur und Raumplanung in Berlin",
  },
  en: {
    title: "Interior Architecture in Berlin for Small Flats | raumideenwerk",
    description:
      "Interior architecture and space planning for small flats in Berlin. Clever spatial concepts, storage solutions and bespoke furniture — more room without moving.",
    ogTitle: "raumideenwerk — Interior Architecture and Space Planning in Berlin",
  },
};

export function rootMetadata(locale: Locale) {
  const m = rootMeta[locale];
  return {
    metadataBase: new URL("https://www.raumideenwerk.com"),
    title: { default: m.title, template: "%s | raumideenwerk" },
    description: m.description,
    keywords,
    authors: [{ name: "Daniel von Boros" }],
    openGraph: {
      title: m.ogTitle,
      description: m.description,
      url: "https://www.raumideenwerk.com" + pathFor(locale, { kind: "home" }),
      siteName: "raumideenwerk",
      locale: locale === "de" ? "de_DE" : "en_GB",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: m.ogTitle,
      description: m.description,
      images: ["https://www.raumideenwerk.com/website.webp"],
    },
    robots: { index: true, follow: true },
  };
}