"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  label: string;
  items: TabItem[];
}

const Tabs = ({ label, items }: TabsProps) => {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const last = items.length - 1;

  const select = (index: number) => {
    setActive(index);
    buttons.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const targets: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    select(targets[event.key]);
  };

  return (
    <div>
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${item.id}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel-${item.id}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cx(
              "min-h-11 border-2 rule px-4 pt-2 pb-2.5 text-left text-lg leading-tight font-semibold",
              index === active ? "bg-ink text-linen dark:bg-yellow dark:text-ink" : "hover:surface-strong",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={index !== active}
          tabIndex={0}
          className="mt-8 md:mt-10"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
