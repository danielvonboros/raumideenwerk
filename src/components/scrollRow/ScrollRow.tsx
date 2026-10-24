import type { ReactNode, Ref } from "react";
import { cx } from "@/lib/cx";

interface ScrollRowProps {
  className?: string;
  ref?: Ref<HTMLDivElement>;
  children: ReactNode;
}

const ScrollRow = ({ className, ref, children }: ScrollRowProps) => {
  return (
    <div
      ref={ref}
      className={cx(
        className,
        "flex snap-x snap-mandatory gap-6 overflow-x-auto pr-5 pb-5 [scrollbar-color:var(--color-ink)_var(--color-sand)] [scrollbar-width:thin] md:pr-14",
      )}
    >
      {children}
    </div>
  );
};

export default ScrollRow;
