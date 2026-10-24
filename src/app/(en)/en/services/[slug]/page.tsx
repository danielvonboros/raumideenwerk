import type { Metadata } from "next";
import { servicePages } from "@/content/servicePages";
import { serviceMetadata } from "@/lib/metadata";
import ServiceDetail from "@/views/ServiceDetail";

const LOCALE = "en" as const;

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => servicePages[LOCALE].items.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> =>
  serviceMetadata(LOCALE, (await params).slug);

const Page = async ({ params }: Props) => <ServiceDetail locale={LOCALE} slug={(await params).slug} />;

export default Page;
