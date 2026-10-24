import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type SectionTone = "plain" | "ink" | "petrol";
type SectionSpacing = "full" | "bleed" | "bottom" | "bottomBleed";

interface SectionProps {
  id?: string;
  labelledBy?: string;
  label?: string;
  as?: "section" | "nav" | "div";
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
}

const tones: Record<SectionTone, string> = {
  plain: "",
  ink: "bg-ink text-linen",
  petrol: "bg-petrol text-linen",
};

const spacings: Record<SectionSpacing, string> = {
  full: "px-5 py-16 md:px-14 md:py-[72px]",
  bleed: "py-16 pl-5 md:py-[72px] md:pl-14",
  bottom: "px-5 pb-16 md:px-14 md:pb-[72px]",
  bottomBleed: "pb-16 pl-5 md:pb-[72px] md:pl-14",
};

const Section = ({
  id,
  labelledBy,
  label,
  as: Tag = "section",
  tone = "plain",
  spacing = "full",
  className,
  children,
}: SectionProps) => {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={cx(id && "scroll-mt-24", tones[tone], spacings[spacing], className)}
    >
      {children}
    </Tag>
  );
};

export default Section;
