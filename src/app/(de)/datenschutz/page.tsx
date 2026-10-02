import type { Metadata } from "next";
import { legal } from "@/content/legal";
import { metadataAlternates } from "@/content/site";
import { Chrome } from "@/components/Chrome";
import { LegalPage } from "@/components/LegalPage";

const content = legal.de;

export const metadata: Metadata = {
  title: content.meta.privacy.title,
  description: content.meta.privacy.description,
  alternates: metadataAlternates("de", { kind: "privacy" }),
};

export default function Page() {
  return (
    <Chrome locale="de" page={{ kind: "privacy" }}>
      <LegalPage doc={content.privacy} />
    </Chrome>
  );
}
