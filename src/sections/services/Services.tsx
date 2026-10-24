import LinkTile from "@/components/linkTile/LinkTile";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import { servicePages } from "@/content/servicePages";
import { services } from "@/content/services";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import { pathFor } from "@/lib/routes";
import { text } from "@/theme/typography";

interface ServicesProps {
  locale: Locale;
}

const Services = ({ locale }: ServicesProps) => {
  const c = services[locale];
  const details = servicePages[locale];

  return (
    <Section id={SECTION_IDS.services} labelledBy="leistungen-titel">
      <SectionHeader id="leistungen-titel" title={c.title} subtitle={c.subtitle} />

      <div className="mt-10 grid gap-6 md:mt-11 lg:grid-cols-2">
        {c.items.map((item, index) => (
          <ServiceCard
            key={item.title}
            number={String(index + 1).padStart(2, "0")}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <nav aria-labelledby="leistungen-detail-titel" className="mt-12 md:mt-14">
        <h3 id="leistungen-detail-titel" className={text.blockTitle}>
          {details.title}
        </h3>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.items.map((service, index) => (
            <li key={service.slug}>
              <LinkTile href={pathFor(locale, { kind: "service", index })} title={service.label} />
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
};

export default Services;
