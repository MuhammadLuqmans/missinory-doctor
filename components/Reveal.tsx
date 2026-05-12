"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/useInView";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms. Useful when wrapping siblings in a grid. */
  delay?: number;
  /** Optional className appended to the wrapper. */
  className?: string;
  /** Motion distance in pixels. Default 14. */
  distance?: number;
  /** Animation duration in ms. Default 700. */
  duration?: number;
  /** Direction of entry. Default "up" (children come up into place). */
  from?: "up" | "down" | "none";
}

/**
 * Lightweight viewport-triggered reveal.
 * Uses CSS transitions (GPU-accelerated transform + opacity) gated by
 * IntersectionObserver. Respects `prefers-reduced-motion` automatically
 * via the `motion-reduce:` Tailwind variant.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  distance = 14,
  duration = 700,
  from = "up",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const hiddenTransform =
    from === "none"
      ? "translate3d(0,0,0)"
      : from === "down"
        ? `translate3d(0,-${distance}px,0)`
        : `translate3d(0,${distance}px,0)`;

  return (
    <div
      ref={ref}
      className={[
        "will-change-[opacity,transform] motion-reduce:!translate-y-0 motion-reduce:!opacity-100",
        className,
      ].join(" ")}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0,0,0)" : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.2,0.6,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2,0.6,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
