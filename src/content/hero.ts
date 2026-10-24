import { SECTION_IDS } from "./site";
import type { HeroContent, Locale } from "./types";

export const hero: Record<Locale, HeroContent> = {
  de: {
    spine: ["raumideenwerk", "berlin"],
    claim: "mehr raum ohne umzug.",
    keywords: "innenarchitektur und raumplanung für kleine wohnungen in berlin",
    primaryCta: { section: SECTION_IDS.contact, label: "erstgespräch buchen" },
    secondaryCta: { section: SECTION_IDS.projects, label: "projekte ansehen" },
    imageTop: {
      src: "/room/room11/podestbett_stauraum_homeoffice_raumkonzept_farbkonzept.webp",
      alt: "Zimmer mit Podestbett, Stauraum und Arbeitsplatz",
      position: "50% 55%",
    },
    imageBottom: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Kleines Arbeitszimmer mit Regal und Schreibtisch",
      position: "50% 60%",
    },
  },
  en: {
    spine: ["raumideenwerk", "berlin"],
    claim: "more room, no move.",
    keywords: "interior architecture and space planning for small flats in berlin",
    primaryCta: { section: SECTION_IDS.contact, label: "book a first call" },
    secondaryCta: { section: SECTION_IDS.projects, label: "see the projects" },
    imageTop: {
      src: "/room/room11/podestbett_stauraum_homeoffice_raumkonzept_farbkonzept.webp",
      alt: "Room with a platform bed, storage and a workspace",
      position: "50% 55%",
    },
    imageBottom: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Small study with shelving and a desk",
      position: "50% 60%",
    },
  },
};
