import Link from "next/link";
import type { NavLink } from "@/content/types";
import { link, text } from "@/theme/typography";

interface CtaBannerProps {
  title: string;
  text: string;
  button: NavLink;
}

const CtaBanner = ({ title, text: body, button }: CtaBannerProps) => {
  return (
    <div className="flex flex-col items-start gap-6 bg-yellow p-7 text-ink md:p-12">
      <h2 className={text.ctaTitle}>{title}</h2>
      <p className="max-w-[56ch] text-lg leading-snug md:text-xl">{body}</p>
      <Link href={button.href} className={link.primary}>
        {button.label}
      </Link>
    </div>
  );
};

export default CtaBanner;
