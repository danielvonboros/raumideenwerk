import { text as type } from "@/theme/typography";

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard = ({ title, text }: InfoCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={type.itemTitle}>{title}</h3>
      <p className={type.body}>{text}</p>
    </div>
  );
};

export default InfoCard;
