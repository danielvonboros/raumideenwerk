import type { Metadata } from "next";
import { rootMetadata } from "@/content/site";
import { Document } from "@/components/Document";

export const metadata: Metadata = rootMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
