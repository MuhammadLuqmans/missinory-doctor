import Link from "next/link";
import type { HospitalSummary } from "@/lib/types";

interface HospitalCardProps {
  hospital: HospitalSummary;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <Link
      href={`/hospitals/${hospital.slug}`}
      className="group flex h-full flex-col transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="relative mb-[18px] aspect-[4/3] overflow-hidden rounded-[14px] bg-hair bg-cover bg-center transition-[filter] duration-300 group-hover:brightness-[0.97]"
        style={{ backgroundImage: `url(${hospital.imageUrl})` }}
      >
        {hospital.urgentNeeds ? (
          <span className="absolute left-[14px] top-[14px] rounded-full bg-paper px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.12em] text-terra">
            {hospital.urgentNeeds} urgent need
            {hospital.urgentNeeds > 1 ? "s" : ""}
          </span>
        ) : null}
      </div>

      <div className="mb-[10px] font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
        {hospital.location} · {hospital.country}
      </div>
      <h3 className="mb-[10px] font-serif text-[25px] font-normal leading-[1.18] tracking-tight text-ink">
        {hospital.name}
      </h3>
      <p className="mb-[18px] flex-grow text-[16.5px] leading-[1.55] text-ink-2">
        {hospital.blurb}
      </p>

      <div className="mt-auto flex gap-6 border-t border-hair-soft pt-[14px] text-[15px] text-ink-2">
        <div>
          <strong className="mb-[2px] block text-[16px] font-medium text-ink">
            {hospital.beds.toLocaleString()}
          </strong>
          Beds
        </div>
        <div>
          <strong className="mb-[2px] block text-[16px] font-medium text-ink">
            {hospital.founded}
          </strong>
          Founded
        </div>
        <div>
          <strong className="mb-[2px] block text-[16px] font-medium text-terra">
            {hospital.metricValue}
          </strong>
          {hospital.metricLabel}
        </div>
      </div>
    </Link>
  );
}
