import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NeedsClient from "./NeedsClient";
import { needs } from "@/lib/data";

const heroMeta = [
  { value: "15", label: "Active needs" },
  { value: "$982k", label: "Raised so far" },
  { value: "$1.84M", label: "Still to raise" },
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
        <Eyebrow className="mb-6">Missionary Needs</Eyebrow>
        <h1 className="max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light leading-none tracking-[-0.03em]">
          Real needs.{" "}
          <em className="italic text-terra">Real hospitals.</em>
          <br />
          You see it through.
        </h1>
        <p className="mt-7 max-w-[50ch] text-[20px] leading-[1.55] text-ink-2">
          Each hospital writes the project. We vet it. You fund a specific line
          item. Reports come at every milestone.
        </p>

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

        <div className="mt-11 grid grid-cols-1 gap-5 border-t border-hair pt-7 sm:grid-cols-3 sm:gap-0">
          {heroMeta.map((stat, i) => (
            <div
              key={stat.label}
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
                {stat.value}
              </strong>
              <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <NeedsClient needs={needs} />

      <Footer />
    </>
  );
}
