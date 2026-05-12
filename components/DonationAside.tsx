"use client";

import { useCallback, useMemo, useState } from "react";
import CountUp from "./CountUp";
import ProgressBar from "./ProgressBar";
import { formatMoney, percentLabel } from "@/lib/format";

interface DonationAsideProps {
  raised: number;
  goal: number;
  donors: number;
  estimatedClose: string;
  /** Preset amounts shown in the grid. */
  presets?: number[];
  /** Initial selected preset. */
  defaultAmount?: number;
  /** Fires whenever the active amount changes (preset, custom, etc.). */
  onSelect?: (amount: number, source: "preset" | "custom") => void;
  /** Fires when the user clicks the Give button. */
  onGive?: (amount: number) => void;
  /** Variant accent. `urgent` uses terra for the progress fill. */
  variant?: "default" | "urgent";
  /** Promise lines shown under the form. */
  promises?: { strong: string; rest: string }[];
}

const defaultPresets = [25, 50, 100, 250, 500, 1000];

const defaultPromises = [
  {
    strong: "100% to the project.",
    rest: "No fees skimmed.",
  },
  {
    strong: "Tax-deductible",
    rest: "through Giving Tree Projects, 501(c)(3).",
  },
  {
    strong: "Funds release on milestones,",
    rest: "not in one block.",
  },
  {
    strong: "You'll see it through.",
    rest: "Reports at every stage.",
  },
];

export default function DonationAside({
  raised,
  goal,
  donors,
  estimatedClose,
  presets = defaultPresets,
  defaultAmount = 100,
  onSelect,
  onGive,
  variant = "default",
  promises = defaultPromises,
}: DonationAsideProps) {
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [customInput, setCustomInput] = useState<string>("");
  const [usingCustom, setUsingCustom] = useState<boolean>(false);

  const handlePresetClick = useCallback(
    (val: number) => {
      setAmount(val);
      setUsingCustom(false);
      setCustomInput("");
      onSelect?.(val, "preset");
      // Demo handler for non-integration phase
      // eslint-disable-next-line no-console
      console.log("[DonationAside] preset selected:", val);
    },
    [onSelect]
  );

  const handleCustomChange = useCallback(
    (raw: string) => {
      const digits = raw.replace(/[^\d]/g, "").slice(0, 7);
      setCustomInput(digits);
      const numeric = digits ? parseInt(digits, 10) : 0;
      if (numeric > 0) {
        setUsingCustom(true);
        setAmount(numeric);
        onSelect?.(numeric, "custom");
        // eslint-disable-next-line no-console
        console.log("[DonationAside] custom amount:", numeric);
      } else {
        setUsingCustom(false);
      }
    },
    [onSelect]
  );

  const handleGiveClick = useCallback(() => {
    if (amount <= 0) return;
    onGive?.(amount);
    // eslint-disable-next-line no-console
    console.log("[DonationAside] give clicked:", amount);
  }, [amount, onGive]);

  const buttonLabel = useMemo(() => {
    if (amount > 0) return `Give ${formatMoney(amount)}`;
    return "Choose an amount";
  }, [amount]);

  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="rounded-[18px] border border-hair bg-bone p-[30px]">
        <div className="mb-2 font-serif text-[48px] font-light leading-none tracking-tight">
          ${" "}
          <em className="not-italic text-terra">
            <CountUp value={raised} duration={1600} />
          </em>
        </div>
        <div className="mb-[18px] text-[15.5px] text-mute">
          raised of{" "}
          <strong className="font-serif text-[17px] font-medium text-ink">
            ${goal.toLocaleString("en-US")}
          </strong>
        </div>

        <ProgressBar
          raised={raised}
          goal={goal}
          variant={variant}
          thickness={5}
          className="mb-[14px]"
        />

        <div className="mb-[22px] flex gap-[22px] border-b border-hair pb-[22px] text-[13.5px] text-mute">
          <div>
            <strong className="mb-[2px] block text-[16px] font-medium text-ink">
              {percentLabel(raised, goal)}
            </strong>
            funded
          </div>
          <div>
            <strong className="mb-[2px] block text-[16px] font-medium text-ink">
              <CountUp value={donors} duration={1200} />
            </strong>
            donors
          </div>
          <div>
            <strong className="mb-[2px] block text-[16px] font-medium text-ink">
              {estimatedClose}
            </strong>
            est. close
          </div>
        </div>

        <div
          id="donate-amount-label"
          className="mb-[10px] text-[14.5px] font-medium text-ink"
        >
          Choose an amount
        </div>

        <div
          className="mb-2 grid grid-cols-3 gap-1.5"
          role="radiogroup"
          aria-labelledby="donate-amount-label"
        >
          {presets.map((preset) => {
            const isActive = !usingCustom && preset === amount;
            return (
              <button
                key={preset}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => handlePresetClick(preset)}
                className={[
                  "rounded-[10px] border px-1 py-[14px] font-serif text-[19px] transition-all",
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-hair bg-paper text-ink hover:border-ink",
                ].join(" ")}
              >
                ${preset.toLocaleString()}
              </button>
            );
          })}
        </div>

        <label
          className={[
            "mb-[14px] flex items-center overflow-hidden rounded-[10px] border bg-paper transition-colors",
            usingCustom ? "border-ink" : "border-hair",
          ].join(" ")}
        >
          <span className="px-[14px] font-serif text-[19px] text-mute">$</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={customInput}
            onChange={(e) => handleCustomChange(e.target.value)}
            placeholder="Other amount"
            aria-label="Custom donation amount in US dollars"
            className="flex-1 bg-transparent py-[13px] font-serif text-[19px] text-ink placeholder:text-mute"
          />
        </label>

        <button
          type="button"
          onClick={handleGiveClick}
          disabled={amount <= 0}
          className="block w-full rounded-[10px] bg-terra px-4 py-[17px] text-center text-[15.5px] font-medium tracking-tight text-bone transition-colors hover:bg-terra-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buttonLabel}
        </button>

        <div className="mt-5 border-t border-hair pt-5">
          {promises.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-[10px] py-1.5 text-[14px] leading-[1.45] text-ink-2"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="mt-[3px] flex-shrink-0"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="6.5"
                  stroke="#3F5E48"
                  strokeWidth="1"
                />
                <path
                  d="M4 7l2.2 2.2L10 5.5"
                  stroke="#3F5E48"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <strong className="font-medium text-ink">{p.strong}</strong>{" "}
                {p.rest}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
