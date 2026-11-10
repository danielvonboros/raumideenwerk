import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Document from "@/components/document/Document";
import { rootMetadata, rootViewport } from "@/lib/metadata";

export const metadata: Metadata = rootMetadata("de");

export const viewport: Viewport = rootViewport;

const Layout = ({ children }: { children: ReactNode }) => <Document locale="de">{children}</Document>;

export default Layout;
