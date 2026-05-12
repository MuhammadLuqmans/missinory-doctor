import Link from "next/link";
import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HospitalCard from "@/components/HospitalCard";
import NeedCard from "@/components/NeedCard";
import Reveal from "@/components/Reveal";
import { hospitals, needs } from "@/lib/data";

const featuredHospitalSlugs = ["tenwek", "galmi", "loma-de-luz"];
const featuredNeedSlugs = [
  "cholera-response-drc",
  "solar-power-maternity",
  "kapsowar-ultrasound",
];

const heroStats = [
  { value: 68, label: "Hospitals in the network" },
  { value: 41, label: "Countries · Africa, Asia, Americas" },
  { value: 15, label: "Active missionary needs" },
];

const paths = [
  {
    num: "01 · For the called",
    title: "Discover your",
    titleEm: "calling",
    body: "Browse sixty-eight Christian mission hospitals worldwide. Read about the work, the people they serve, and the staff needs they carry. Find where you might be sent.",
    href: "/hospitals",
    cta: "Tour the hospitals",
  },
  {
    num: "02 · For donors",
    title: "Fund a",
    titleEm: "need",
    body: "Each hospital writes its own needs. We vet them. You fund a specific line item — a piece of equipment, a residency seat, a building. Funds release on milestones.",
    href: "/needs",
    cta: "See missionary needs",
  },
  {
    num: "03 · For physicians",
    title: "Go",
    titleEm: "serve",
    body: "Long-term, short-term, or resident electives. We route applications to the hospital and the appropriate sending agency — World Gospel Mission, Serge, PAACS, and others.",
    href: "/apply",
    cta: "Apply to serve",
  },
];

export default function HomePage() {
  const featuredHospitals = featuredHospitalSlugs
    .map((slug) => hospitals.find((h) => h.slug === slug))
    .filter(Boolean) as typeof hospitals;

  const featuredNeeds = featuredNeedSlugs
    .map((slug) => needs.find((n) => n.slug === slug))
    .filter(Boolean) as typeof needs;

  return (
    <>
      <section className="relative overflow-hidden border-b border-hair">
      <Header />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-terra/[0.12] via-bone/70 to-paper"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[640px] w-[640px] rounded-full bg-terra/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-48 top-1/3 h-[520px] w-[520px] rounded-full bg-moss/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-terra/10 blur-3xl"
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

        <div className="container-page relative py-24 text-center md:py-[112px]">
          <Reveal>
            <div className="mb-8 flex items-center justify-center gap-3">
              <span aria-hidden className="h-px w-10 bg-terra/70" />
              <Eyebrow className="m-0 normal-case tracking-[0.18em]">
                Powered by Giving Tree Projects · 501(c)(3)
              </Eyebrow>
              <span aria-hidden className="h-px w-10 bg-terra/70" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto max-w-[14ch] font-serif text-[clamp(48px,7.5vw,108px)] font-light leading-[1.02] tracking-[-0.035em] text-ink">
              Discover your calling.
              <br />
              <em className="italic text-terra">Fund a need.</em>
              <br />
              Go serve.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-9 max-w-[50ch] text-[21px] font-light leading-[1.5] text-ink-2">
              A catalog of Christian medical mission hospitals worldwide. For
              those called to serve, those moved to give.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/hospitals" variant="primary">
                Tour the hospitals
              </Button>
              <Button href="/needs" variant="ghost">
                See missionary needs
              </Button>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-5 border-t border-hair/70 pt-9 sm:grid-cols-3 sm:gap-0">
            {heroStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className={[
                  "px-0 text-center sm:px-8",
                  i < heroStats.length - 1
                    ? "sm:border-r sm:border-hair/70"
                    : "",
                  i === 0 ? "sm:pl-0" : "",
                  i === heroStats.length - 1 ? "sm:pr-0" : "",
                ].join(" ")}
              >
                <strong className="mb-2 block font-serif text-[48px] font-light italic leading-none tracking-tight text-ink">
                  <CountUp value={stat.value} />
                </strong>
                <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-mute">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[88px]">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-8 pb-10">
            <Reveal>
              <h2 className="max-w-[14ch] font-serif text-[clamp(38px,5vw,60px)] font-light leading-none tracking-tight">
                Hospitals in the <em className="italic text-terra">network</em>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="/hospitals"
                className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.15em] text-terra transition-colors hover:text-terra-deep"
              >
                Tour all 68
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHospitals.map((h, i) => (
              <Reveal key={h.slug} delay={i * 90} className="h-full">
                <HospitalCard hospital={h} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[88px]">
        <div className="container-page">
          <div className="grid grid-cols-1 border-y border-hair lg:grid-cols-3">
            {paths.map((p, idx) => (
              <Reveal
                key={p.num}
                delay={idx * 110}
                className={[
                  "flex flex-col py-14",
                  idx < paths.length - 1
                    ? "border-b border-hair lg:border-b-0 lg:border-r"
                    : "",
                  idx === 0 ? "lg:pr-8" : "lg:px-8",
                ].join(" ")}
              >
                <div className="mb-[22px] font-mono text-[13px] uppercase tracking-[0.14em] text-mute">
                  {p.num}
                </div>
                <h3 className="mb-[18px] font-serif text-[36px] font-light italic leading-[1.05] tracking-tight">
                  {p.title}{" "}
                  <em className="not-italic text-terra">{p.titleEm}</em>.
                </h3>
                <p className="mb-6 flex-grow text-[17px] leading-[1.6] text-ink-2">
                  {p.body}
                </p>
                <Link
                  href={p.href}
                  className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.15em] text-terra transition-colors hover:text-terra-deep"
                >
                  {p.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[88px]">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-8 pb-10">
            <Reveal>
              <h2 className="max-w-[14ch] font-serif text-[clamp(38px,5vw,60px)] font-light leading-none tracking-tight">
                Active{" "}
                <em className="italic text-terra">missionary needs</em>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="/needs"
                className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.15em] text-terra transition-colors hover:text-terra-deep"
              >
                See all 15
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {featuredNeeds.map((need, i) => (
              <Reveal key={need.slug} delay={i * 90} className="h-full">
                <NeedCard need={need} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hair bg-bone py-[88px]">
        <div className="container-page">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div
                className="aspect-[4/5] rounded-[18px] bg-hair bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=80&auto=format&fit=crop)`,
                }}
              />
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow className="mb-5">From the field</Eyebrow>
              <blockquote className="max-w-[24ch] font-serif text-[clamp(28px,3.6vw,42px)] font-light italic leading-[1.2] tracking-tight text-ink">
                &ldquo;The cath lab paid for itself in{" "}
                <em className="not-italic text-terra">two weeks</em>. Three
                patients who would have died on the way to Nairobi are alive in
                our follow-up clinic.&rdquo;
              </blockquote>
              <cite className="mt-6 block font-mono text-[13px] uppercase tracking-[0.14em] not-italic text-mute">
                <strong className="font-medium text-ink">
                  Dr. James Otieno
                </strong>{" "}
                · Tenwek Hospital, Kenya
              </cite>
              <Link
                href="/news"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.15em] text-terra transition-colors hover:text-terra-deep"
              >
                More field reports
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hair py-24 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="mx-auto max-w-[14ch] font-serif text-[clamp(40px,5.5vw,72px)] font-light leading-[1.05] tracking-tight">
              Discover your calling.
              <br />
              <em className="italic text-terra">Fund a need.</em>
              <br />
              Go serve.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="/hospitals" variant="primary">
                Tour the hospitals
              </Button>
              <Button href="/needs" variant="ghost">
                See missionary needs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
