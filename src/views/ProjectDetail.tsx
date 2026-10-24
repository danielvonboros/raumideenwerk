import { notFound } from "next/navigation";
import Chrome from "@/components/chrome/Chrome";
import { projectPage } from "@/content/projectPage";
import type { Locale } from "@/content/types";
import { findProject, sectionLink } from "@/lib/routes";
import Cta from "@/sections/cta/Cta";
import ProjectDetails from "@/sections/projectDetails/ProjectDetails";
import ProjectGallery from "@/sections/projectGallery/ProjectGallery";
import ProjectHero from "@/sections/projectHero/ProjectHero";
import ProjectNavigation from "@/sections/projectNavigation/ProjectNavigation";

interface ProjectDetailProps {
  locale: Locale;
  slug: string;
}

const ProjectDetail = ({ locale, slug }: ProjectDetailProps) => {
  const found = findProject(locale, slug);
  if (!found) notFound();

  const { index, project } = found;
  const t = projectPage[locale];

  return (
    <Chrome locale={locale} page={{ kind: "project", index }}>
      <ProjectHero project={project} />
      <ProjectDetails locale={locale} project={project} index={index} />
      <ProjectGallery title={t.gallery} images={project.gallery} />
      <Cta title={t.ctaTitle} text={t.ctaText} button={sectionLink(locale, t.ctaButton)} />
      <ProjectNavigation locale={locale} index={index} />
    </Chrome>
  );
};

export default ProjectDetail;
