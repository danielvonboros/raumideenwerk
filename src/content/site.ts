import type { Locale, ShellContent } from "./types";

export const locales: Locale[] = ["de", "en"];

export const SECTION_IDS = {
  start: "start",
  projects: "projekte",
  services: "leistungen",
  process: "ablauf",
  packages: "pakete",
  about: "ueber-mich",
  faq: "fragen",
  contact: "kontakt",
} as const;

export const site = {
  name: "raumideenwerk",
  legalName: "raumideenwerk - Daniel von Boros",
  owner: "Daniel von Boros",
  url: "https://www.raumideenwerk.com",
  email: "mail@raumideenwerk.com",
  phone: "+49 160 495 81 48",
  phoneE164: "+491604958148",
  instagram: {
    handle: "@raum.ideen.werk.berlin",
    url: "https://www.instagram.com/raum.ideen.werk.berlin",
  },
  linkedin: "https://www.linkedin.com/in/danielvonboros",
  address: {
    street: "Kolonnenstraße 8",
    postalCode: "10827",
    city: "Berlin",
    country: "DE",
  },
  geo: { latitude: 52.48627243666373, longitude: 13.35993720266727 },
};

export const address = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

export const shell: Record<Locale, ShellContent> = {
  de: {
    skipLink: "zum inhalt springen",
    navigationLabel: "Hauptnavigation",
    nav: [
      { section: SECTION_IDS.projects, label: "projekte" },
      { section: SECTION_IDS.services, label: "leistungen" },
      { section: SECTION_IDS.process, label: "ablauf" },
      { section: SECTION_IDS.packages, label: "pakete" },
      { section: SECTION_IDS.about, label: "über mich" },
      { section: SECTION_IDS.contact, label: "kontakt" },
    ],
    cta: { section: SECTION_IDS.contact, label: "erstgespräch buchen" },
    menu: { open: "Menü öffnen", close: "Menü schließen" },
    themeToggle: {
      label: "Dunkelmodus",
      toDark: "Zum dunklen Modus wechseln",
      toLight: "Zum hellen Modus wechseln",
    },
    languageSwitchTitle: "Diese Seite auf Deutsch",
  },
  en: {
    skipLink: "skip to content",
    navigationLabel: "Main navigation",
    nav: [
      { section: SECTION_IDS.projects, label: "projects" },
      { section: SECTION_IDS.services, label: "services" },
      { section: SECTION_IDS.process, label: "process" },
      { section: SECTION_IDS.packages, label: "packages" },
      { section: SECTION_IDS.about, label: "about" },
      { section: SECTION_IDS.contact, label: "contact" },
    ],
    cta: { section: SECTION_IDS.contact, label: "book a first call" },
    menu: { open: "Open menu", close: "Close menu" },
    themeToggle: {
      label: "Dark mode",
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
    },
    languageSwitchTitle: "This page in English",
  },
};
