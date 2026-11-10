import LinkTile from "@/components/linkTile/LinkTile";
import { projects } from "@/content/projects";
import { servicePages } from "@/content/servicePages";
import type { Locale, Problem } from "@/content/types";
import { pathFor } from "@/lib/routes";
import { text } from "@/theme/typography";

interface ProblemPanelProps {
  locale: Locale;
  problem: Problem;
  servicesLabel: string;
  projectsLabel: string;
}

const listClass = "mt-4 grid gap-4 sm:grid-cols-2";

const ProblemPanel = ({ locale, problem, servicesLabel, projectsLabel }: ProblemPanelProps) => {
  const services = servicePages[locale].items;
  const projectItems = projects[locale].items;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
      <p className={`max-w-[46ch] ${text.lead}`}>{problem.text}</p>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className={text.itemTitle}>{servicesLabel}</h3>
          <ul className={listClass}>
            {problem.services.map((index) => (
              <li key={services[index].slug}>
                <LinkTile href={pathFor(locale, { kind: "service", index })} title={services[index].label} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={text.itemTitle}>{projectsLabel}</h3>
          <ul className={listClass}>
            {problem.projects.map((index) => (
              <li key={projectItems[index].slug}>
                <LinkTile href={pathFor(locale, { kind: "project", index })} title={projectItems[index].title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemPanel;
