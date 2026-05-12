"use client";

import { useEffect, useRef, useState } from "react";
import { percent } from "@/lib/format";

interface ProgressBarProps {
  raised: number;
  goal: number;
  /** Color emphasis. `urgent` uses terra; `default` uses moss. */
  variant?: "default" | "urgent";
  /** Bar thickness in px. */
  thickness?: number;
  /** Class extension on the wrapper. */
  className?: string;
  /** Disable the load animation (useful for SSR-only contexts). */
  animate?: boolean;
}

/**
 * Animated progress bar.
 * The fill scales from 0 to the computed progress on mount using CSS transitions.
 * Falls back gracefully if JS is unavailable.
 */
export default function ProgressBar({
  raised,
  goal,
  variant = "default",
  thickness = 3,
  className = "",
  animate = true,
}: ProgressBarProps) {
  const target = percent(raised, goal);
  const fillRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const fillColor = variant === "urgent" ? "bg-terra" : "bg-moss";

  return (
    <div
      ref={fillRef}
      className={`overflow-hidden rounded-full bg-hair ${className}`}
      style={{ height: thickness }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(target * 100)}
    >
      <div
        className={`h-full origin-left rounded-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] ${fillColor}`}
        style={{
          transform: `scaleX(${mounted ? target : 0})`,
        }}
      />
    </div>
  );
}
