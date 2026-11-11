import type { BeforeAfterLabels } from "@/components/beforeAfter/BeforeAfter";
import { imageLabels } from "@/content/imageLabels";
import type { Comparison, Locale } from "@/content/types";

export const comparisonLabels = (locale: Locale, comparison: Comparison): BeforeAfterLabels => {
  const c = imageLabels[locale];
  const before = c.kinds[comparison.before.kind ?? "before"];
  const after = c.kinds[comparison.after.kind ?? "photo"];
  return { before, after, control: `${c.compare}: ${before} / ${after}`, handle: c.handle };
};
