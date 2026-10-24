"use client";

import { useSyncExternalStore } from "react";
import Icon from "@/components/icon/Icon";

interface ThemeToggleProps {
  label: string;
  toDark: string;
  toLight: string;
}

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};

const isDark = () => document.documentElement.classList.contains("dark");

const ThemeToggle = ({ label, toDark, toLight }: ThemeToggleProps) => {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={label}
      title={dark ? toLight : toDark}
      onClick={toggle}
      className="relative h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-ink dark:border-yellow"
    >
      <span className="absolute top-1/2 left-1 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-linen transition-transform duration-200 motion-reduce:transition-none dark:translate-x-6 dark:bg-yellow dark:text-ink">
        <Icon name="moon" className="dark:hidden" />
        <Icon name="sun" className="hidden dark:block" />
      </span>
    </button>
  );
};

export default ThemeToggle;
