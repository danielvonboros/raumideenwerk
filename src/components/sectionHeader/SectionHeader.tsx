import { text } from "@/theme/typography";

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ id, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-wrap items-baseline gap-x-7 gap-y-2">
      <h2 id={id} className={text.sectionTitle}>
        {title}
      </h2>
      {subtitle && <p className={text.sectionSubtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
