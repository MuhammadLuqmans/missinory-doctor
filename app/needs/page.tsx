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

      <section className="relative overflow-hidden border-b border-hair">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-moss/[0.08] via-bone/75 to-paper"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-moss/12 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-terra/14 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(#1F1B14 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="container-page relative py-20 md:py-[88px]">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-moss/50" />
              <Eyebrow className="m-0">Missionary Needs</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light leading-none tracking-[-0.03em] text-ink">
              Real needs.{" "}
              <em className="italic text-terra">Real hospitals.</em>
              <br />
              You see it through.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="prose-measure mt-8 text-[clamp(1.05rem,2vw,1.2rem)] leading-relaxed text-ink-2">
              Each hospital writes the project. We vet it. You fund a specific
              line item. Reports come at every milestone.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col flex-wrap gap-3 font-sans text-[12.5px] font-medium uppercase leading-snug tracking-[0.1em] text-read sm:flex-row sm:gap-0 md:text-sm">
              {heroPromises.map((p, i) => (
                <span
                  key={p}
                  className={[
                    "sm:pr-5",
                    i < heroPromises.length - 1
                      ? "sm:mr-5 sm:border-r sm:border-hair/80"
                      : "",
                  ].join(" ")}
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-hair/80 pt-8 sm:mt-14 sm:grid-cols-3 sm:gap-0 sm:pt-10">
            {heroMeta.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className={[
                  "sm:px-8",
                  i < heroMeta.length - 1
                    ? "sm:border-r sm:border-hair/80"
                    : "",
                  i === 0 ? "sm:pl-0" : "",
                  i === heroMeta.length - 1 ? "sm:pr-0" : "",
                ].join(" ")}
              >
                <strong className="mb-2 block font-serif text-[clamp(2rem,5vw,2.5rem)] font-normal italic leading-none tracking-tight text-ink">
                  <CountUp
                    value={stat.value}
                    formatKind={stat.formatKind}
                    prefix={stat.prefix}
                  />
                </strong>
                <span className="font-sans text-[12.5px] font-medium uppercase tracking-[0.1em] text-read md:text-sm">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NeedsClient needs={needs} />

      <Footer />
    </>
  );
}
