import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/hero";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import { sectionHref } from "@/lib/routes";
import { link } from "@/theme/typography";

interface HeroProps {
  locale: Locale;
}

const imageSizes = "(min-width: 768px) calc(100vw - 200px), calc(100vw - 64px)";

const Hero = ({ locale }: HeroProps) => {
  const c = hero[locale];

  return (
    <section
      id={SECTION_IDS.start}
      className="grid grid-cols-[64px_minmax(0,1fr)] grid-rows-[minmax(220px,34svh)_auto_minmax(150px,22svh)] bg-yellow text-ink md:grid-cols-[200px_minmax(0,1fr)] md:grid-rows-[320px_auto_200px]"
    >
      <div className="row-span-3 flex items-end gap-1 pb-6 pl-3 md:pb-10 md:pl-10">
        <span className="spine text-[34px] leading-none font-bold tracking-[-0.035em] md:text-[56px]">
          {c.spine[0]}
        </span>
        <span className="spine text-[34px] leading-none tracking-[-0.02em] italic md:text-[56px]">
          {c.spine[1]}
        </span>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={c.imageTop.src}
          alt={c.imageTop.alt}
          fill
          priority
          sizes={imageSizes}
          className="object-cover"
          style={{ objectPosition: c.imageTop.position }}
        />
      </div>

      <div className="flex flex-col justify-center gap-6 px-5 py-10 md:gap-7 md:py-14 md:pr-14 md:pl-11">
        <h1 className="flex flex-col gap-3 font-normal">
          <span className="text-[44px] leading-[0.92] font-bold tracking-[-0.045em] sm:text-[64px] lg:text-[96px]">
            {c.claim}
          </span>
          <span className="text-xl leading-tight tracking-[-0.015em] italic md:text-[30px]">{c.keywords}</span>
        </h1>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link href={sectionHref(locale, c.primaryCta.section)} className={link.primary}>
            {c.primaryCta.label}
          </Link>
          <Link href={sectionHref(locale, c.secondaryCta.section)} className={link.text}>
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
