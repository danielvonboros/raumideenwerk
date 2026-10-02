import type { FrameColor } from "@/content/types";

export const frameClasses: Record<FrameColor, string> = {
  yellow: "bg-yellow text-ink",
  ink: "bg-ink text-linen",
  petrol: "bg-petrol text-linen",
};

export const frameButtonClasses: Record<FrameColor, string> = {
  yellow: "bg-ink text-linen hover:bg-petrol",
  ink: "bg-yellow text-ink hover:bg-linen",
  petrol: "bg-linen text-ink hover:bg-sand",
};
