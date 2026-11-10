import Marquee from "@/components/marquee/Marquee";
import { campaignLines } from "@/content/campaignLines";
import type { Locale } from "@/content/types";

interface CampaignLinesProps {
  locale: Locale;
}

const CampaignLines = ({ locale }: CampaignLinesProps) => {
  const c = campaignLines[locale];
  return <Marquee lines={c.lines} pauseLabel={c.pause} playLabel={c.play} />;
};

export default CampaignLines;
