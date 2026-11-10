import { SECTION_IDS } from "./site";
import type { HeroContent, Locale } from "./types";

export const hero: Record<Locale, HeroContent> = {
  de: {
    spine: ["raumideenwerk", "berlin"],
    claim: "mehr raum ohne umzug.",
    keywords: "innenarchitektur und raumplanung für kleine wohnungen in berlin",
    primaryCta: { section: SECTION_IDS.contact, label: "erstgespräch anfragen" },
    secondaryCta: { section: SECTION_IDS.projects, label: "projekte ansehen" },
    comparison: {
      before: {
        src: "/room/room11/studio_bett_stauraumproblem_kleine_wohnung.webp",
        alt: "Vorher: Zimmer mit einfachem Holzbett und zu wenig Stauraum",
        kind: "before",
        position: "55% 74%",
      },
      after: {
        src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
        alt: "Visualisierung: dasselbe Zimmer mit Podestbett, Schubladen und Arbeitsplatz",
        kind: "render",
        position: "55% 74%",
      },
    },
    imageBottom: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Visualisierung: Kleines Arbeitszimmer mit Regal und Schreibtisch",
      kind: "render",
      position: "50% 60%",
    },
  },
  en: {
    spine: ["raumideenwerk", "berlin"],
    claim: "more room, no move.",
    keywords: "interior architecture and space planning for small flats in berlin",
    primaryCta: { section: SECTION_IDS.contact, label: "request a first call" },
    secondaryCta: { section: SECTION_IDS.projects, label: "see the projects" },
    comparison: {
      before: {
        src: "/room/room11/studio_bett_stauraumproblem_kleine_wohnung.webp",
        alt: "Before: room with a simple wooden bed and too little storage",
        kind: "before",
        position: "55% 74%",
      },
      after: {
        src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
        alt: "Visualisation: the same room with a platform bed, drawers and a workspace",
        kind: "render",
        position: "55% 74%",
      },
    },
    imageBottom: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Visualisation: Small study with shelving and a desk",
      kind: "render",
      position: "50% 60%",
    },
  },
};
