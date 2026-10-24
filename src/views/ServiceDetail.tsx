import { notFound } from "next/navigation";
import Chrome from "@/components/chrome/Chrome";
import StructuredData from "@/components/structuredData/StructuredData";
import { servicePage } from "@/content/servicePage";
import type { Locale } from "@/content/types";
import { findService, sectionLink } from "@/lib/routes";
import { serviceSchema } from "@/lib/schema";
import Cta from "@/sections/cta/Cta";
import Faq from "@/sections/faq/Faq";
import ServiceDetails from "@/sections/serviceDetails/ServiceDetails";
import ServiceHero from "@/sections/serviceHero/ServiceHero";
import ServiceNavigation from "@/sections/serviceNavigation/ServiceNavigation";
import ServiceProjects from "@/sections/serviceProjects/ServiceProjects";

interface ServiceDetailProps {
  locale: Locale;
  slug: string;
}

const ServiceDetail = ({ locale, slug }: ServiceDetailProps) => {
  const found = findService(locale, slug);
  if (!found) notFound();

  const { index, service } = found;
  const t = servicePage[locale];

  return (
    <Chrome locale={locale} page={{ kind: "service", index }}>
      <StructuredData data={serviceSchema(locale, index)} />
      <ServiceHero service={service} number={String(index + 1).padStart(2, "0")} spine={t.spine} />
      <ServiceDetails locale={locale} service={service} />
      <ServiceProjects locale={locale} title={t.projects} projectIndexes={service.projects} />
      <Faq title={t.faq} subtitle={service.label} items={service.faq} />
      <Cta title={t.ctaTitle} text={t.ctaText} button={sectionLink(locale, t.ctaButton)} />
      <ServiceNavigation locale={locale} index={index} />
    </Chrome>
  );
};

export default ServiceDetail;
