import FrameHero from "@/components/frameHero/FrameHero";
import type { Locale, Project } from "@/content/types";
import { comparisonLabels } from "@/lib/comparisonLabels";

interface ProjectHeroProps {
  locale: Locale;
  project: Project;
}

const ProjectHero = ({ locale, project }: ProjectHeroProps) => {
  const comparison = project.before
    ? {
        before: project.before,
        labels: comparisonLabels(locale, { before: project.before, after: project.cover }),
      }
    : undefined;

  return (
    <FrameHero
      color={project.color}
      spine={project.year}
      title={project.title}
      subtitle={project.subtitle}
      image={project.cover}
      detail={comparison ? undefined : project.detail}
      comparison={comparison}
    />
  );
};

export default ProjectHero;
