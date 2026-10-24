import PricingCard from "@/components/pricingCard/PricingCard";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { packages } from "@/content/packages";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import { sectionHref } from "@/lib/routes";

interface PackagesProps {
  locale: Locale;
}

const Packages = ({ locale }: PackagesProps) => {
  const c = packages[locale];

  return (
    <Section id={SECTION_IDS.packages} labelledBy="pakete-titel">
      <SectionHeader id="pakete-titel" title={c.title} subtitle={c.subtitle} />

      <div className="mt-10 grid gap-6 md:mt-11 lg:grid-cols-3">
        {c.items.map((item) => (
          <PricingCard
            key={item.name}
            item={item}
            popularLabel={c.popularLabel}
            addOnsLabel={c.addOnsLabel}
            href={sectionHref(locale, SECTION_IDS.contact)}
          />
        ))}
      </div>

      <div className="mt-11 flex max-w-[900px] flex-col gap-1.5">
        {c.notes.map((note) => (
          <p key={note} className="text-[17px] leading-[1.5] muted">
            {note}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default Packages;
