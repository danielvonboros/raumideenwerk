import type { Metadata } from "next";
import { metadataAlternates } from "@/content/site";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: metadataAlternates("en", { kind: "home" }),
};

export default function Page() {
  return <HomePage locale="en" />;
}
