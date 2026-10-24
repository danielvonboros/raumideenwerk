import { text as type } from "@/theme/typography";

type InfoCardVariant = "plain" | "muted" | "highlight";

interface InfoCardProps {
  title: string;
  text: string;
  variant?: InfoCardVariant;
}

const variants: Record<InfoCardVariant, { root: string; title: string; text: string }> = {
  plain: {
    root: "flex flex-col gap-2",
    title: type.itemTitle,
    text: type.body,
  },
  muted: {
    root: "flex flex-col gap-2.5",
    title: type.itemTitle,
    text: "text-lg leading-[1.5] muted",
  },
  highlight: {
    root: "flex flex-col gap-4",
    title: "text-[26px] leading-[1.05] font-bold tracking-[-0.03em] text-yellow md:text-[30px]",
    text: "text-lg leading-[1.5] text-mist md:text-[19px]",
  },
};

const InfoCard = ({ title, text, variant = "plain" }: InfoCardProps) => {
  const styles = variants[variant];
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default InfoCard;
