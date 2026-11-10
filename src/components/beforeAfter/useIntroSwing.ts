import { useCallback, useEffect, useRef } from "react";

const start = 50;
const delay = 600;
const keyframes = [
  { at: 0, value: start },
  { at: 900, value: 78 },
  { at: 2000, value: 22 },
  { at: 2900, value: start },
];

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const valueAt = (elapsed: number): number | null => {
  if (elapsed < 0) return start;
  const next = keyframes.findIndex((frame) => frame.at > elapsed);
  if (next === -1) return null;
  const from = keyframes[next - 1];
  const to = keyframes[next];
  const progress = easeInOut((elapsed - from.at) / (to.at - from.at));
  return from.value + (to.value - from.value) * progress;
};

export const useIntroSwing = (enabled: boolean, onFrame: (value: number) => void) => {
  const frameId = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (frameId.current !== null) cancelAnimationFrame(frameId.current);
    frameId.current = null;
  }, []);

  useEffect(() => {
    if (!enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let startedAt: number | null = null;
    const tick = (now: number) => {
      startedAt ??= now;
      const value = valueAt(now - startedAt - delay);
      if (value === null) {
        onFrame(start);
        frameId.current = null;
        return;
      }
      onFrame(value);
      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);
    return stop;
  }, [enabled, onFrame, stop]);

  return stop;
};
