"use client";

import { useMemo, useState } from "react";
import FilterChips from "@/components/FilterChips";
import HospitalCard from "@/components/HospitalCard";
import Reveal from "@/components/Reveal";
import type { HospitalSummary } from "@/lib/types";

type SortOption =
  | "Most open roles"
  | "Recently updated"
  | "Alphabetical"
  | "Bed count";

const regionOptions = [
  "All regions",
  "Africa",
  "Asia & ME",
  "Americas",
] as const;

type RegionFilter = (typeof regionOptions)[number];

const regionQuotes: Record<
  Exclude<RegionFilter, "All regions">,
  { quote: string; cite: string }
> = {
  Africa: {
    quote: "“God, send me anywhere, only go with me.”",
    cite: "David Livingstone",
  },
  "Asia & ME": {
    quote: "“Every additional trial was ordered by infinite love and mercy.”",
    cite: "Adoniram Judson",
  },
  Americas: {
    quote: "“He is the Saviour for the young and the old. Lord, here I am.”",
    cite: "Eric Liddell",
  },
};

const regionTotals: Record<
  Exclude<RegionFilter, "All regions">,
  { hospitals: number; countries: number; openRoles: number }
> = {
  Africa: { hospitals: 38, countries: 21, openRoles: 74 },
  "Asia & ME": { hospitals: 14, countries: 10, openRoles: 34 },
  Americas: { hospitals: 15, countries: 9, openRoles: 18 },
};

function matchesSearch(h: HospitalSummary, q: string) {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    h.name.toLowerCase().includes(needle) ||
    h.country.toLowerCase().includes(needle) ||
    h.location.toLowerCase().includes(needle) ||
    h.metricLabel.toLowerCase().includes(needle)
  );
}

function sortBy(list: HospitalSummary[], sort: SortOption) {
  const arr = [...list];
  switch (sort) {
    case "Alphabetical":
      arr.sort((a, b) => a.name.localeCompare(b.name));
      return arr;
    case "Bed count":
      arr.sort((a, b) => b.beds - a.beds);
      return arr;
    case "Most open roles":
      arr.sort((a, b) => {
        const aRoles = parseInt(a.metricValue.replace(/[^\d]/g, ""), 10) || 0;
        const bRoles = parseInt(b.metricValue.replace(/[^\d]/g, ""), 10) || 0;
        return bRoles - aRoles;
      });
      return arr;
    default:
      return arr;
  }
}

interface Props {
  hospitals: HospitalSummary[];
}

export default function HospitalsClient({ hospitals }: Props) {
  const [region, setRegion] = useState<RegionFilter>("All regions");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("Most open roles");

  const filtered = useMemo(() => {
    const byRegion =
      region === "All regions"
        ? hospitals
        : hospitals.filter((h) => h.region === region);
    return sortBy(byRegion.filter((h) => matchesSearch(h, search)), sort);
  }, [hospitals, region, search, sort]);

  const regionsToShow: Exclude<RegionFilter, "All regions">[] =
    region === "All regions"
      ? ["Africa", "Asia & ME", "Americas"]
      : [region];

  return (
    <>
      <div className="sticky top-0 z-30 border-b border-hair bg-paper/95 py-[18px] backdrop-blur">
        <div className="container-page flex flex-wrap items-center gap-5">
          <label className="flex max-w-[340px] flex-1 items-center gap-2.5 rounded-full border border-hair bg-bone px-[18px] py-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5 flex-shrink-0 text-mute"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hospital, country, specialty…"
              className="flex-1 border-0 bg-transparent text-[14.5px] text-ink placeholder:text-mute"
              aria-label="Search hospitals"
            />
          </label>
          <FilterChips
            options={[...regionOptions]}
            defaultActive="All regions"
            onChange={(v) => setRegion(v as RegionFilter)}
            ariaLabel="Filter by region"
          />
          <div className="ml-auto flex items-center gap-2.5 text-[14.5px] text-mute">
            <span>Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="cursor-pointer appearance-none rounded-[6px] border border-hair bg-bone bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2210%22%20height=%226%22%20viewBox=%220%200%2010%206%22%3E%3Cpath%20fill=%22none%22%20stroke=%22%231F1B14%22%20stroke-width=%221.5%22%20d=%22M1%201l4%204%204-4%22/%3E%3C/svg%3E')] bg-[right_10px_center] bg-no-repeat py-2 pl-3 pr-7 text-[14.5px] text-ink"
              aria-label="Sort hospitals"
            >
              <option>Most open roles</option>
              <option>Recently updated</option>
              <option>Alphabetical</option>
              <option>Bed count</option>
            </select>
          </div>
        </div>
      </div>

      {regionsToShow.map((r) => {
        const inRegion = filtered.filter((h) => h.region === r);
        if (inRegion.length === 0) return null;

        const totals = regionTotals[r];
        const quote = regionQuotes[r];

        return (
          <section
            key={r}
            className="container-page pt-12 first:pt-12 md:pt-16"
          >
            <div className="grid items-end gap-6 pb-9 md:grid-cols-2 md:gap-12">
              <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light italic leading-none tracking-tight">
                {r === "Asia & ME" ? (
                  <>
                    Asia &amp; <em className="not-italic text-terra">the Middle East</em>.
                  </>
                ) : r === "Americas" ? (
                  <>
                    The <em className="not-italic text-terra">Americas</em>.
                  </>
                ) : (
                  <>{r}.</>
                )}
              </h2>
              <div className="flex flex-col items-start gap-3.5 md:items-end">
                <p className="max-w-[36ch] font-serif text-[17px] font-light italic leading-[1.4] text-ink-2 md:text-right">
                  {quote.quote}
                </p>
                <div className="font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-mute">
                  {quote.cite}
                </div>
                <div className="mt-1.5 flex flex-wrap gap-[22px] font-sans text-[13px] uppercase tracking-[0.1em] text-mute">
                  <div>
                    <strong className="font-medium text-ink">
                      {totals.hospitals}
                    </strong>{" "}
                    hospitals
                  </div>
                  <div>
                    <strong className="font-medium text-ink">
                      {totals.countries}
                    </strong>{" "}
                    countries
                  </div>
                  <div>
                    <strong className="font-medium text-ink">
                      {totals.openRoles}
                    </strong>{" "}
                    open roles
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-11 pb-12 sm:grid-cols-2 lg:grid-cols-3">
              {inRegion.map((h, i) => (
                <Reveal
                  key={h.slug}
                  delay={Math.min(i, 5) * 70}
                  className="h-full"
                >
                  <HospitalCard hospital={h} />
                </Reveal>
              ))}
            </div>

            <div className="pb-2 text-center font-sans text-[13px] uppercase tracking-[0.12em] text-mute">
              <a
                href="#"
                className="text-terra font-bold transition-colors hover:text-terra-deep"
              >
                Show all {totals.hospitals} hospitals in{" "}
                {r === "Asia & ME" ? "Asia & the Middle East" : r} →
              </a>
            </div>
            <div className="border-hair my-40" />
            
          </section>
        );
      })}

      {filtered.length === 0 && (
        <div className="container-page py-24 text-center text-mute">
          <p className="font-serif text-2xl italic">
            No hospitals match those filters yet.
          </p>
        </div>
      )}

      <div className="h-16" />
    </>
  );
}
