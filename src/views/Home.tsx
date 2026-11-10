import Chrome from "@/components/chrome/Chrome";
import { faq } from "@/content/faq";
import type { Locale } from "@/content/types";
import About from "@/sections/about/About";
import CampaignLines from "@/sections/campaignLines/CampaignLines";
import Contact from "@/sections/contact/Contact";
import Faq from "@/sections/faq/Faq";
import Hero from "@/sections/hero/Hero";
import Packages from "@/sections/packages/Packages";
import PainPoints from "@/sections/painPoints/PainPoints";
import Process from "@/sections/process/Process";
import Projects from "@/sections/projects/Projects";
import Services from "@/sections/services/Services";
import Testimonials from "@/sections/testimonials/Testimonials";

interface HomeProps {
  locale: Locale;
}

const Home = ({ locale }: HomeProps) => {
  return (
    <Chrome locale={locale} page={{ kind: "home" }}>
      <Hero locale={locale} />
      <CampaignLines locale={locale} />
      <PainPoints locale={locale} />
      <Projects locale={locale} />
      <Services locale={locale} />
      <Process locale={locale} />
      <Packages locale={locale} />
      <Testimonials locale={locale} />
      <About locale={locale} />
      <Faq {...faq[locale]} />
      <Contact locale={locale} />
    </Chrome>
  );
};

export default Home;
