import FrameHero from "@/components/frameHero/FrameHero";
import type { Project } from "@/content/types";

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <FrameHero
      color={project.color}
      number={project.number}
      spine={project.year}
      title={project.title}
      subtitle={project.subtitle}
      image={project.cover}
      detail={project.detail}
    />
  );
};

export default ProjectHero;
