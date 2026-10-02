import type { Metadata } from "next";
import { legal } from "@/content/legal";
import { metadataAlternates } from "@/content/site";
import { Chrome } from "@/components/Chrome";
import { LegalPage } from "@/components/LegalPage";

const content = legal.de;

export const metadata: Metadata = {
  title: content.meta.imprint.title,
  description: content.meta.imprint.description,
  alternates: metadataAlternates("de", { kind: "imprint" }),
};

export default function Page() {
  return (
    <Chrome locale="de" page={{ kind: "imprint" }}>
      <LegalPage doc={content.imprint} />
    </Chrome>
  );
}
