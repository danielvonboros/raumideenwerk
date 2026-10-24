import { projects } from "@/content/projects";
import { servicePages } from "@/content/servicePages";
import { site } from "@/content/site";
import type { Locale, NavLink, SectionId, SectionLink } from "@/content/types";

interface Segments {
  root: string;
  projects: string;
  services: string;
  imprint: string;
  privacy: string;
}

const segments: Record<Locale, Segments> = {
  de: {
    root: "/",
    projects: "projekte",
    services: "leistungen",
    imprint: "impressum",
    privacy: "datenschutz",
  },
  en: {
    root: "/en/",
    projects: "projects",
    services: "services",
    imprint: "imprint",
    privacy: "privacy",
  },
};

export type PageRef =
  | { kind: "home" }
  | { kind: "imprint" }
  | { kind: "privacy" }
  | { kind: "project"; index: number }
  | { kind: "service"; index: number };

export const pathFor = (locale: Locale, page: PageRef): string => {
  const s = segments[locale];
  switch (page.kind) {
    case "home":
      return s.root;
    case "imprint":
      return `${s.root}${s.imprint}/`;
    case "privacy":
      return `${s.root}${s.privacy}/`;
    case "project":
      return `${s.root}${s.projects}/${projects[locale].items[page.index].slug}/`;
    case "service":
      return `${s.root}${s.services}/${servicePages[locale].items[page.index].slug}/`;
  }
};

export const sectionHref = (locale: Locale, section: SectionId) =>
  `${pathFor(locale, { kind: "home" })}#${section}`;

export const sectionLink = (locale: Locale, link: SectionLink): NavLink => ({
  href: sectionHref(locale, link.section),
  label: link.label,
});

export const absoluteUrl = (path: string) => `${site.url}${path}`;

export const otherLocale = (locale: Locale): Locale => (locale === "de" ? "en" : "de");

export const alternatesFor = (page: PageRef): Record<Locale, string> => ({
  de: pathFor("de", page),
  en: pathFor("en", page),
});

export const findProject = (locale: Locale, slug: string) => {
  const index = projects[locale].items.findIndex((item) => item.slug === slug);
  return index === -1 ? null : { index, project: projects[locale].items[index] };
};

export const findService = (locale: Locale, slug: string) => {
  const index = servicePages[locale].items.findIndex((item) => item.slug === slug);
  return index === -1 ? null : { index, service: servicePages[locale].items[index] };
};

export const servicesForProject = (locale: Locale, projectIndex: number) =>
  servicePages[locale].items
    .map((service, index) => ({ service, index }))
    .filter(({ service }) => service.projects.includes(projectIndex));
