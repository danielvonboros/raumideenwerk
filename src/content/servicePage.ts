import { SECTION_IDS } from "./site";
import type { Locale, ServicePageContent } from "./types";

export const servicePage: Record<Locale, ServicePageContent> = {
  de: {
    back: "alle leistungen",
    spine: "berlin",
    planning: "so plane ich",
    costs: "was kostet das?",
    planningCosts: "Die Planung läuft über meine Pakete mit festen Grundpreisen für Räume bis 20 m²: „impuls“ (online) 590 €, „konzept“ 890 €, „transformation“ 1.490 €. Die individuelle Möbelplanung ist in „transformation“ enthalten und in „konzept“ für 500–700 € zubuchbar.",
    packagesLink: { section: SECTION_IDS.packages, label: "alle pakete ansehen" },
    projects: "passende projekte",
    faq: "häufige fragen",
    more: "weitere leistungen",
    ctaTitle: "lass uns über deine wohnung sprechen",
    ctaText: "Im Erstgespräch klären wir, welche Lösung zu deinem Raum und deinem Alltag passt.",
    ctaButton: { section: SECTION_IDS.contact, label: "erstgespräch buchen" },
  },
  en: {
    back: "all services",
    spine: "berlin",
    planning: "how i plan it",
    costs: "what does it cost?",
    planningCosts: "Planning runs through my packages, with fixed base prices for rooms up to 20 m²: “impulse” (online) €590, “concepts” €890, “transformation” €1,490. Bespoke furniture planning is included in “transformation” and can be added to “concepts” for €500–700.",
    packagesLink: { section: SECTION_IDS.packages, label: "see all packages" },
    projects: "related projects",
    faq: "frequently asked questions",
    more: "more services",
    ctaTitle: "let's talk about your flat",
    ctaText: "In the first call we work out which solution fits your room and your daily life.",
    ctaButton: { section: SECTION_IDS.contact, label: "book a first call" },
  },
};
