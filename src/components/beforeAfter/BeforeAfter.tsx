"use client";

import Image from "next/image";
import { useRef, useState, type ChangeEvent, type PointerEvent } from "react";
import ImageLabel from "@/components/imageLabel/ImageLabel";
import type { ImageRef } from "@/content/types";
import { cx } from "@/lib/cx";
import { useIntroSwing } from "./useIntroSwing";

export interface BeforeAfterLabels {
  before: string;
  after: string;
  control: string;
  handle: string;
}

interface BeforeAfterProps {
  before: ImageRef;
  after: ImageRef;
  labels: BeforeAfterLabels;
  sizes: string;
  priority?: boolean;
  swing?: boolean;
  className?: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const BeforeAfter = ({ before, after, labels, sizes, priority, swing = false, className }: BeforeAfterProps) => {
  const [position, setPosition] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const stopSwing = useIntroSwing(swing, setPosition);
  const rounded = Math.round(position);

  const moveTo = (clientX: number) => {
    const box = frame.current?.getBoundingClientRect();
    if (!box || box.width === 0) return;
    setPosition(clamp(((clientX - box.left) / box.width) * 100));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    stopSwing();
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    if (event.pointerType === "mouse") moveTo(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(event.clientX);
  };

  const onPointerEnd = () => {
    dragging.current = false;
  };

  const onKeyboardChange = (event: ChangeEvent<HTMLInputElement>) => {
    stopSwing();
    setPosition(Number(event.target.value));
  };

  return (
    <div
      ref={frame}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      className={cx("relative cursor-ew-resize touch-pan-y overflow-hidden bg-ink select-none", className)}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        priority={priority}
        sizes={sizes}
        draggable={false}
        className="object-cover"
        style={{ objectPosition: after.position }}
      />
      <Image
        src={before.src}
        alt={before.alt}
        fill
        priority={priority}
        sizes={sizes}
        draggable={false}
        className="object-cover"
        style={{ objectPosition: before.position, clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-yellow"
        style={{ left: `${position}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={rounded}
        onChange={onKeyboardChange}
        aria-label={labels.control}
        aria-valuetext={`${rounded} % ${labels.before}`}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 border-[3px] border-ink bg-linen px-3 pt-1.5 pb-2 text-lg leading-none font-semibold text-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-yellow"
        style={{ left: `${position}%` }}
      >
        <span className="font-black">‹</span>
        {labels.handle}
        <span className="font-black">›</span>
      </span>
      <ImageLabel text={labels.before} className="top-3 left-3" />
      <ImageLabel text={labels.after} className="top-3 right-3" />
    </div>
  );
};

export default BeforeAfter;
