import { Fragment, type ReactNode } from "react";

type FactListVariant = "project" | "contact";

interface Fact {
  label: string;
  value: ReactNode;
}

interface FactListProps {
  items: Fact[];
  variant: FactListVariant;
}

const variants: Record<FactListVariant, { list: string; value?: string }> = {
  project: {
    list: "grid h-fit grid-cols-[130px_minmax(0,1fr)] gap-x-4 gap-y-3 border-t-2 rule pt-5 text-lg leading-snug",
  },
  contact: {
    list: "grid grid-cols-[96px_minmax(0,1fr)] gap-x-4 gap-y-2.5 text-lg leading-[1.4]",
    value: "break-words",
  },
};

const FactList = ({ items, variant }: FactListProps) => {
  const styles = variants[variant];
  return (
    <dl className={styles.list}>
      {items.map((item) => (
        <Fragment key={item.label}>
          <dt className="italic">{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </Fragment>
      ))}
    </dl>
  );
};

export default FactList;
