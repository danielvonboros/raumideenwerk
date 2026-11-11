import type { ImageLabelsContent, Locale } from "./types";

export const imageLabels: Record<Locale, ImageLabelsContent> = {
  de: {
    kinds: {
      before: "vorher",
      photo: "foto",
      drawing: "entwurf",
      render: "visualisierung",
    },
    compare: "Bildvergleich",
    handle: "raum",
  },
  en: {
    kinds: {
      before: "before",
      photo: "photo",
      drawing: "sketch",
      render: "visualisation",
    },
    compare: "Image comparison",
    handle: "raum",
  },
};
