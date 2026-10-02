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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-tinte focus:px-4 focus:py-3 focus:text-leinen"
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
      />
      {children}
      <Footer c={c.footer} homeHref={pathFor(locale, { kind: "home" })} />
    </>
  );
}
