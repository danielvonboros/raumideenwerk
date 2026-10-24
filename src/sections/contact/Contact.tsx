import ContactForm from "@/components/contactForm/ContactForm";
import FactList from "@/components/factList/FactList";
import Section from "@/components/section/Section";
import { contact } from "@/content/contact";
import { SECTION_IDS } from "@/content/site";
import type { ContactDetail, Locale } from "@/content/types";
import { link, text } from "@/theme/typography";

interface ContactProps {
  locale: Locale;
}

const detailValue = (detail: ContactDetail) =>
  detail.href ? (
    <a
      href={detail.href}
      className={link.inline}
      {...(detail.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {detail.value}
    </a>
  ) : (
    detail.value
  );

const Contact = ({ locale }: ContactProps) => {
  const c = contact[locale];

  return (
    <Section id={SECTION_IDS.contact} labelledBy="kontakt-titel">
      <div className="grid bg-yellow text-ink lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]">
        <div className="flex flex-col justify-between gap-10 p-7 md:p-12">
          <div className="flex flex-col gap-4">
            <h2 id="kontakt-titel" className={text.sectionTitle}>
              {c.title}
            </h2>
            <p className={text.lead}>{c.subtitle}</p>
          </div>
          <FactList
            variant="contact"
            items={c.details.map((detail) => ({ label: detail.label, value: detailValue(detail) }))}
          />
        </div>

        <div className="mx-4 mb-4 bg-linen p-6 md:mx-6 md:mb-6 md:p-9 lg:mt-6 lg:ml-0">
          <ContactForm c={c.form} />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
