import InfoCard from "@/components/infoCard/InfoCard";
import Section from "@/components/section/Section";
import { seoServices } from "@/content/seoServices";
import type { Locale } from "@/content/types";
import { text } from "@/theme/typography";

interface SeoServicesProps {
  locale: Locale;
}

const SeoServices = ({ locale }: SeoServicesProps) => {
  const c = seoServices[locale];

  return (
    <Section labelledBy="leistungsuebersicht-titel">
      <div className="flex flex-col gap-7 border-t-2 rule pt-8 md:pt-10">
        <h2 id="leistungsuebersicht-titel" className={`max-w-[32ch] ${text.groupTitle}`}>
          {c.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {c.items.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} variant="muted" />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SeoServices;
