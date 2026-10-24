import type { Metadata } from "next";
import { legalMetadata } from "@/lib/metadata";
import Legal from "@/views/Legal";

export const metadata: Metadata = legalMetadata("en", "imprint");

const Page = () => <Legal locale="en" kind="imprint" />;

export default Page;
