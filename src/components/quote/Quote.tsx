interface QuoteProps {
  text: string;
  author: string;
  context?: string;
}

const Quote = ({ text, author, context }: QuoteProps) => {
  return (
    <figure className="flex flex-col gap-[18px]">
      <span aria-hidden="true" className="text-[72px] leading-[0.6] font-black text-petrol dark:text-yellow">
        „
      </span>
      <blockquote className="text-lg leading-[1.5]">{text}</blockquote>
      <figcaption className="flex flex-col gap-1">
        <span className="text-lg font-bold">{author}</span>
        {context && <span className="text-base muted">{context}</span>}
      </figcaption>
    </figure>
  );
};

export default Quote;
