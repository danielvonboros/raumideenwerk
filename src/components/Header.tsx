"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/content/types";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  nav: NavLink[];
  cta: NavLink;
  menu: { open: string; close: string };
  homeHref: string;
  languageSwitch: { href: string; label: string; title: string };
  theme: { label: string; toDark: string; toLight: string };
}

export function Header({
  nav,
  cta,
  menu,
  homeHref,
  languageSwitch,
  theme,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-linen dark:bg-ink">
      <div className="flex h-16 items-center justify-between gap-6 px-5 md:h-24 md:px-14">
        <Link href={homeHref} aria-label="raumideenwerk" className="shrink-0">
          <Logo priority className="h-9 w-auto md:h-11" />
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex gap-8 text-lg font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-petrol dark:hover:text-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={languageSwitch.href}
            hrefLang={languageSwitch.label}
            title={languageSwitch.title}
            className="px-1 text-lg font-medium hover:text-petrol dark:hover:text-yellow"
          >
            {languageSwitch.label}
          </Link>
          <ThemeToggle
            label={theme.label}
            toDark={theme.toDark}
            toLight={theme.toLight}
          />
          <Link
            href={cta.href}
            className="hidden bg-ink px-5 py-3.5 text-[17px] font-semibold text-linen hover:bg-petrol sm:inline-block dark:bg-yellow dark:text-ink dark:hover:bg-linen"
          >
            {cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? menu.close : menu.open}
            className="flex size-11 items-center justify-center border-2 border-ink lg:hidden dark:border-linen"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5 L19 19 M19 5 L5 19"
                  stroke="currentColor"
                  strokeWidth="2.4"
                />
              ) : (
                <path
                  d="M3 7 H21 M3 17 H21"
                  stroke="currentColor"
                  strokeWidth="2.4"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Hauptnavigation"
          className="border-t-2 border-ink px-5 pb-8 lg:hidden dark:border-linen"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-3 text-[28px] leading-tight font-bold tracking-[-0.035em]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={cta.href}
            onClick={close}
            className="mt-5 inline-block bg-ink px-5 py-3.5 text-[17px] font-semibold text-linen dark:bg-yellow dark:text-ink"
          >
            {cta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
