import { link } from "@/theme/typography";

interface LinkifiedTextProps {
  text: string;
}

const TOKEN = /(https?:\/\/[^\s,)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

const isUrl = (part: string) => part.startsWith("http://") || part.startsWith("https://");
const isEmail = (part: string) => !isUrl(part) && part.includes("@");

const LinkifiedText = ({ text }: LinkifiedTextProps) => {
  return (
    <>
      {text.split(TOKEN).map((part, index) => {
        if (isUrl(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.inline} break-words`}
            >
              {part.replace(/^https?:\/\//, "")}
            </a>
          );
        }
        if (isEmail(part)) {
          return (
            <a key={index} href={`mailto:${part}`} className={link.inline}>
              {part}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default LinkifiedText;
