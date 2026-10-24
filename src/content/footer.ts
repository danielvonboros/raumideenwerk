import { address, site } from "./site";
import type { FooterContent, Locale, NavLink } from "./types";

const contactLinks: NavLink[] = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: `tel:${site.phoneE164}`, label: site.phone },
];

const socialLinks: NavLink[] = [{ href: site.instagram.url, label: site.instagram.handle }];

export const footer: Record<Locale, FooterContent> = {
  de: {
    contact: contactLinks,
    social: socialLinks,
    address,
    legal: [
      { page: "imprint", label: "impressum" },
      { page: "privacy", label: "datenschutz" },
    ],
    homeLabel: "raumideenwerk, zur Startseite",
  },
  en: {
    contact: contactLinks,
    social: socialLinks,
    address,
    legal: [
      { page: "imprint", label: "legal notice" },
      { page: "privacy", label: "privacy" },
    ],
    homeLabel: "raumideenwerk, back to the homepage",
  },
};
