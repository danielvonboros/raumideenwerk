import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { servicePages } from "@/content/servicePages";
import { locales } from "@/content/site";
import { absoluteUrl, alternatesFor, pathFor, type PageRef } from "@/lib/routes";

export const dynamic = "force-static";

const entry = (page: PageRef, priority: number, changeFrequency: "monthly" | "yearly") => {
  const all = alternatesFor(page);
  return locales.map((locale) => ({
    url: absoluteUrl(pathFor(locale, page)),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((other) => [other, absoluteUrl(all[other])])),
    },
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
