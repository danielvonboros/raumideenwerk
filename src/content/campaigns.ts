import type { CampaignContent, CampaignKey, Locale } from "./types";

export const campaigns: Record<Locale, Record<CampaignKey, CampaignContent>> = {
  de: {
    poster: {
      slug: "plakat",
      metaTitle: "Umbauen statt ausziehen",
      description: "Vom Plakat hierher? Raumplanung und Einbaumöbel für kleine Wohnungen in Berlin: zuhause bleiben, neu gestalten.",
      claim: "umbauen statt ausziehen.",
      keywords: "zuhause bleiben. neu gestalten.",
    },
    flyer: {
      slug: "flyer",
      metaTitle: "Mehr Raum ohne Umzug",
      description: "Vom Flyer hierher? Raumplanung und Einbaumöbel für kleine Wohnungen in Berlin: mehr Platz, ohne umzuziehen.",
      claim: "mehr raum ohne umzug.",
      keywords: "innenarchitektur und raumplanung für kleine wohnungen in berlin",
    },
    sticker: {
      slug: "sticker",
      metaTitle: "Wohnung zu klein?",
      description: "Vom Sticker hierher? Raumplanung und Einbaumöbel für kleine Wohnungen in Berlin: mehr Platz ohne Umzug.",
      claim: "wohnung zu klein?",
      keywords: "mehr platz ohne umzug.",
    },
  },
  en: {
    poster: {
      slug: "poster",
      metaTitle: "Rebuild, don't move out",
      description: "Here from a poster? Space planning and built-in furniture for small flats in Berlin: stay home, start fresh.",
      claim: "rebuild, don't move out.",
      keywords: "stay home. start fresh.",
    },
    flyer: {
      slug: "flyer",
      metaTitle: "More room, no move",
      description: "Here from a flyer? Space planning and built-in furniture for small flats in Berlin: more room without moving.",
      claim: "more room, no move.",
      keywords: "interior architecture and space planning for small flats in berlin",
    },
    sticker: {
      slug: "sticker",
      metaTitle: "Flat too small?",
      description: "Here from a sticker? Space planning and built-in furniture for small flats in Berlin: more room without moving.",
      claim: "flat too small?",
      keywords: "more room, no move.",
    },
  },
};
