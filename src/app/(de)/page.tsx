import type { Metadata } from "next";
import { metadataAlternates } from "@/content/site";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: metadataAlternates("de", { kind: "home" }),
};

export default function Page() {
  return <HomePage locale="de" />;
}
