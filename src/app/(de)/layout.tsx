import type { Metadata } from "next";
import type { ReactNode } from "react";
import Document from "@/components/document/Document";
import { rootMetadata } from "@/lib/metadata";

export const metadata: Metadata = rootMetadata("de");

const Layout = ({ children }: { children: ReactNode }) => <Document locale="de">{children}</Document>;

export default Layout;
