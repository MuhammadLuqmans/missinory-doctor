import Link from "next/link";
import PhotoFrame from "./PhotoFrame";
import ProgressBar from "./ProgressBar";
import { formatMoney, percentLabel } from "@/lib/format";
import type { NeedCardData } from "@/lib/types";

interface NeedCardProps {
  need: NeedCardData;
}

export default function NeedCard({ need }: NeedCardProps) {
  const pctLabel = percentLabel(need.raised, need.goal);
  const variant = need.urgent ? "urgent" : "default";

  return (
    <Link
      href={`/needs/${need.slug}`}
      className="group flex h-full flex-col transition-transform duration-200 hover:-translate-y-0.5"
    >
      <PhotoFrame imageUrl={need.imageUrl}>
        {need.urgent ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/95 px-3.5 py-2 font-sans text-[12.5px] font-medium uppercase tracking-[0.1em] text-terra shadow-story-sm backdrop-blur-[2px]">
            {need.urgencyLabel ?? "Urgent"}
          </span>
        ) : null}
      </PhotoFrame>

      <div className="mb-2 font-sans text-[12.5px] font-medium uppercase tracking-[0.1em] text-ink-2 md:text-[13px]">
        {need.location}
      </div>
      <h3 className="mb-2.5 font-serif text-[clamp(1.35rem,2.2vw,1.6rem)] font-normal leading-snug tracking-tight text-ink">
        {need.title}
      </h3>
      <p className="mb-6 flex-grow text-[17px] leading-[1.72] tracking-[0.01em] text-ink-2 md:text-[1.0625rem] md:leading-[1.75]">
        {need.blurb}
      </p>

      <div className="mt-auto">
        <div className="mb-2.5 flex items-baseline justify-between gap-3 text-[15px] text-ink-2">
          <span className="min-w-0">
            <strong className="font-semibold text-ink">
              {formatMoney(need.raised)}
            </strong>{" "}
            <span className="text-read">of {formatMoney(need.goal)}</span>
          </span>
          <span
            className={`shrink-0 font-sans text-[12.5px] font-medium uppercase tracking-[0.08em] md:text-[13px] ${
              need.urgent ? "text-terra" : "text-moss"
            }`}
          >
            {pctLabel}
          </span>
        </div>
        <ProgressBar raised={need.raised} goal={need.goal} variant={variant} />
      </div>
    </Link>
  );
}
