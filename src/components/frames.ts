import type { FrameColor } from "@/content/types";

export const frameClasses: Record<FrameColor, string> = {
yellow: "border-2 border-linen bg-yellow text-ink dark:border-linen",
  ink: "border-2 border-linen bg-ink text-linen",
  petrol: "border-2 border-linen bg-petrol text-linen dark:border-linen",
};

export const frameButtonClasses: Record<FrameColor, string> = {
  yellow: "bg-ink text-linen hover:bg-petrol",
  ink: "bg-yellow text-ink hover:bg-linen",
  petrol: "bg-linen text-ink hover:bg-sand",
};
