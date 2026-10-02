"use client";

import { useEffect, useState } from "react";

export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})()`;

interface ThemeToggleProps {
  label: string;
  toDark: string;
  toLight: string;
}

export function ThemeToggle({ label, toDark, toLight }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
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
        <svg
          viewBox="0 0 16 16"
          width="13"
          height="13"
          fill="currentColor"
          aria-hidden="true"
          className="dark:hidden"
        >
          <path d="M5.78 13.58A6 6 0 1 0 9.74 2.26A7.2 7.2 0 0 1 5.78 13.58Z" />
        </svg>
        <svg
          viewBox="0 0 16 16"
          width="13"
          height="13"
          fill="none"
          aria-hidden="true"
          className="hidden dark:block"
        >
          <circle cx="8" cy="8" r="2.6" fill="currentColor" />
          <path
            d="M12.50 8.00L14.80 8.00M11.18 11.18L12.81 12.81M8.00 12.50L8.00 14.80M4.82 11.18L3.19 12.81M3.50 8.00L1.20 8.00M4.82 4.82L3.19 3.19M8.00 3.50L8.00 1.20M11.18 4.82L12.81 3.19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}
