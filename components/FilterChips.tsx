"use client";

import { useState } from "react";

interface FilterChipsProps {
  options: string[];
  defaultActive?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
}

export default function FilterChips({
  options,
  defaultActive,
  onChange,
  ariaLabel = "Filter",
}: FilterChipsProps) {
  const [active, setActive] = useState<string>(defaultActive ?? options[0]);

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
            className={[
              "rounded-full px-[18px] py-[9px] text-[14.5px] transition-colors",
              isActive
                ? "bg-ink text-paper"
                : "text-ink-2 hover:text-ink",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
