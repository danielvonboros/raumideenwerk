import type { MetadataRoute } from "next";
import { alternatesFor, locales, pathFor, site, type PageRef } from "@/content/site";

const base = "https://www.raumideenwerk.com";

export const dynamic = "force-static";

function entry(page: PageRef, priority: number, changeFrequency: "monthly" | "yearly") {
  const all = alternatesFor(page);
  return locales.map((locale) => ({
    url: base + pathFor(locale, page),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((other) => [other, base + all[other]]),
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry({ kind: "home" }, 1, "monthly"),
    ...site.de.projects.items.flatMap((_, index) =>
      entry({ kind: "project", index }, 0.7, "yearly"),
    ),
    ...entry({ kind: "imprint" }, 0.2, "yearly"),
    ...entry({ kind: "privacy" }, 0.2, "yearly"),
  ];
}