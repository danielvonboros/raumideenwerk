import type { Locale } from "@/content/types";
import { pathFor, site } from "@/content/site";
import { About } from "./About";
import { Chrome } from "./Chrome";
import { ContactSection } from "./ContactSection";
import { Hero } from "./Hero";
import { Packages } from "./Packages";
import { PainPoints } from "./PainPoints";
import { Process } from "./Process";
import { ProjectCatalog } from "./ProjectCatalog";
import { ProjectCover, ProjectCtaCard } from "./ProjectCover";
import { SeoServices } from "./SeoServices";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";

export function HomePage({ locale }: { locale: Locale }) {
  const c = site[locale];

  return (
    <Chrome locale={locale} page={{ kind: "home" }}>
      <main id="inhalt">
        <Hero c={c.hero} />

        <ProjectCatalog
          title={c.projects.title}
          subtitle={c.projects.subtitle}
          prevLabel={c.projects.prevLabel}
          nextLabel={c.projects.nextLabel}
        >
          {c.projects.items.map((project, index) => (
            <ProjectCover
              key={project.slug}
              project={project}
              href={pathFor(locale, { kind: "project", index })}
            />
          ))}
          <ProjectCtaCard {...c.projects.ctaCard} />
        </ProjectCatalog>

        <Services c={c.services} />
        <PainPoints c={c.painPoints} />
        <Process c={c.process} />
        <Packages c={c.packages} ctaHref={c.headerCta.href} />
        <About c={c.about} />
        <Testimonials c={c.testimonials} />
        <SeoServices />
        <ContactSection c={c.contact} />
      </main>
    </Chrome>
  );
}
