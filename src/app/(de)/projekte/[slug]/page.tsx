import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { projectMetadata } from "@/lib/metadata";
import ProjectDetail from "@/views/ProjectDetail";

const LOCALE = "de" as const;

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => projects[LOCALE].items.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> =>
  projectMetadata(LOCALE, (await params).slug);

const Page = async ({ params }: Props) => <ProjectDetail locale={LOCALE} slug={(await params).slug} />;

export default Page;
