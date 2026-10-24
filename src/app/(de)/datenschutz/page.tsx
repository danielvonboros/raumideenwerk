import type { Metadata } from "next";
import { legalMetadata } from "@/lib/metadata";
import Legal from "@/views/Legal";

export const metadata: Metadata = legalMetadata("de", "privacy");

const Page = () => <Legal locale="de" kind="privacy" />;

export default Page;
