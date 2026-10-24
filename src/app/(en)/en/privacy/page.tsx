import type { Metadata } from "next";
import { legalMetadata } from "@/lib/metadata";
import Legal from "@/views/Legal";

export const metadata: Metadata = legalMetadata("en", "privacy");

const Page = () => <Legal locale="en" kind="privacy" />;

export default Page;
