import Link from "next/link";
import { cx } from "@/lib/cx";
import { cardSize } from "@/theme/frames";

interface CtaCardProps {
  number: string;
  title: string;
  subtitle: string;
  href: string;
}

const CtaCard = ({ number, title, subtitle, href }: CtaCardProps) => {
  return (
    <Link
      href={href}
      className={cx(
        "grid grid-cols-[50px_minmax(0,1fr)] grid-rows-[1.2fr_auto_1fr] border-2 rule bg-linen text-ink md:grid-cols-[62px_minmax(0,1fr)]",
        cardSize,
      )}
    >
      <div className="row-span-3 py-3.5 pl-3 md:pl-3.5">
        <span className="text-[28px] leading-none font-bold tracking-[-0.04em] md:text-[34px]">
          {number}
        </span>
      </div>
      <div className="mt-3.5 mr-3.5 border-2 border-dashed rule" />
      <div className="flex flex-col gap-1.5 px-4 pt-4 pb-4 md:pl-3.5">
        <h3 className="text-[22px] leading-none font-bold tracking-[-0.035em] md:text-[26px]">
          {title}
        </h3>
        <p className="text-[15px] leading-snug italic underline underline-offset-4 md:text-[17px]">
          {subtitle}
        </p>
      </div>
      <div className="mr-3.5 mb-3.5 border-2 border-dashed rule" />
    </Link>
  );
};

export default CtaCard;
