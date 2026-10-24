import Quote from "@/components/quote/Quote";
import Section from "@/components/section/Section";
import { testimonials } from "@/content/testimonials";
import type { Locale } from "@/content/types";
import { text } from "@/theme/typography";

interface TestimonialsProps {
  locale: Locale;
}

const Testimonials = ({ locale }: TestimonialsProps) => {
  const c = testimonials[locale];

  return (
    <Section labelledBy="stimmen-titel" tone="petrol">
      <h2 id="stimmen-titel" className={text.sectionTitle}>
        {c.title}
      </h2>
      <div className="mt-10 grid items-start gap-10 md:mt-11 md:grid-cols-3">
        {c.items.map((item) => (
          <Quote key={item.author} text={item.text} author={item.author} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
