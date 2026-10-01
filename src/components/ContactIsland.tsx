"use client";

import type { ContactFormContent } from "@/content/types";
import { ContactForm } from "./ContactForm";

export function ContactIsland({ c }: { c: ContactFormContent }) {
  return <ContactForm c={c} />;
}
