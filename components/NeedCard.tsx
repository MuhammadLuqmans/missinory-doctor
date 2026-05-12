import Link from "next/link";
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
      className="group block transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="relative mb-[18px] aspect-[4/3] overflow-hidden rounded-[14px] bg-hair bg-cover bg-center transition-[filter] duration-200 group-hover:brightness-[0.97]"
        style={{ backgroundImage: `url(${need.imageUrl})` }}
      >
        {need.urgent ? (
          <span className="absolute left-[14px] top-[14px] rounded-full bg-paper px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.12em] text-terra">
            {need.urgencyLabel ?? "Urgent"}
          </span>
        ) : null}
      </div>
      <div className="mb-[10px] font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
        {need.location}
      </div>
      <h3 className="mb-[10px] font-serif text-[25px] font-normal leading-[1.18] tracking-tight text-ink">
        {need.title}
      </h3>
      <p className="mb-[22px] text-[16.5px] leading-[1.55] text-ink-2">
        {need.blurb}
      </p>
      <div className="mb-2 flex items-baseline justify-between text-[14.5px] text-ink-2">
        <span>
          <strong className="font-medium text-ink">
            {formatMoney(need.raised)}
          </strong>{" "}
          of {formatMoney(need.goal)}
        </span>
        <span
          className={`font-mono text-[13px] ${
            need.urgent ? "text-terra" : "text-moss"
          }`}
        >
          {pctLabel}
        </span>
      </div>
      <ProgressBar raised={need.raised} goal={need.goal} variant={variant} />
    </Link>
  );
}
