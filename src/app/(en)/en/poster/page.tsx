import type { Metadata } from "next";
import { campaignMetadata } from "@/lib/metadata";
import Campaign from "@/views/Campaign";

export const metadata: Metadata = campaignMetadata("en", "poster");

const Page = () => <Campaign locale="en" campaign="poster" />;

export default Page;
