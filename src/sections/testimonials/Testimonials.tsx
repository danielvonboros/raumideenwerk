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
    <Section labelledBy="stimmen-titel" spacing="bottom">
      <div className="flex flex-col gap-10 border-t-2 rule pt-8 md:gap-11 md:pt-10">
        <h2 id="stimmen-titel" className={text.groupTitle}>
          {c.title}
        </h2>
        <div className="grid items-start gap-10 md:grid-cols-3">
          {c.items.map((item) => (
            <Quote key={item.author} text={item.text} author={item.author} context={item.context} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
