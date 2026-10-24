import type { ReactNode } from "react";

interface IconDefinition {
  viewBox: string;
  width: number;
  height: number;
  fill?: string;
  content: ReactNode;
}

export const icons = {
  chevronLeft: {
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    content: <path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" strokeWidth="2.4" />,
  },
  chevronRight: {
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    content: <path d="M9 5 L16 12 L9 19" fill="none" stroke="currentColor" strokeWidth="2.4" />,
  },
  menu: {
    viewBox: "0 0 24 24",
    width: 22,
    height: 22,
    content: <path d="M3 7 H21 M3 17 H21" stroke="currentColor" strokeWidth="2.4" />,
  },
  close: {
    viewBox: "0 0 24 24",
    width: 22,
    height: 22,
    content: <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2.4" />,
  },
  moon: {
    viewBox: "0 0 16 16",
    width: 13,
    height: 13,
    fill: "currentColor",
    content: <path d="M5.78 13.58A6 6 0 1 0 9.74 2.26A7.2 7.2 0 0 1 5.78 13.58Z" />,
  },
  sun: {
    viewBox: "0 0 16 16",
    width: 13,
    height: 13,
    fill: "none",
    content: (
      <>
        <circle cx="8" cy="8" r="2.6" fill="currentColor" />
        <path
          d="M12.50 8.00L14.80 8.00M11.18 11.18L12.81 12.81M8.00 12.50L8.00 14.80M4.82 11.18L3.19 12.81M3.50 8.00L1.20 8.00M4.82 4.82L3.19 3.19M8.00 3.50L8.00 1.20M11.18 4.82L12.81 3.19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
  tick: {
    viewBox: "0 0 16 24",
    width: 16,
    height: 24,
    content: (
      <>
        <line x1="8" y1="0" x2="8" y2="24" stroke="currentColor" strokeWidth="2" />
        <line x1="0" y1="20" x2="16" y2="4" stroke="currentColor" strokeWidth="3" />
      </>
    ),
  },
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;
