"use client";

import { useRef, type ReactNode } from "react";
import Icon from "@/components/icon/Icon";
import ScrollRow from "@/components/scrollRow/ScrollRow";

interface CarouselProps {
  header: ReactNode;
  prevLabel: string;
  nextLabel: string;
  children: ReactNode;
}

const buttonClass =
  "flex size-14 items-center justify-center border-2 rule surface hover:surface-strong";

const Carousel = ({ header, prevLabel, nextLabel, children }: CarouselProps) => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const row = scroller.current;
    if (!row) return;
    const card = row.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : row.clientWidth * 0.8;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6 pr-5 md:pr-14">
        {header}
        <div className="flex gap-3">
          <button type="button" onClick={() => scrollByCard(-1)} aria-label={prevLabel} className={buttonClass}>
            <Icon name="chevronLeft" />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} aria-label={nextLabel} className={buttonClass}>
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
      <ScrollRow ref={scroller} className="mt-10">
        {children}
      </ScrollRow>
    </>
  );
};

export default Carousel;
