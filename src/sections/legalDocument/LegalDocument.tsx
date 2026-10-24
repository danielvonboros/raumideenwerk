import LinkifiedText from "@/components/linkifiedText/LinkifiedText";
import Section from "@/components/section/Section";
import type { LegalDocument as LegalDocumentContent } from "@/content/types";
import { text } from "@/theme/typography";

interface LegalDocumentProps {
  doc: LegalDocumentContent;
}

const isPlaceholder = (line: string) => /\[[^\]]{8,}\]/.test(line);

const LegalDocument = ({ doc }: LegalDocumentProps) => {
  return (
    <Section as="div">
      <article className="flex max-w-[72ch] flex-col">
        <h1 className={`${text.sectionTitle} lowercase`}>{doc.title}</h1>
        {doc.lastUpdated && <p className="mt-4 text-lg italic muted">{doc.lastUpdated}</p>}

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-12 border-t-2 rule pt-7">
            <h2 className="text-2xl leading-tight font-bold tracking-[-0.03em] md:text-[28px]">{section.heading}</h2>
            <div className="mt-4 flex flex-col gap-3">
              {section.lines.map((line, index) =>
                isPlaceholder(line) ? (
                  <p
                    key={index}
                    className="border-2 border-dashed border-petrol surface-strong px-4 py-3 text-[17px] leading-[1.6] muted"
                  >
                    {line}
                  </p>
                ) : (
                  <p key={index} className="text-[17px] leading-[1.6] md:text-lg">
                    <LinkifiedText text={line} />
                  </p>
                ),
              )}
            </div>
          </section>
        ))}
      </article>
    </Section>
  );
};

export default LegalDocument;
