"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "@/lib/useInView";

/**
 * Serializable formatting variants. Strings only — functions can't be
 * passed across the server/client boundary in App Router.
 *  - default: integer with comma separators (e.g. 71,400)
 *  - decimals: respects the `decimals` prop (e.g. 1.84)
 *  - k:       value / 1000, rounded, append "k" (e.g. 982 → 982k)
 *  - m:       value / 1_000_000, 2 decimals, append "M" (e.g. 1840000 → 1.84M)
 */
export type CountUpFormat = "default" | "decimals" | "k" | "m";

interface CountUpProps {
  /** Final numeric value. */
  value: number;
  /** Duration in ms. Default 1400. */
  duration?: number;
  /** Decimals for `formatKind: "decimals"`. */
  decimals?: number;
  /** Prefix string (e.g. "$"). */
  prefix?: string;
  /** Suffix string (e.g. "+"). */
  suffix?: string;
  /** Display format. */
  formatKind?: CountUpFormat;
  /** Class on the wrapping <span>. */
  className?: string;
}

function withCommas(s: string) {
  const [intPart, fracPart] = s.split(".");
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fracPart ? `${grouped}.${fracPart}` : grouped;
}

function renderNumber(n: number, kind: CountUpFormat, decimals: number): string {
  switch (kind) {
    case "k":
      return `${Math.round(n / 1000)}k`;
    case "m":
      return `${(n / 1_000_000).toFixed(2)}M`;
    case "decimals":
      return withCommas(n.toFixed(decimals));
    default:
      return withCommas(String(Math.round(n)));
  }
}

/**
 * Number that counts up from 0 to `value` when scrolled into view.
 * Uses requestAnimationFrame with an ease-out-cubic curve.
 * Honors prefers-reduced-motion by jumping straight to the final value.
 */
export default function CountUp({
  value,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  formatKind = "default",
  className = "",
}: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {renderNumber(display, formatKind, decimals)}
      {suffix}
    </span>
  );
}
