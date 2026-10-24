import LinkTile from "@/components/linkTile/LinkTile";
import Section from "@/components/section/Section";
import { servicePage } from "@/content/servicePage";
import { servicePages } from "@/content/servicePages";
import type { Locale } from "@/content/types";
import { pathFor } from "@/lib/routes";
import { text } from "@/theme/typography";

interface ServiceNavigationProps {
  locale: Locale;
  index: number;
}

const ServiceNavigation = ({ locale, index }: ServiceNavigationProps) => {
  const t = servicePage[locale];
  const others = servicePages[locale].items
    .map((item, itemIndex) => ({ item, itemIndex }))
    .filter(({ itemIndex }) => itemIndex !== index);

  return (
    <Section as="nav" labelledBy="weitere-titel" spacing="bottom">
      <h2 id="weitere-titel" className={text.groupTitle}>
        {t.more}
      </h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-3">
        {others.map(({ item, itemIndex }) => (
          <li key={item.slug}>
            <LinkTile href={pathFor(locale, { kind: "service", index: itemIndex })} title={item.label} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ServiceNavigation;
