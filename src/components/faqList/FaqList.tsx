import type { FaqItem } from "@/content/types";
import { text } from "@/theme/typography";

interface FaqListProps {
  items: FaqItem[];
}

const FaqList = ({ items }: FaqListProps) => {
  return (
    <div className="mt-10 grid gap-x-14 gap-y-10 md:mt-11 lg:grid-cols-2">
      {items.map((item) => (
        <div key={item.question} className="flex flex-col gap-3 border-t-2 rule pt-5">
          <h3 className={`${text.itemTitle} lowercase md:text-[28px]`}>{item.question}</h3>
          <p className={`max-w-[62ch] ${text.body}`}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
