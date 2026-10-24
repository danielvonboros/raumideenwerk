import CtaBanner from "@/components/ctaBanner/CtaBanner";
import Section from "@/components/section/Section";
import type { NavLink } from "@/content/types";

interface CtaProps {
  title: string;
  text: string;
  button: NavLink;
}

const Cta = ({ title, text, button }: CtaProps) => {
  return (
    <Section spacing="bottom">
      <CtaBanner title={title} text={text} button={button} />
    </Section>
  );
};

export default Cta;
