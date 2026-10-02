import type { SiteContent } from "@/content/types";

export function PainPoints({ c }: { c: SiteContent["painPoints"] }) {
  return (
    <section
      aria-labelledby="bekannt-titel"
      className="bg-ink px-5 py-16 text-linen md:px-14 md:py-[72px]"
    >
      <h2
        id="bekannt-titel"
        className="text-[40px] leading-none font-bold tracking-[-0.04em] md:text-[64px]"
      >
        {c.title}
      </h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        {c.items.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h3 className="text-[26px] leading-[1.05] font-bold tracking-[-0.03em] text-yellow md:text-[30px]">
              {item.title}
            </h3>
            <p className="text-lg leading-[1.5] text-mist md:text-[19px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
