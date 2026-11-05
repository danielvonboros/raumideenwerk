import type { MetadataRoute } from "next";
import { about } from "@/content/about";
import { hero } from "@/content/hero";
import { projects } from "@/content/projects";
import { servicePages } from "@/content/servicePages";
import { locales } from "@/content/site";
import { absoluteUrl, alternatesFor, pathFor, type PageRef } from "@/lib/routes";

export const dynamic = "force-static";

const unique = (sources: string[]) => [...new Set(sources)].map(absoluteUrl);

const cardImages = (index: number) => {
  const project = projects.de.items[index];
  return [project.cover.src, project.detail.src];
};

const imagesFor = (page: PageRef): string[] => {
  switch (page.kind) {
    case "home":
      return unique([
        hero.de.imageTop.src,
        hero.de.imageBottom.src,
        about.de.portrait.src,
        ...projects.de.items.flatMap((_, index) => cardImages(index)),
      ]);
    case "service": {
      const service = servicePages.de.items[page.index];
      return unique([service.image.src, ...service.projects.flatMap(cardImages)]);
    }
    case "project": {
      const project = projects.de.items[page.index];
      return unique([...cardImages(page.index), ...project.gallery.map((image) => image.src)]);
    }
    default:
      return [];
  }
};

const entry = (page: PageRef, priority: number, changeFrequency: "monthly" | "yearly") => {
  const all = alternatesFor(page);
  const images = imagesFor(page);
  return locales.map((locale) => ({
    url: absoluteUrl(pathFor(locale, page)),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((other) => [other, absoluteUrl(all[other])])),
    },
    ...(images.length > 0 && { images }),
  }));
};

const sitemap = (): MetadataRoute.Sitemap => [
  ...entry({ kind: "home" }, 1, "monthly"),
  ...servicePages.de.items.flatMap((_, index) => entry({ kind: "service", index }, 0.8, "monthly")),
  ...projects.de.items.flatMap((_, index) => entry({ kind: "project", index }, 0.7, "yearly")),
  ...entry({ kind: "imprint" }, 0.2, "yearly"),
  ...entry({ kind: "privacy" }, 0.2, "yearly"),
];

export default sitemap;
