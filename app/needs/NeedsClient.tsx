"use client";

import { useMemo, useState } from "react";
import FilterChips from "@/components/FilterChips";
import NeedCard from "@/components/NeedCard";
import Reveal from "@/components/Reveal";
import type { NeedCardData } from "@/lib/types";

type SortOption =
  | "Most urgent"
  | "Almost funded"
  | "Recently listed"
  | "Largest goal";

const filterOptions = [
  "All",
  "Urgent",
  "Equipment",
  "Construction",
  "Training",
] as const;

type FilterValue = (typeof filterOptions)[number];

function sortBy(list: NeedCardData[], sort: SortOption) {
  const arr = [...list];
  switch (sort) {
    case "Almost funded":
      arr.sort((a, b) => b.raised / b.goal - a.raised / a.goal);
      return arr;
    case "Largest goal":
      arr.sort((a, b) => b.goal - a.goal);
      return arr;
    case "Most urgent":
      arr.sort((a, b) => Number(b.urgent ?? 0) - Number(a.urgent ?? 0));
      return arr;
    default:
      return arr;
  }
}

interface Props {
  needs: NeedCardData[];
}

export default function NeedsClient({ needs }: Props) {
  const [filter, setFilter] = useState<FilterValue>("All");
  const [sort, setSort] = useState<SortOption>("Most urgent");

  const filtered = useMemo(() => {
    let result = needs;
    if (filter === "Urgent") {
      result = result.filter((n) => n.urgent);
    } else if (filter !== "All") {
      result = result.filter((n) => n.category === filter);
    }
    return sortBy(result, sort);
  }, [needs, filter, sort]);

  return (
    <>
      <div className="sticky top-0 z-30 border-b border-hair bg-paper/95 py-[18px] backdrop-blur">
        <div className="container-page flex flex-wrap items-center gap-5">
          <FilterChips
            options={[...filterOptions]}
            defaultActive="All"
            onChange={(v) => setFilter(v as FilterValue)}
            ariaLabel="Filter by category"
          />
          <div className="ml-auto flex items-center gap-2.5 text-[14.5px] text-mute">
            <span>Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="cursor-pointer appearance-none rounded-[6px] border border-hair bg-bone bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2210%22%20height=%226%22%20viewBox=%220%200%2010%206%22%3E%3Cpath%20fill=%22none%22%20stroke=%22%231F1B14%22%20stroke-width=%221.5%22%20d=%22M1%201l4%204%204-4%22/%3E%3C/svg%3E')] bg-[right_10px_center] bg-no-repeat py-2 pl-3 pr-7 text-[14.5px] text-ink"
              aria-label="Sort needs"
            >
              <option>Most urgent</option>
              <option>Almost funded</option>
              <option>Recently listed</option>
              <option>Largest goal</option>
            </select>
          </div>
        </div>
      </div>

      <section className="container-page grid grid-cols-1 items-stretch gap-x-8 gap-y-11 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full -mb-3.5 text-[14.5px] text-mute">
          Showing {filtered.length} of {needs.length} needs
        </div>
        {filtered.map((need, i) => (
          <Reveal
            key={need.slug}
            delay={Math.min(i, 5) * 70}
            className="h-full"
          >
            <NeedCard need={need} />
          </Reveal>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center text-mute">
            <p className="font-serif text-2xl italic">
              No needs match those filters yet.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
