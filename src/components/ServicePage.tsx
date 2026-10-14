import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { findService, pathFor, site } from "@/content/site";
import { Chrome } from "./Chrome";
import { Faq } from "./Faq";
import { ProjectCover } from "./ProjectCover";
import { frameClasses } from "./frames";

const base = "https://www.raumideenwerk.com";

export function ServicePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const found = findService(locale, slug);
  if (!found) return null;

  const { index, service } = found;
  const c = site[locale];
  const t = c.servicePage;
  const others = c.servicePages.items
    .map((item, i) => ({ item, i }))
    .filter(({ i }) => i !== index);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle,
    description: service.description,
    url: base + pathFor(locale, { kind: "service", index }),
    image: base + service.image.src,
    provider: { "@id": `${base}/#business` },
    areaServed: { "@type": "City", name: "Berlin" },
  };

  return (
    <Chrome locale={locale} page={{ kind: "service", index }}>
      <main id="inhalt">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section
          className={`grid grid-cols-[64px_minmax(0,1fr)] md:grid-cols-[180px_minmax(0,1fr)] ${frameClasses[service.color]}`}
        >
          <div className="row-span-2 flex flex-col justify-between py-6 pl-4 md:py-10 md:pl-10">
            <span className="text-[56px] leading-[0.8] font-bold tracking-[-0.06em] md:text-[110px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="spine text-lg italic md:text-2xl">berlin</span>
          </div>

          <div className="relative aspect-[3/2] overflow-hidden md:aspect-[16/7]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              priority
              sizes="(min-width: 768px) calc(100vw - 180px), calc(100vw - 64px)"
              className="object-cover"
              style={{ objectPosition: service.image.position }}
            />
          </div>

          <div className="flex flex-col gap-3 px-5 py-8 md:px-10 md:py-12">
            <h1 className="text-[40px] leading-[0.95] font-bold tracking-[-0.045em] md:text-[72px]">
              {service.title}
            </h1>
            <p className="text-xl leading-tight tracking-[-0.015em] italic md:text-[32px]">
              {service.subtitle}
            </p>
          </div>
        </section>

        <section className="grid gap-12 px-5 py-16 md:px-14 md:py-[72px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
          <div className="flex max-w-[68ch] flex-col gap-10">
            <Link
              href={`${pathFor(locale, { kind: "home" })}#leistungen`}
              className="w-fit text-base font-semibold underline underline-offset-4 hover:text-petrol"
            >
              {t.back}
            </Link>

            <p className="text-xl leading-[1.5] md:text-2xl">{service.intro}</p>

            <div>
              <h2 className="text-[28px] leading-none font-bold tracking-[-0.035em] md:text-4xl">
                {service.fit.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3 text-lg leading-[1.5] md:text-xl">
                {service.fit.items.map((item) => (
                  <li key={item} className="border-l-4 rule-accent pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[28px] leading-none font-bold tracking-[-0.035em] md:text-4xl">
                {t.planning}
              </h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {service.planning.map((step) => (
                  <div key={step.title} className="flex flex-col gap-2">
                    <h3 className="text-2xl leading-tight font-bold tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="text-lg leading-[1.55]">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-4 border-t-2 rule pt-5">
            <h2 className="text-[28px] leading-none font-bold tracking-[-0.035em] md:text-4xl">
              {t.costs}
            </h2>
            <p className="text-lg leading-[1.55]">{t.planningCosts}</p>
            <p className="text-lg leading-[1.55]">{service.costs}</p>
            <Link
              href={t.packagesLink.href}
              className="w-fit text-lg font-semibold underline decoration-2 underline-offset-[5px] hover:text-petrol"
            >
              {t.packagesLink.label}
            </Link>
          </aside>
        </section>

        <section
          aria-labelledby="projekte-titel"
          className="pb-16 pl-5 md:pb-[72px] md:pl-14"
        >
          <h2
            id="projekte-titel"
            className="text-[32px] leading-none font-bold tracking-[-0.04em] md:text-[44px]"
          >
            {t.projects}
          </h2>
          <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pr-5 pb-5 [scrollbar-color:var(--color-ink)_var(--color-sand)] [scrollbar-width:thin] md:pr-14">
            {service.projects.map((projectIndex) => (
              <ProjectCover
                key={projectIndex}
                project={c.projects.items[projectIndex]}
                href={pathFor(locale, { kind: "project", index: projectIndex })}
              />
            ))}
          </div>
        </section>

        <Faq c={{ title: t.faq, subtitle: service.label, items: service.faq }} />

        <section className="px-5 pb-16 md:px-14 md:pb-[72px]">
          <div className="flex flex-col items-start gap-6 bg-yellow p-7 text-ink md:p-12">
            <h2 className="text-[32px] leading-[0.95] font-bold tracking-[-0.045em] md:text-[56px]">
              {t.ctaTitle}
            </h2>
            <p className="max-w-[56ch] text-lg leading-snug md:text-xl">
              {t.ctaText}
            </p>
            <Link
              href={t.ctaButton.href}
              className="bg-ink px-6 py-4 text-lg font-semibold text-linen hover:bg-petrol"
            >
              {t.ctaButton.label}
            </Link>
          </div>
        </section>

        <nav
          aria-labelledby="weitere-titel"
          className="px-5 pb-16 md:px-14 md:pb-[72px]"
        >
          <h2
            id="weitere-titel"
            className="text-[32px] leading-none font-bold tracking-[-0.04em] md:text-[44px]"
          >
            {t.more}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map(({ item, i }) => (
              <li key={item.slug}>
                <Link
                  href={pathFor(locale, { kind: "service", index: i })}
                  className="block h-full border-2 rule p-5 text-2xl leading-tight font-bold tracking-[-0.03em] hover:surface-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </Chrome>
  );
}
