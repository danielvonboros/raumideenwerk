import Section from "@/components/section/Section";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import StepCard from "@/components/stepCard/StepCard";
import { process } from "@/content/process";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";

interface ProcessProps {
  locale: Locale;
}

const Process = ({ locale }: ProcessProps) => {
  const c = process[locale];

  return (
    <Section id={SECTION_IDS.process} labelledBy="ablauf-titel">
      <SectionHeader id="ablauf-titel" title={c.title} subtitle={c.subtitle} />
      <ol className="mt-10 grid gap-12 px-2 md:mt-11 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {c.steps.map((step, index) => (
          <StepCard
            key={step.title}
            number={String(index + 1).padStart(2, "0")}
            title={step.title}
            text={step.text}
          />
        ))}
      </ol>
    </Section>
  );
};

export default Process;
