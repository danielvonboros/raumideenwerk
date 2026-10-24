import { SECTION_IDS } from "./site";
import type { Locale, ProjectPageContent } from "./types";

export const projectPage: Record<Locale, ProjectPageContent> = {
  de: {
    back: "alle projekte",
    goal: "projektziel",
    story: "über dieses projekt",
    materials: "materialien",
    dimensions: "abmessungen",
    year: "jahr",
    services: "leistung",
    gallery: "bilder",
    navigation: "weitere projekte",
    ctaTitle: "interessiert an einem ähnlichen projekt?",
    ctaText: "Lass uns über deine Wohnung sprechen. Das Erstgespräch ist der erste Schritt.",
    ctaButton: { section: SECTION_IDS.contact, label: "erstgespräch buchen" },
    prev: "vorheriges projekt",
    next: "nächstes projekt",
  },
  en: {
    back: "all projects",
    goal: "project goal",
    story: "about this project",
    materials: "materials",
    dimensions: "dimensions",
    year: "year",
    services: "service",
    gallery: "images",
    navigation: "more projects",
    ctaTitle: "interested in something similar?",
    ctaText: "Let's talk about your home. The first call is where it starts.",
    ctaButton: { section: SECTION_IDS.contact, label: "book a first call" },
    prev: "previous project",
    next: "next project",
  },
};
