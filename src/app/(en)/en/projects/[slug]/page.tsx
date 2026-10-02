import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findProject, metadataAlternates, site } from "@/content/site";
import { ProjectPage } from "@/components/ProjectPage";

const LOCALE = "en" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return site[LOCALE].projects.items.map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = findProject(LOCALE, slug);
  if (!found) return {};
  const { index, project } = found;

  return {
    title: project.metaTitle,
    description: project.description,
    alternates: metadataAlternates(LOCALE, { kind: "project", index }),
    openGraph: {
      title: `${project.metaTitle} | raumideenwerk`,
      description: project.description,
      type: "article",
      locale: "en_US",
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!findProject(LOCALE, slug)) notFound();
  return <ProjectPage locale={LOCALE} slug={slug} />;
}
