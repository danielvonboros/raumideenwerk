import type { ReactNode } from "react";
import { shell, site } from "@/content/site";
import type { Locale } from "@/content/types";
import { alternatesFor, otherLocale, pathFor, sectionLink, type PageRef } from "@/lib/routes";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SkipLink from "@/components/skipLink/SkipLink";

const MAIN_ID = "inhalt";

interface ChromeProps {
  locale: Locale;
  page: PageRef;
  children: ReactNode;
}

const Chrome = ({ locale, page, children }: ChromeProps) => {
  const c = shell[locale];
  const other = otherLocale(locale);

  return (
    <>
      <SkipLink label={c.skipLink} target={MAIN_ID} />
      <Header
        nav={c.nav.map((item) => sectionLink(locale, item))}
        cta={sectionLink(locale, c.cta)}
        menu={c.menu}
        homeHref={pathFor(locale, { kind: "home" })}
        homeLabel={site.name}
        navigationLabel={c.navigationLabel}
        languageSwitch={{
          href: alternatesFor(page)[other],
          label: other,
          title: shell[other].languageSwitchTitle,
        }}
        theme={c.themeToggle}
      />
      <main id={MAIN_ID}>{children}</main>
      <Footer locale={locale} />
    </>
  );
};

export default Chrome;
