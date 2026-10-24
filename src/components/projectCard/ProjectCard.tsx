import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { cx } from "@/lib/cx";
import { cardImageSizes, cardSize, frameClasses } from "@/theme/frames";

interface ProjectCardProps {
  project: Project;
  href: string;
}

const ProjectCard = ({ project, href }: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className={cx(
        "grid grid-cols-[52px_minmax(0,1fr)] grid-rows-[1.2fr_auto_1fr] md:grid-cols-[64px_minmax(0,1fr)]",
        cardSize,
        frameClasses[project.color],
      )}
    >
      <div className="row-span-3 flex flex-col justify-between py-4 pl-3 md:pl-4">
        <span className="text-[28px] leading-none font-bold tracking-[-0.04em] md:text-[34px]">
          {project.number}
        </span>
        <span className="spine text-[15px] italic">{project.year}</span>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={cardImageSizes}
          className="object-cover"
          style={{ objectPosition: project.cover.position }}
        />
      </div>

      <div className="flex flex-col gap-1.5 px-4 pt-4 pb-4 md:pl-3.5">
        <h3 className="text-[22px] leading-none font-bold tracking-[-0.035em] md:text-[26px]">
          {project.title}
        </h3>
        <p className="text-[15px] leading-snug italic md:text-[17px]">{project.subtitle}</p>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={project.detail.src}
          alt={project.detail.alt}
          fill
          sizes={cardImageSizes}
          className="object-cover"
          style={{ objectPosition: project.detail.position }}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
