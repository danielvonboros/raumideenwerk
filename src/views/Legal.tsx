import Chrome from "@/components/chrome/Chrome";
import { legal } from "@/content/legal";
import type { Locale } from "@/content/types";
import LegalDocument from "@/sections/legalDocument/LegalDocument";

interface LegalProps {
  locale: Locale;
  kind: "imprint" | "privacy";
}

const Legal = ({ locale, kind }: LegalProps) => {
  return (
    <Chrome locale={locale} page={{ kind }}>
      <LegalDocument doc={legal[locale][kind]} />
    </Chrome>
  );
};

export default Legal;
