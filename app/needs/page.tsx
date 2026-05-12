import CountUp from "@/components/CountUp";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import NeedsClient from "./NeedsClient";
import { needs } from "@/lib/data";

import type { CountUpFormat } from "@/components/CountUp";

interface HeroMetaItem {
  value: number;
  label: string;
  formatKind?: CountUpFormat;
  prefix?: string;
}

const heroMeta: HeroMetaItem[] = [
  { value: 15, label: "Active needs" },
  { value: 982000, label: "Raised so far", formatKind: "k", prefix: "$" },
  { value: 1_840_000, label: "Still to raise", formatKind: "m", prefix: "$" },
];

const heroPromises = [
  "Tax-deductible 501(c)(3)",
  "100% to the project",
  "Reports at every milestone",
];

export const metadata = {
  title: "Missionary Needs — MissionaryDoctors",
  description:
    "Each hospital writes the project. We vet it. You fund a specific line item. Reports come at every milestone.",
};

export default function NeedsPage() {
  return (
    <>
      <Header current="needs" />

      <section className="container-page border-b border-hair py-20 md:py-[80px]">
        <Reveal>
          <Eyebrow className="mb-6">Missionary Needs</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light leading-none tracking-[-0.03em]">
            Real needs.{" "}
            <em className="italic text-terra">Real hospitals.</em>
            <br />
            You see it through.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-7 max-w-[50ch] text-[20px] leading-[1.55] text-ink-2">
            Each hospital writes the project. We vet it. You fund a specific
            line item. Reports come at every milestone.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-7 flex flex-col flex-wrap gap-2 font-mono text-[13px] uppercase tracking-[0.12em] text-ink-2 sm:flex-row sm:gap-0">
            {heroPromises.map((p, i) => (
              <span
                key={p}
                className={[
                  "sm:pr-[18px]",
                  i < heroPromises.length - 1
                    ? "sm:mr-[18px] sm:border-r sm:border-hair"
                    : "",
                ].join(" ")}
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-5 border-t border-hair pt-7 sm:grid-cols-3 sm:gap-0">
          {heroMeta.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className={[
                "sm:px-8",
                i < heroMeta.length - 1
                  ? "sm:border-r sm:border-hair"
                  : "",
                i === 0 ? "sm:pl-0" : "",
                i === heroMeta.length - 1 ? "sm:pr-0" : "",
              ].join(" ")}
            >
              <strong className="mb-2 block font-serif text-[38px] font-normal italic leading-none tracking-tight text-ink">
                <CountUp
                  value={stat.value}
                  formatKind={stat.formatKind}
                  prefix={stat.prefix}
                />
              </strong>
              <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <NeedsClient needs={needs} />

      <Footer />
    </>
  );
}
