"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "@/lib/useInView";
import { percent as toPercent } from "@/lib/format";

interface ProgressBarProps {
  raised: number;
  goal: number;
  /** `urgent` paints the fill terra; `default` paints it moss. */
  variant?: "default" | "urgent";
  /** Bar thickness in px. Default 3. */
  thickness?: number;
  /** Class extension on the wrapper. */
  className?: string;
  /** Disable the load animation (useful for tests or print). */
  animate?: boolean;
}

/**
 * Animated progress bar that scales from 0 → target only once the
 * bar is actually scrolled into view. Falls back instantly when
 * IntersectionObserver is missing or the user prefers reduced motion.
 */
export default function ProgressBar({
  raised,
  goal,
  variant = "default",
  thickness = 3,
  className = "",
  animate = true,
}: ProgressBarProps) {
  const target = toPercent(raised, goal);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [fill, setFill] = useState(0);

  useEffect(() => {
    if (!animate) {
      setFill(target);
      return;
    }
    if (!inView) return;

    if (prefersReducedMotion()) {
      setFill(target);
      return;
    }

    const id = requestAnimationFrame(() => setFill(target));
    return () => cancelAnimationFrame(id);
  }, [animate, inView, target]);

  const fillColor = variant === "urgent" ? "bg-terra" : "bg-moss";

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-full bg-hair ${className}`}
      style={{ height: thickness }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(target * 100)}
    >
      <div
        className={`h-full origin-left rounded-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] motion-reduce:!transition-none ${fillColor}`}
        style={{ transform: `scaleX(${fill})` }}
      />
    </div>
  );
}
