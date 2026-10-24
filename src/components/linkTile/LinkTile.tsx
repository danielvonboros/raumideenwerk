import Link from "next/link";
import { cx } from "@/lib/cx";
import { text } from "@/theme/typography";

interface LinkTileProps {
  href: string;
  title: string;
  eyebrow?: string;
  alignEnd?: boolean;
}

const LinkTile = ({ href, title, eyebrow, alignEnd = false }: LinkTileProps) => {
  return (
    <Link
      href={href}
      className={cx("block h-full border-2 rule p-5 hover:surface-strong", alignEnd && "sm:text-right")}
    >
      {eyebrow && <span className="text-base italic">{eyebrow}</span>}
      <span className={cx("block", eyebrow && "mt-1", text.tileTitle)}>{title}</span>
    </Link>
  );
};

export default LinkTile;
