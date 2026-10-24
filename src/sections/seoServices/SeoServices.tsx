import InfoCard from "@/components/infoCard/InfoCard";
import Section from "@/components/section/Section";
import { seoServices } from "@/content/seoServices";
import type { Locale } from "@/content/types";

interface SeoServicesProps {
  locale: Locale;
}

const SeoServices = ({ locale }: SeoServicesProps) => {
  const c = seoServices[locale];

  return (
    <Section labelledBy="leistungsuebersicht-titel">
      <div className="flex flex-col gap-7 border-2 border-dashed rule p-6 md:p-10">
        <h2
          id="leistungsuebersicht-titel"
          className="text-3xl leading-none font-bold tracking-[-0.035em] md:text-[44px]"
        >
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
