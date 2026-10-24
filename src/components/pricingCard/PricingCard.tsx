import Link from "next/link";
import type { Package } from "@/content/types";
import { cx } from "@/lib/cx";
import { frameButtonClasses, frameClasses } from "@/theme/frames";

interface PricingCardProps {
  item: Package;
  popularLabel: string;
  addOnsLabel: string;
  href: string;
}

const PricingCard = ({ item, popularLabel, addOnsLabel, href }: PricingCardProps) => {
  return (
    <article className={cx("flex flex-col", frameClasses[item.color])}>
      <div className="flex flex-col gap-1.5 px-7 pt-7 pb-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg leading-tight italic">{item.kind}</p>
          {item.popular && (
            <span className="bg-ink px-2.5 pt-[5px] pb-[7px] text-sm leading-none font-semibold text-linen">
              {popularLabel}
            </span>
          )}
        </div>
        <h3 className="text-[32px] leading-none font-bold tracking-[-0.035em] md:text-4xl">{item.name}</h3>
        <p className="mt-3.5 text-[52px] leading-none font-bold tracking-[-0.045em]">{item.price}</p>
        <p className="text-base leading-snug">{item.surcharge}</p>
      </div>

      <div className="mx-5 flex grow flex-col gap-[18px] bg-linen p-6 text-ink">
        <p className="text-[17px] leading-[1.45]">{item.description}</p>
        <ul className="flex flex-col gap-2 text-base leading-[1.35]">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[7px] size-2 shrink-0 bg-ink" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {item.addOns && (
          <div className="flex flex-col gap-1.5 text-base leading-[1.35]">
            <p className="italic">{addOnsLabel}</p>
            {item.addOns.map((addOn) => (
              <p key={addOn.name}>
                {addOn.name}, {addOn.price}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <Link
          href={href}
          className={cx("block px-5 py-4 text-center text-lg font-semibold", frameButtonClasses[item.color])}
        >
          {item.cta}
        </Link>
      </div>
    </article>
  );
};

export default PricingCard;
