import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HospitalsClient from "./HospitalsClient";
import { hospitals } from "@/lib/data";

const heroMeta = [
  { value: "68", label: "Active partners" },
  { value: "41", label: "Countries" },
  { value: "128", label: "Open volunteer roles" },
];

export const metadata = {
  title: "Hospital Tours — MissionaryDoctors",
  description:
    "From 800-bed teaching hospitals to single-physician rural clinics — every one a Christian mission, every one open to volunteer physicians.",
};

export default function HospitalsPage() {
  return (
    <>
      <Header current="hospitals" />

      <section className="container-page border-b border-hair py-20 md:py-[80px]">
        <Eyebrow className="mb-6">Hospital Tours</Eyebrow>
        <h1 className="max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light leading-none tracking-[-0.03em]">
          Sixty-eight hospitals.
          <br />
          <em className="italic text-terra">Forty-one</em> countries.
        </h1>
        <p className="mt-7 max-w-[54ch] text-[20px] leading-[1.55] text-ink-2">
          From 800-bed teaching hospitals to single-physician rural clinics —
          every one a Christian mission, every one open to volunteer physicians.
        </p>

        <div className="mt-11 grid grid-cols-1 gap-5 border-t border-hair pt-7 sm:grid-cols-3 sm:gap-0">
          {heroMeta.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "pb-0 sm:px-8",
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

      <HospitalsClient hospitals={hospitals} />

      <Footer />
    </>
  );
}
