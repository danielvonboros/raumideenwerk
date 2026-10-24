import type { Metadata } from "next";
import { homeMetadata } from "@/lib/metadata";
import Home from "@/views/Home";

export const metadata: Metadata = homeMetadata("en");

const Page = () => <Home locale="en" />;

export default Page;
