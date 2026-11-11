import { cx } from "@/lib/cx";

interface ImageLabelProps {
  text: string;
  as?: "span" | "figcaption";
  className?: string;
}

const ImageLabel = ({ text, as: Tag = "span", className }: ImageLabelProps) => {
  return (
    <Tag
      className={cx(
        "pointer-events-none absolute bg-yellow px-2.5 pt-1.5 pb-2 text-sm leading-none font-semibold text-ink",
        className,
      )}
    >
      {text}
    </Tag>
  );
};

export default ImageLabel;
