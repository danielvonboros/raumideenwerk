import { address, site } from "./site";
import type { ContactContent, Locale } from "./types";

export const contact: Record<Locale, ContactContent> = {
  de: {
    title: "kontakt",
    subtitle: "bereit, deine wohnung zu verwandeln?",
    details: [
      { label: "e-mail", value: site.email, href: `mailto:${site.email}` },
      { label: "telefon", value: site.phone, href: `tel:${site.phoneE164}` },
      { label: "instagram", value: site.instagram.handle, href: site.instagram.url },
      { label: "adresse", value: address },
    ],
    form: {
      label: "Kontaktformular",
      name: "name",
      email: "e-mail",
      subject: "betreff",
      message: "nachricht",
      submit: "nachricht senden",
      sending: "wird gesendet …",
      success: "Danke, deine Nachricht ist angekommen. Ich melde mich in der Regel innerhalb von 24 bis 48 Stunden an Werktagen.",
      error: `Das hat nicht geklappt. Versuch es bitte später noch einmal oder schreib direkt an ${site.email}.`,
      captchaRequired: "Bitte löse zuerst die kleine Rechenaufgabe.",
      captchaLabel: "sicherheitsfrage",
      captchaNew: "neue aufgabe",
      captchaLoading: "wird geladen …",
      rateLimited: `Es sind gerade viele Nachrichten von deinem Anschluss gekommen. Bitte versuch es in einer Stunde noch einmal oder schreib direkt an ${site.email}.`,
    },
  },
  en: {
    title: "contact",
    subtitle: "ready to transform your home?",
    details: [
      { label: "email", value: site.email, href: `mailto:${site.email}` },
      { label: "phone", value: site.phone, href: `tel:${site.phoneE164}` },
      { label: "instagram", value: site.instagram.handle, href: site.instagram.url },
      { label: "address", value: address },
    ],
    form: {
      label: "Contact form",
      name: "name",
      email: "email",
      subject: "subject",
      message: "message",
      submit: "send message",
      sending: "sending …",
      success: "Thank you, your message has arrived. I usually reply within 24 to 48 hours on working days.",
      error: `That didn't work. Please try again later or write directly to ${site.email}.`,
      captchaRequired: "Please solve the small sum first.",
      captchaLabel: "security question",
      captchaNew: "new question",
      captchaLoading: "loading …",
      rateLimited: `A lot of messages have come from your connection just now. Please try again in an hour, or write directly to ${site.email}.`,
    },
  },
};
