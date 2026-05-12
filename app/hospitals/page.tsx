import CountUp from "@/components/CountUp";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import HospitalsClient from "./HospitalsClient";
import { hospitals } from "@/lib/data";

const heroMeta = [
  { value: 68, label: "Active partners" },
  { value: 41, label: "Countries" },
  { value: 128, label: "Open volunteer roles" },
];

export const metadata = {
  title: "Hospital Tours — MissionaryDoctors",
  description:
    "From 800-bed teaching hospitals to single-physician rural clinics — every one a Christian mission, every one open to volunteer physicians.",
};

export default function HospitalsPage() {
  return (
    <>
      <section className="relative overflow-hidden ">
      <Header current="hospitals" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-terra/[0.10] via-bone/70 to-paper"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-terra/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-moss/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(#1F1B14 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="container-page relative py-20 md:py-[88px]">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              {/* <span aria-hidden className="h-px w-10 bg-terra/70" /> */}
              <Eyebrow className="m-0">Hospital Tours</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light leading-none tracking-[-0.03em] text-ink">
              Sixty-eight hospitals.
              <br />
              <em className="italic text-terra">Forty-one</em> countries.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-[54ch] text-[20px] leading-[1.55] text-ink-2">
              From 800-bed teaching hospitals to single-physician rural clinics
              — every one a Christian mission, every one open to volunteer
              physicians.
            </p>
          </Reveal>

          <div className="mt-11 grid grid-cols-1 gap-5 border-t border-hair/70 pt-7 sm:grid-cols-3 sm:gap-0">
            {heroMeta.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className={[
                  "pb-0 sm:px-8",
                  i < heroMeta.length - 1
                    ? "sm:border-r sm:border-hair/70"
                    : "",
                  i === 0 ? "sm:pl-0" : "",
                  i === heroMeta.length - 1 ? "sm:pr-0" : "",
                ].join(" ")}
              >
                <strong className="mb-2 block font-serif text-[38px] font-normal italic leading-none tracking-tight text-ink">
                  <CountUp value={stat.value} />
                </strong>
                <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

      </section>
      <HospitalsClient hospitals={hospitals} />
      <Footer />
    </>
  );
}
