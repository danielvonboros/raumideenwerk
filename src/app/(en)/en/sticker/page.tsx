import type { Metadata } from "next";
import { campaignMetadata } from "@/lib/metadata";
import Campaign from "@/views/Campaign";

export const metadata: Metadata = campaignMetadata("en", "sticker");

const Page = () => <Campaign locale="en" campaign="sticker" />;

export default Page;
