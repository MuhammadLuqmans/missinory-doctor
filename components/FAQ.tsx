"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

interface FAQProps {
  items: FaqItem[];
}

/**
 * Smooth-animating accordion.
 * Uses `grid-template-rows` from 0fr → 1fr so each panel animates by its
 * natural height (no max-height guessing).
 */
export default function FAQ({ items }: FAQProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(
    () =>
      new Set(items.flatMap((item, i) => (item.defaultOpen ? [i] : [])))
  );

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="mt-7">
      {items.map((item, i) => {
        const open = openSet.has(i);
        return (
          <div
            key={`${item.question}-${i}`}
            className="border-t border-hair-soft last:border-b"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-[21px] font-normal text-ink"
            >
              <span>{item.question}</span>
              <span className="relative h-[18px] w-[18px] flex-shrink-0">
                <span className="absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-ink" />
                <span
                  className={[
                    "absolute bottom-0 left-1/2 top-0 w-[1.5px] -translate-x-1/2 bg-ink transition-transform duration-300",
                    open ? "scale-y-0" : "scale-y-100",
                  ].join(" ")}
                />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[60ch] pb-6 text-[17px] leading-[1.7] text-ink-2">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
