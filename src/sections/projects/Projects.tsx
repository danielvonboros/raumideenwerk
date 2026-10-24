import Carousel from "@/components/carousel/Carousel";
import CtaCard from "@/components/ctaCard/CtaCard";
import ProjectCard from "@/components/projectCard/ProjectCard";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { projects } from "@/content/projects";
import { SECTION_IDS } from "@/content/site";
import type { Locale } from "@/content/types";
import { pathFor, sectionHref } from "@/lib/routes";

interface ProjectsProps {
  locale: Locale;
}

const Projects = ({ locale }: ProjectsProps) => {
  const c = projects[locale];

  return (
    <Section id={SECTION_IDS.projects} labelledBy="projekte-titel" spacing="bleed">
      <Carousel
        header={<SectionHeader id="projekte-titel" title={c.title} subtitle={c.subtitle} />}
        prevLabel={c.prevLabel}
        nextLabel={c.nextLabel}
      >
        {c.items.map((project, index) => (
          <ProjectCard key={project.slug} project={project} href={pathFor(locale, { kind: "project", index })} />
        ))}
        <CtaCard
          number={c.ctaCard.number}
          title={c.ctaCard.title}
          subtitle={c.ctaCard.subtitle}
          href={sectionHref(locale, c.ctaCard.section)}
        />
      </Carousel>
    </Section>
  );
};

export default Projects;
