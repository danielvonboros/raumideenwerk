import Link from "next/link";
import InfoCard from "@/components/infoCard/InfoCard";
import Section from "@/components/section/Section";
import { servicePage } from "@/content/servicePage";
import { SECTION_IDS } from "@/content/site";
import type { Locale, ServicePage } from "@/content/types";
import { sectionHref, sectionLink } from "@/lib/routes";
import { link, text } from "@/theme/typography";

interface ServiceDetailsProps {
  locale: Locale;
  service: ServicePage;
}

const ServiceDetails = ({ locale, service }: ServiceDetailsProps) => {
  const t = servicePage[locale];
  const packagesLink = sectionLink(locale, t.packagesLink);

  return (
    <Section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
      <div className="flex max-w-[68ch] flex-col gap-10">
        <Link href={sectionHref(locale, SECTION_IDS.services)} className={link.back}>
          {t.back}
        </Link>

        <p className="text-xl leading-[1.5] md:text-2xl">{service.intro}</p>

        <div>
          <h2 className={text.blockTitle}>{service.fit.title}</h2>
          <ul className="mt-5 flex flex-col gap-3 text-lg leading-[1.5] md:text-xl">
            {service.fit.items.map((item) => (
              <li key={item} className="border-l-4 rule-accent pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={text.blockTitle}>{t.planning}</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {service.planning.map((step) => (
              <InfoCard key={step.title} title={step.title} text={step.text} />
            ))}
          </div>
        </div>
      </div>

      <aside className="flex h-fit flex-col gap-4 border-t-2 rule pt-5">
        <h2 className={text.blockTitle}>{t.costs}</h2>
        <p className={text.body}>{t.planningCosts}</p>
        <p className={text.body}>{service.costs}</p>
        <Link href={packagesLink.href} className={`w-fit ${link.text}`}>
          {packagesLink.label}
        </Link>
      </aside>
    </Section>
  );
};

export default ServiceDetails;
