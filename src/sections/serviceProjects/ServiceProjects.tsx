import ProjectCard from "@/components/projectCard/ProjectCard";
import ScrollRow from "@/components/scrollRow/ScrollRow";
import Section from "@/components/section/Section";
import { projects } from "@/content/projects";
import type { Locale } from "@/content/types";
import { pathFor } from "@/lib/routes";
import { text } from "@/theme/typography";

interface ServiceProjectsProps {
  locale: Locale;
  title: string;
  projectIndexes: number[];
}

const ServiceProjects = ({ locale, title, projectIndexes }: ServiceProjectsProps) => {
  const items = projects[locale].items;

  return (
    <Section labelledBy="projekte-titel" spacing="bottomBleed">
      <h2 id="projekte-titel" className={text.groupTitle}>
        {title}
      </h2>
      <ScrollRow className="mt-8">
        {projectIndexes.map((index) => (
          <ProjectCard key={index} project={items[index]} href={pathFor(locale, { kind: "project", index })} />
        ))}
      </ScrollRow>
    </Section>
  );
};

export default ServiceProjects;
