import type { CampaignLinesContent, Locale } from "./types";

export const campaignLines: Record<Locale, CampaignLinesContent> = {
  de: {
    lines: ["mehr raum ohne umzug.", "umbauen statt ausziehen.", "wohnung zu klein?", "zuhause bleiben. neu gestalten."],
    pause: "Laufband anhalten",
    play: "Laufband weiterlaufen lassen",
  },
  en: {
    lines: ["more room, no move.", "rebuild, don't move out.", "flat too small?", "stay home. start fresh."],
    pause: "Pause the moving text",
    play: "Play the moving text",
  },
};
