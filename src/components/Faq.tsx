import type { SiteContent } from "@/content/types";
import { SectionHeader } from "./SectionHeader";

export function Faq({ c }: { c: SiteContent["faq"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section
      id="fragen"
      aria-labelledby="fragen-titel"
      className="scroll-mt-24 px-5 py-16 md:px-14 md:py-[72px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SectionHeader id="fragen-titel" title={c.title} subtitle={c.subtitle} />

      <div className="mt-10 grid gap-x-14 gap-y-10 md:mt-11 lg:grid-cols-2">
        {c.items.map((item) => (
          <div key={item.question} className="flex flex-col gap-3 border-t-2 rule pt-5">
            <h3 className="text-2xl leading-tight font-bold tracking-[-0.02em] lowercase md:text-[28px]">
              {item.question}
            </h3>
            <p className="max-w-[62ch] text-lg leading-[1.55]">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
