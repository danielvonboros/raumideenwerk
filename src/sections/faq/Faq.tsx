import FaqList from "@/components/faqList/FaqList";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import StructuredData from "@/components/structuredData/StructuredData";
import { SECTION_IDS } from "@/content/site";
import type { FaqItem } from "@/content/types";
import { faqSchema } from "@/lib/schema";

interface FaqProps {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

const Faq = ({ title, subtitle, items }: FaqProps) => {
  return (
    <Section id={SECTION_IDS.faq} labelledBy="fragen-titel">
      <StructuredData data={faqSchema(items)} />
      <SectionHeader id="fragen-titel" title={title} subtitle={subtitle} />
      <FaqList items={items} />
    </Section>
  );
};

export default Faq;
