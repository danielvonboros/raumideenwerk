import type { SECTION_IDS } from "./site";

export type Locale = "de" | "en";

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export type FrameColor = "yellow" | "ink" | "petrol";

export interface ImageRef {
  src: string;
  alt: string;
  position?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SectionLink {
  section: SectionId;
  label: string;
}

export interface TextItem {
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ShellContent {
  skipLink: string;
  navigationLabel: string;
  nav: SectionLink[];
  cta: SectionLink;
  menu: { open: string; close: string };
  themeToggle: { label: string; toDark: string; toLight: string };
  languageSwitchTitle: string;
}

export interface MetaContent {
  title: string;
  description: string;
  ogTitle: string;
}

export interface HeroContent {
  spine: [string, string];
  claim: string;
  keywords: string;
  primaryCta: SectionLink;
  secondaryCta: SectionLink;
  imageTop: ImageRef;
  imageBottom: ImageRef;
}

export interface Project {
  slug: string;
  number: string;
  year: string;
  color: FrameColor;
  title: string;
  subtitle: string;
  metaTitle: string;
  description: string;
  story: string;
  goal?: string;
  materials: string;
  dimensions: string;
  cover: ImageRef;
  detail: ImageRef;
  gallery: ImageRef[];
}

export interface ProjectsContent {
  title: string;
  subtitle: string;
  prevLabel: string;
  nextLabel: string;
  ctaCard: { number: string; title: string; subtitle: string; section: SectionId };
  items: Project[];
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  items: TextItem[];
}

export interface ServicePage {
  slug: string;
  color: FrameColor;
  label: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  description: string;
  image: ImageRef;
  intro: string;
  fit: { title: string; items: string[] };
  planning: TextItem[];
  costs: string;
  projects: number[];
  faq: FaqItem[];
}

export interface ServicePagesContent {
  title: string;
  items: ServicePage[];
}

export interface PainPointsContent {
  title: string;
  items: TextItem[];
}

export interface ProcessContent {
  title: string;
  subtitle: string;
  steps: TextItem[];
}

export interface Package {
  name: string;
  kind: string;
  price: string;
  surcharge: string;
  description: string;
  features: string[];
  addOns?: { name: string; price: string }[];
  cta: string;
  color: FrameColor;
  popular?: boolean;
}

export interface PackagesContent {
  title: string;
  subtitle: string;
  popularLabel: string;
  addOnsLabel: string;
  items: Package[];
  notes: string[];
}

export interface AboutContent {
  title: string;
  subtitle: string;
  spine: string;
  text: string;
  portrait: ImageRef;
}

export interface TestimonialsContent {
  title: string;
  items: { text: string; author: string }[];
}

export interface SeoServicesContent {
  title: string;
  items: TextItem[];
}

export interface FaqContent {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface ContactFormContent {
  label: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  captchaRequired: string;
  captchaLabel: string;
  captchaNew: string;
  captchaLoading: string;
  rateLimited: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  details: ContactDetail[];
  form: ContactFormContent;
}

export interface FooterContent {
  contact: NavLink[];
  social: NavLink[];
  address: string;
  legal: { page: "imprint" | "privacy"; label: string }[];
  homeLabel: string;
}

export interface ProjectPageContent {
  back: string;
  goal: string;
  story: string;
  materials: string;
  dimensions: string;
  year: string;
  services: string;
  gallery: string;
  navigation: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: SectionLink;
  prev: string;
  next: string;
}

export interface ServicePageContent {
  back: string;
  spine: string;
  planning: string;
  costs: string;
  planningCosts: string;
  packagesLink: SectionLink;
  projects: string;
  faq: string;
  more: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: SectionLink;
}

export interface LegalSection {
  heading: string;
  lines: string[];
}

export interface LegalDocument {
  title: string;
  sections: LegalSection[];
  lastUpdated?: string;
}

export interface LegalContent {
  imprint: LegalDocument;
  privacy: LegalDocument;
  meta: {
    imprint: { title: string; description: string };
    privacy: { title: string; description: string };
  };
}
