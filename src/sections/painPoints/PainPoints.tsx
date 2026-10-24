import InfoCard from "@/components/infoCard/InfoCard";
import Section from "@/components/section/Section";
import { painPoints } from "@/content/painPoints";
import type { Locale } from "@/content/types";
import { text } from "@/theme/typography";

interface PainPointsProps {
  locale: Locale;
}

const PainPoints = ({ locale }: PainPointsProps) => {
  const c = painPoints[locale];

  return (
    <Section labelledBy="bekannt-titel" tone="ink">
      <h2 id="bekannt-titel" className={text.sectionTitle}>
        {c.title}
      </h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        {c.items.map((item) => (
          <InfoCard key={item.title} title={item.title} text={item.text} variant="highlight" />
        ))}
      </div>
    </Section>
  );
};

export default PainPoints;
