import type { Metadata } from "next";
import { de } from "@/content/de";
import { legal } from "@/content/legal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalPage } from "@/components/LegalPage";

const content = legal.de;

export const metadata: Metadata = {
  title: content.meta.privacy.title,
  description: content.meta.privacy.description,
  alternates: { canonical: "/datenschutz/" },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header nav={de.nav} cta={de.headerCta} menu={de.menu} />
      <LegalPage doc={content.privacy} />
      <Footer c={de.footer} />
    </>
  );
}
