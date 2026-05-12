"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseInViewOptions {
  /** Margin around the root for triggering. Default delays slightly to feel natural. */
  rootMargin?: string;
  /** Visibility ratio threshold. Default 0.15 = trigger when 15% visible. */
  threshold?: number | number[];
  /** Only fire once and disconnect. Default true (cheaper, no jitter on scroll-up). */
  once?: boolean;
}

/**
 * Lightweight in-view hook. One IntersectionObserver per consumer, but
 * each disconnects itself the moment it fires (when `once` is true),
 * so the steady-state cost on a long page is zero.
 *
 * On environments without IntersectionObserver (very old browsers, SSR
 * during hydration mismatch) we resolve to `true` so content is never
 * stuck hidden.
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  // Keep options stable across renders so the effect doesn't re-subscribe.
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const {
      rootMargin = "0px 0px -8% 0px",
      threshold = 0.15,
      once = true,
    } = optionsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/** Returns true if the user has requested reduced motion. SSR-safe. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}
