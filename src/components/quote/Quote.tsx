interface QuoteProps {
  text: string;
  author: string;
}

const Quote = ({ text, author }: QuoteProps) => {
  return (
    <figure className="flex flex-col gap-[18px]">
      <span aria-hidden="true" className="text-[72px] leading-[0.6] font-bold text-yellow">
        „
      </span>
      <blockquote className="text-lg leading-[1.5]">{text}</blockquote>
      <figcaption className="text-lg font-bold">{author}</figcaption>
    </figure>
  );
};

export default Quote;
