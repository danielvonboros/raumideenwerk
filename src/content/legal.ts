import type { LegalContent, Locale } from "./types";
import { legalDe } from "./legal.de";
import { legalEn } from "./legal.en";

export const legal: Record<Locale, LegalContent> = {
  de: legalDe,
  en: legalEn,
};