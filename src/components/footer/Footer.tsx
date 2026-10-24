import Link from "next/link";
import { footer } from "@/content/footer";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { pathFor } from "@/lib/routes";
import Logo from "@/components/logo/Logo";

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  const c = footer[locale];

  return (
    <footer className="grid gap-10 bg-ink px-5 pt-12 pb-11 text-linen sm:grid-cols-2 md:px-14 lg:grid-cols-4">
      <Link href={pathFor(locale, { kind: "home" })} aria-label={c.homeLabel} className="w-fit">
        <Logo alt={site.name} variant="linen" className="h-10 w-auto" />
      </Link>

      <ul className="flex flex-col gap-2 text-[17px] leading-[1.4]">
        {c.contact.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:text-yellow">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 text-[17px] leading-[1.4]">
        {c.social.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:text-yellow"
          >
            {item.label}
          </a>
        ))}
        <span>{c.address}</span>
      </div>

      <ul className="flex flex-col gap-2 text-base leading-[1.4] lg:items-end">
        {c.legal.map((item) => (
          <li key={item.page}>
            <Link href={pathFor(locale, { kind: item.page })} className="hover:text-yellow">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
