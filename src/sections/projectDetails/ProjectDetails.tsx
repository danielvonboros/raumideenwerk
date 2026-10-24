import Link from "next/link";
import type { ReactNode } from "react";
import FactList from "@/components/factList/FactList";
import Section from "@/components/section/Section";
import { projectPage } from "@/content/projectPage";
import { SECTION_IDS } from "@/content/site";
import type { Locale, Project } from "@/content/types";
import { pathFor, sectionHref, servicesForProject } from "@/lib/routes";
import { link, text } from "@/theme/typography";

interface ProjectDetailsProps {
  locale: Locale;
  project: Project;
  index: number;
}

const ProjectDetails = ({ locale, project, index }: ProjectDetailsProps) => {
  const t = projectPage[locale];
  const services = servicesForProject(locale, index);

  const facts: { label: string; value: ReactNode }[] = [
    { label: t.materials, value: project.materials },
    { label: t.dimensions, value: project.dimensions },
    { label: t.year, value: project.year },
  ];

  if (services.length > 0) {
    facts.push({
      label: t.services,
      value: (
        <span className="flex flex-col gap-1">
          {services.map(({ service, index: serviceIndex }) => (
            <Link
              key={service.slug}
              href={pathFor(locale, { kind: "service", index: serviceIndex })}
              className="w-fit underline underline-offset-4 hover:text-petrol"
            >
              {service.label}
            </Link>
          ))}
        </span>
      ),
    });
  }

  return (
    <Section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
      <div className="flex max-w-[68ch] flex-col gap-10">
        <Link href={sectionHref(locale, SECTION_IDS.projects)} className={link.back}>
          {t.back}
        </Link>
        {project.goal && (
          <div>
            <h2 className={text.blockTitle}>{t.goal}</h2>
            <p className="mt-3 text-xl leading-snug italic md:text-2xl">{project.goal}</p>
          </div>
        )}
        <div>
          <h2 className={text.blockTitle}>{t.story}</h2>
          <p className={`mt-3 ${text.body} md:text-xl`}>{project.story}</p>
        </div>
      </div>

      <FactList variant="project" items={facts} />
    </Section>
  );
};

export default ProjectDetails;
