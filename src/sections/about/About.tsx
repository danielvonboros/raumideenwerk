import Image from "next/image";
import Section from "@/components/section/Section";
import { about } from "@/content/about";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import { text } from "@/theme/typography";

interface AboutProps {
  locale: Locale;
}

const About = ({ locale }: AboutProps) => {
  const c = about[locale];

  return (
    <Section
      id={SECTION_IDS.about}
      labelledBy="ueber-mich-titel"
      className="grid items-start gap-10 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-20"
    >
      <div className="grid h-[440px] max-w-[440px] grid-cols-[56px_minmax(0,1fr)] bg-ink text-linen md:h-[500px] md:grid-cols-[64px_minmax(0,1fr)]">
        <div className="flex items-end pb-5 pl-4 md:pl-[18px]">
          <span className="spine text-[20px] leading-none font-bold tracking-[-0.02em] md:text-[22px]">
            {c.spine}
          </span>
        </div>
        <div className="relative my-4 mr-4 overflow-hidden md:my-5 md:mr-5">
          <Image
            src={c.portrait.src}
            alt={c.portrait.alt}
            fill
            sizes="(min-width: 768px) 356px, 80vw"
            className="object-cover"
            style={{ objectPosition: c.portrait.position }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 id="ueber-mich-titel" className={text.sectionTitle}>
            {c.title}
          </h2>
          <p className={text.lead}>{c.subtitle}</p>
        </div>
        <p className={`max-w-[62ch] ${text.body} md:text-xl`}>{c.text}</p>
      </div>
    </Section>
  );
};

export default About;
