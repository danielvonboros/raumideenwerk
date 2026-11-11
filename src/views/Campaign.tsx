import Chrome from "@/components/chrome/Chrome";
import { campaigns } from "@/content/campaigns";
import type { CampaignKey, Locale } from "@/content/types";
import type { PageRef } from "@/lib/routes";
import CampaignLines from "@/sections/campaignLines/CampaignLines";
import Contact from "@/sections/contact/Contact";
import Hero from "@/sections/hero/Hero";
import Packages from "@/sections/packages/Packages";
import ProblemChooser from "@/sections/problemChooser/ProblemChooser";
import Projects from "@/sections/projects/Projects";
import Testimonials from "@/sections/testimonials/Testimonials";

interface CampaignProps {
  locale: Locale;
  campaign: CampaignKey;
}

const Campaign = ({ locale, campaign }: CampaignProps) => {
  const c = campaigns[locale][campaign];
  const page: PageRef = { kind: "campaign", key: campaign };

  return (
    <Chrome locale={locale} page={page}>
      <Hero locale={locale} claim={c.claim} keywords={c.keywords} page={page} />
      <CampaignLines locale={locale} />
      <ProblemChooser locale={locale} />
      <Projects locale={locale} page={page} />
      <Packages locale={locale} page={page} />
      <Testimonials locale={locale} />
      <Contact locale={locale} />
    </Chrome>
  );
};

export default Campaign;
