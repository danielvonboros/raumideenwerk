import type { Locale, ServicesContent } from "./types";

export const services: Record<Locale, ServicesContent> = {
  de: {
    title: "meine leistungen",
    subtitle: "smart space. better living.",
    items: [
      {
        title: "raumgestaltung & innenarchitektur",
        text: "Ich habe mich darauf spezialisiert, bestehende Räume in funktionale, ästhetische und personalisierte Lebensräume zu verwandeln.",
      },
      {
        title: "raumoptimierung ohne umzug",
        text: "Anstatt umzuziehen, helfe ich Menschen, das Beste aus dem aktuellen Zuhause herauszuholen – durch clevere Umorganisation, durchdachte Zonierung und maßgeschneiderte Möbel-Lösungen.",
      },
      {
        title: "raumkonzepte und einbaulösungen",
        text: "Jedes Konzept wird auf den Lebensstil der Kunden zugeschnitten und verbindet Praktikabilität mit zeitlosem Design.",
      },
      {
        title: "optimierte nutzung und verbessertes raumgefühl",
        text: "Das Ergebnis: Wohnräume, die größer wirken, besser funktionieren und die Menschen, die in ihnen leben, wirklich widerspiegeln.",
      },
    ],
  },
  en: {
    title: "what i do",
    subtitle: "smart space. better living.",
    items: [
      {
        title: "interior design & spatial concepts",
        text: "I specialise in turning existing rooms into functional, beautiful and personal living spaces.",
      },
      {
        title: "more space without moving",
        text: "Instead of moving house, I help people get the most out of the home they already have — through clever reorganisation, considered zoning and bespoke furniture solutions.",
      },
      {
        title: "spatial concepts and built-in solutions",
        text: "Every concept is tailored to how the client actually lives, combining practicality with timeless design.",
      },
      {
        title: "better use, better feel",
        text: "The result: homes that feel larger, work better and genuinely reflect the people living in them.",
      },
    ],
  },
};
