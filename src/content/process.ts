import type { Locale, ProcessContent } from "./types";

export const process: Record<Locale, ProcessContent> = {
  de: {
    title: "ablauf",
    subtitle: "so arbeiten wir zusammen",
    steps: [
      {
        title: "erstgespräch",
        text: "Wir sprechen über deinen Alltag und darüber, was in der Wohnung gerade nicht funktioniert.",
      },
      {
        title: "aufmaß",
        text: "Du misst selbst nach meiner Anleitung, oder ich komme vorbei und nehme den Bestand auf.",
      },
      {
        title: "konzept",
        text: "Zonen, Stauraum und Einbauten, als Grundriss, Skizze oder Visualisierung.",
      },
      {
        title: "umsetzung",
        text: "Du baust selbst um, oder ich vermittle dich an meine Partnertischlerei.",
      },
    ],
  },
  en: {
    title: "how it works",
    subtitle: "the way we work together",
    steps: [
      {
        title: "first call",
        text: "We talk about your daily life and about what isn't working in your flat right now.",
      },
      {
        title: "measuring up",
        text: "You measure up following my instructions, or I come by and survey the space myself.",
      },
      {
        title: "concept",
        text: "Zones, storage and built-in elements, as a floor plan, a sketch or a visualisation.",
      },
      {
        title: "building it",
        text: "You carry out the work yourself, or I put you in touch with my partner joinery.",
      },
    ],
  },
};
