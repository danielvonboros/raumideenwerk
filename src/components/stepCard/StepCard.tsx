import Icon from "@/components/icon/Icon";

interface StepCardProps {
  number: string;
  title: string;
  text: string;
}

const tickClass = "absolute top-1/2 -translate-y-1/2";

const StepCard = ({ number, title, text }: StepCardProps) => {
  return (
    <li className="flex flex-col">
      <span aria-hidden="true" className="text-center text-2xl font-bold tabular-nums md:text-[26px]">
        {number}
      </span>
      <div aria-hidden="true" className="relative mt-2 h-6">
        <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
        <Icon name="tick" className={`${tickClass} left-0 -translate-x-1/2`} />
        <Icon name="tick" className={`${tickClass} right-0 translate-x-1/2`} />
      </div>
      <h3 className="mt-6 pr-8 pl-3 text-[28px] leading-none font-bold tracking-[-0.035em] md:text-[34px]">
        {title}
      </h3>
      <p className="mt-3 pr-8 pl-3 text-lg leading-[1.5] muted md:text-[19px]">{text}</p>
    </li>
  );
};

export default StepCard;
