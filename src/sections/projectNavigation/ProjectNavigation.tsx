import LinkTile from "@/components/linkTile/LinkTile";
import Section from "@/components/section/Section";
import { projectPage } from "@/content/projectPage";
import { projects } from "@/content/projects";
import type { Locale } from "@/content/types";
import { pathFor } from "@/lib/routes";

interface ProjectNavigationProps {
  locale: Locale;
  index: number;
}

const ProjectNavigation = ({ locale, index }: ProjectNavigationProps) => {
  const t = projectPage[locale];
  const items = projects[locale].items;
  const previousIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;
  const previous = items[previousIndex];
  const next = items[nextIndex];

  return (
    <Section as="nav" label={t.navigation} spacing="bottom" className="grid gap-6 sm:grid-cols-2">
      <LinkTile
        href={pathFor(locale, { kind: "project", index: previousIndex })}
        eyebrow={t.prev}
        title={`${previous.number} ${previous.title}`}
      />
      <LinkTile
        href={pathFor(locale, { kind: "project", index: nextIndex })}
        eyebrow={t.next}
        title={`${next.number} ${next.title}`}
        alignEnd
      />
    </Section>
  );
};

export default ProjectNavigation;
