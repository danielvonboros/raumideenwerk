import Section from "@/components/section/Section";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Tabs from "@/components/tabs/Tabs";
import { problemChooser } from "@/content/problemChooser";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import ProblemPanel from "./ProblemPanel";

interface ProblemChooserProps {
  locale: Locale;
}

const ProblemChooser = ({ locale }: ProblemChooserProps) => {
  const c = problemChooser[locale];
  const items = c.problems.map((problem) => ({
    id: problem.id,
    label: problem.label,
    content: (
      <ProblemPanel
        locale={locale}
        problem={problem}
        servicesLabel={c.servicesLabel}
        projectsLabel={c.projectsLabel}
      />
    ),
  }));

  return (
    <Section id={SECTION_IDS.services} labelledBy="probleme-titel">
      <SectionHeader id="probleme-titel" title={c.title} subtitle={c.subtitle} />
      <div className="mt-10 md:mt-11">
        <Tabs label={c.tabsLabel} items={items} />
      </div>
    </Section>
  );
};

export default ProblemChooser;
