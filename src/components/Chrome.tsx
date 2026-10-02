import type { Locale } from "@/content/types";
import {
  alternatesFor,
  localeLabel,
  pathFor,
  site,
  type PageRef,
} from "@/content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

const switchTitle: Record<Locale, string> = {
  de: "Diese Seite auf Deutsch",
  en: "This page in English",
};

const themeLabels: Record<
  Locale,
  { label: string; toDark: string; toLight: string }
> = {
  de: {
    label: "Dunkelmodus",
    toDark: "Zum dunklen Modus wechseln",
    toLight: "Zum hellen Modus wechseln",
  },
  en: {
    label: "Dark mode",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
  },
};

export function Chrome({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: PageRef;
  children: React.ReactNode;
}) {
  const c = site[locale];
  const other: Locale = locale === "de" ? "en" : "de";
  const alternates = alternatesFor(page);

  return (
    <>
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-tinte focus:px-4 focus:py-3 focus:text-leinen dark:focus:bg-gelb dark:focus:text-tinte"
      >
        {c.skipLink}
      </a>
      <Header
        nav={c.nav}
        cta={c.headerCta}
        menu={c.menu}
        homeHref={pathFor(locale, { kind: "home" })}
        languageSwitch={{
          href: alternates[other],
          label: localeLabel[other],
          title: switchTitle[other],
        }}
        theme={themeLabels[locale]}
      />
      {children}
      <Footer c={c.footer} homeHref={pathFor(locale, { kind: "home" })} />
    </>
  );
}
