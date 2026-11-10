"use client";

import { useState } from "react";
import Icon from "@/components/icon/Icon";
import { cx } from "@/lib/cx";
import MarqueeLines from "./MarqueeLines";

interface MarqueeProps {
  lines: string[];
  pauseLabel: string;
  playLabel: string;
}

const Marquee = ({ lines, pauseLabel, playLabel }: MarqueeProps) => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="group relative overflow-hidden border-y-[3px] border-yellow bg-ink py-5 text-yellow md:py-6">
      <div
        className={cx(
          "flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          paused && "[animation-play-state:paused]",
        )}
      >
        <MarqueeLines lines={lines} />
        <MarqueeLines lines={lines} hidden />
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? playLabel : pauseLabel}
        className="absolute inset-y-0 right-0 flex w-14 items-center justify-center border-l-[3px] border-yellow bg-ink text-yellow hover:bg-depth motion-reduce:hidden"
      >
        <Icon name={paused ? "play" : "pause"} />
      </button>
    </div>
  );
};

export default Marquee;
