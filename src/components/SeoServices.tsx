import type { SiteContent } from "@/content/types";

export function SeoServices({ c }: { c: SiteContent["seoServices"] }) {
  return (
    <section
      aria-labelledby="leistungsuebersicht-titel"
      className="px-5 py-16 md:px-14 md:py-[72px]"
    >
      <div className="flex flex-col gap-7 border-2 border-dashed rule p-6 md:p-10">
        <h2
          id="leistungsuebersicht-titel"
          className="text-3xl leading-none font-bold tracking-[-0.035em] md:text-[44px]"
        >
          {c.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {c.items.map((service) => (
            <div key={service.title} className="flex flex-col gap-2.5">
              <h3 className="text-2xl leading-tight font-bold tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="text-lg leading-[1.5] muted">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
