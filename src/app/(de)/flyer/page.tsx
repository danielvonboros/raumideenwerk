import type { Metadata } from "next";
import { campaignMetadata } from "@/lib/metadata";
import Campaign from "@/views/Campaign";

export const metadata: Metadata = campaignMetadata("de", "flyer");

const Page = () => <Campaign locale="de" campaign="flyer" />;

export default Page;
