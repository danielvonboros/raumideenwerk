import type { LegalDocument } from "@/content/types";

const TOKEN = /(https?:\/\/[^\s,)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

const isUrl = (part: string) =>
  part.startsWith("http://") || part.startsWith("https://");
const isEmail = (part: string) => !isUrl(part) && part.includes("@");

const isPlaceholder = (line: string) => /\[[^\]]{8,}\]/.test(line);

const linkClass = "underline decoration-1 underline-offset-4 hover:text-petrol";

function Line({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, index) => {
        if (isUrl(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} break-words`}
            >
              {part.replace(/^https?:\/\//, "")}
            </a>
          );
        }
        if (isEmail(part)) {
          return (
            <a key={index} href={`mailto:${part}`} className={linkClass}>
              {part}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <main id="inhalt" className="px-5 py-16 md:px-14 md:py-[72px]">
      <article className="flex max-w-[72ch] flex-col">
        <h1 className="text-[40px] leading-none font-bold tracking-[-0.04em] lowercase md:text-[64px]">
          {doc.title}
        </h1>
        {doc.lastUpdated && (
          <p className="mt-4 text-lg italic text-schiefer">{doc.lastUpdated}</p>
        )}

        {doc.sections.map((section) => (
          <section
            key={section.heading}
            className="mt-12 border-t-2 border-tinte pt-7"
          >
            <h2 className="text-2xl leading-tight font-bold tracking-[-0.03em] md:text-[28px]">
              {section.heading}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {section.lines.map((line, index) =>
                isPlaceholder(line) ? (
                  <p
                    key={index}
                    className="border-2 border-dashed border-petrol bg-sand px-4 py-3 text-[17px] leading-[1.6] text-schiefer"
                  >
                    {line}
                  </p>
                ) : (
                  <p
                    key={index}
                    className="text-[17px] leading-[1.6] md:text-lg"
                  >
                    <Line text={line} />
                  </p>
                ),
              )}
            </div>
          </section>
        ))}
      </article>
    </main>
  );
}
