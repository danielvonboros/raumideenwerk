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

export interface TextItem {
  title: string;
  text: string;
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
  faq: { question: string; answer: string }[];
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

export interface ContactFormContent {
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

export interface SiteContent {
  skipLink: string;
  nav: NavLink[];
  headerCta: NavLink;
  menu: { open: string; close: string };
  hero: {
    spine: [string, string];
    claim: string;
    keywords: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    imageTop: ImageRef;
    imageBottom: ImageRef;
  };
  projects: {
    title: string;
    subtitle: string;
    prevLabel: string;
    nextLabel: string;
    ctaCard: { number: string; title: string; subtitle: string; href: string };
    items: Project[];
  };
  services: { title: string; subtitle: string; items: TextItem[] };
  servicePages: { title: string; items: ServicePage[] };
  painPoints: { title: string; items: TextItem[] };
  process: { title: string; subtitle: string; steps: TextItem[] };
  packages: {
    title: string;
    subtitle: string;
    popularLabel: string;
    addOnsLabel: string;
    items: Package[];
    notes: string[];
  };
  about: {
    title: string;
    subtitle: string;
    spine: string;
    text: string;
    portrait: ImageRef;
  };
  testimonials: { title: string; items: { text: string; author: string }[] };
  seoServices: { title: string; items: TextItem[] };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    details: { label: string; value: string; href?: string }[];
    form: ContactFormContent;
  };
  footer: {
    contact: NavLink[];
    social: NavLink[];
    address: string;
    legal: NavLink[];
    homeLabel: string;
  };
  projectPage: {
    back: string;
    goal: string;
    story: string;
    materials: string;
    dimensions: string;
    year: string;
    services: string;
    gallery: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: NavLink;
    prev: string;
    next: string;
  };
  servicePage: {
    back: string;
    planning: string;
    costs: string;
    planningCosts: string;
    packagesLink: NavLink;
    projects: string;
    faq: string;
    more: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: NavLink;
  };
}

export type Locale = "de" | "en";

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