import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { Logo } from "./Logo";

export function Footer({
  c,
  homeHref,
}: {
  c: SiteContent["footer"];
  homeHref: string;
}) {
  return (
    <footer className="grid gap-10 bg-ink px-5 pt-12 pb-11 text-linen sm:grid-cols-2 md:px-14 lg:grid-cols-4">
      <Link href={homeHref ?? "/"} aria-label={c.homeLabel} className="w-fit">
        <Logo variant="linen" className="h-10 w-auto" />
      </Link>

      <ul className="flex flex-col gap-2 text-[17px] leading-[1.4]">
        {c.contact.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-yellow">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 text-[17px] leading-[1.4]">
        {c.social.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:text-yellow"
          >
            {link.label}
          </a>
        ))}
        <span>{c.address}</span>
      </div>

      <ul className="flex flex-col gap-2 text-base leading-[1.4] lg:items-end">
        {c.legal.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-yellow">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
