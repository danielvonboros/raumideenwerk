interface ServiceCardProps {
  number: string;
  title: string;
  text: string;
}

const ServiceCard = ({ number, title, text }: ServiceCardProps) => {
  return (
    <article className="grid min-h-[400px] grid-cols-[72px_minmax(0,1fr)] grid-rows-[auto_1fr] bg-yellow text-ink md:grid-cols-[112px_minmax(0,1fr)] lg:min-h-[460px]">
      <div className="row-span-2 flex items-end pb-5 pl-4 md:pb-[26px] md:pl-[26px]">
        <span
          aria-hidden="true"
          className="spine text-[64px] leading-[0.8] font-bold tracking-[-0.05em] md:text-[92px]"
        >
          {number}
        </span>
      </div>

      <div className="flex min-h-[150px] flex-col justify-end pt-8 pr-6 pb-5 md:min-h-[196px] md:pr-10 md:pb-[22px]">
        <h3 className="text-[32px] leading-[0.95] font-bold tracking-[-0.04em] md:text-[44px]">
          {title}
        </h3>
      </div>

      <div className="mr-4 mb-4 bg-linen px-6 py-6 md:mr-6 md:mb-6 md:px-8 md:py-7">
        <p className="text-lg leading-[1.4] font-semibold tracking-[-0.01em] italic md:text-[23px]">
          {text}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
