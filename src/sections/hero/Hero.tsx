import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "@/components/beforeAfter/BeforeAfter";
import { hero } from "@/content/hero";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import { comparisonLabels } from "@/lib/comparisonLabels";
import { sectionHref, type PageRef } from "@/lib/routes";
import { link } from "@/theme/typography";

interface HeroProps {
  locale: Locale;
  claim?: string;
  keywords?: string;
  page?: PageRef;
}

const imageSizes = "(min-width: 768px) calc(100vw - 200px), calc(100vw - 64px)";

const Hero = ({ locale, claim, keywords, page }: HeroProps) => {
  const c = hero[locale];

  return (
    <section
      id={SECTION_IDS.start}
      className="grid grid-cols-[64px_minmax(0,1fr)] grid-rows-[minmax(220px,34svh)_auto_minmax(150px,22svh)] bg-yellow text-ink md:grid-cols-[200px_minmax(0,1fr)] md:grid-rows-[400px_auto_200px]"
    >
      <div className="row-span-3 flex flex-col-reverse items-start gap-2.5 pb-6 pl-3 md:flex-row md:items-end md:gap-1 md:pb-10 md:pl-10">
        <span className="spine text-[34px] leading-none font-bold tracking-[-0.035em] whitespace-nowrap md:text-[56px]">
          {c.spine[0]}
        </span>
        <span className="spine text-[34px] leading-none tracking-[-0.02em] whitespace-nowrap md:text-[56px]">
          {c.spine[1]}
        </span>
      </div>

      <BeforeAfter
        before={c.comparison.before}
        after={c.comparison.after}
        labels={comparisonLabels(locale, c.comparison)}
        sizes={imageSizes}
        priority
        swing
      />

      <div className="flex flex-col justify-center gap-6 px-5 py-10 md:gap-7 md:py-14 md:pr-14 md:pl-11">
        <h1 className="flex flex-col gap-4 font-normal">
          <span className="text-[46px] leading-[0.88] font-black tracking-[-0.06em] sm:text-[68px] lg:text-[112px]">
            {claim ?? c.claim}
          </span>
          <span className="text-xl leading-tight tracking-[-0.015em] md:text-[30px]">{keywords ?? c.keywords}</span>
        </h1>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link href={sectionHref(locale, c.primaryCta.section, page)} className={link.primary}>
            {c.primaryCta.label}
          </Link>
          <Link href={sectionHref(locale, c.secondaryCta.section, page)} className={link.text}>
            {c.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={c.imageBottom.src}
          alt={c.imageBottom.alt}
          fill
          sizes={imageSizes}
          className="object-cover"
          style={{ objectPosition: c.imageBottom.position }}
        />
      </div>
    </section>
  );
};

export default Hero;
