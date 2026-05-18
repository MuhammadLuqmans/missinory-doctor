import Link from "next/link";
import PhotoFrame from "./PhotoFrame";
import type { HospitalSummary } from "@/lib/types";

interface HospitalCardProps {
  hospital: HospitalSummary;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <Link
      href={`/hospitals/${hospital.slug}`}
      className="group flex h-full flex-col transition-transform duration-200 hover:-translate-y-0.5"
    >
      <PhotoFrame imageUrl={hospital.imageUrl}>
        {hospital.urgentNeeds ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/95 px-3.5 py-2 font-sans text-[12.5px] font-medium uppercase tracking-[0.1em] text-terra shadow-story-sm backdrop-blur-[2px]">
            {hospital.urgentNeeds} urgent need
            {hospital.urgentNeeds > 1 ? "s" : ""}
          </span>
        ) : null}
      </PhotoFrame>

      <div className="mb-2 font-sans text-[12.5px] font-medium uppercase tracking-[0.1em] text-ink-2 md:text-sm">
        {hospital.location} · {hospital.country}
      </div>
      <h3 className="mb-2.5 font-serif text-[clamp(1.35rem,2.2vw,1.6rem)] font-normal leading-snug tracking-tight text-ink">
        {hospital.name}
      </h3>
      <p className="mb-5 flex-grow text-[17px] leading-[1.72] tracking-[0.01em] text-ink-2 md:text-[1.0625rem] md:leading-[1.75]">
        {hospital.blurb}
      </p>

      <div className="mt-auto flex gap-6 border-t border-hair pt-4 text-[15px] leading-snug text-ink-2">
        <div>
          <strong className="mb-0.5 block text-[17px] font-semibold text-ink">
            {hospital.beds.toLocaleString()}
          </strong>
          Beds
        </div>
        <div>
          <strong className="mb-0.5 block text-[17px] font-semibold text-ink">
            {hospital.founded}
          </strong>
          Founded
        </div>
        <div>
          <strong className="mb-0.5 block text-[17px] font-semibold text-terra">
            {hospital.metricValue}
          </strong>
          {hospital.metricLabel}
        </div>
      </div>
    </Link>
  );
}
