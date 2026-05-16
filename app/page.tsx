import Link from "next/link";
import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HospitalCard from "@/components/HospitalCard";
import NeedCard from "@/components/NeedCard";
import PhotoFrame from "@/components/PhotoFrame";
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
    num: "For the called",
    title: "Discover your",
    titleEm: "calling",
    body: "Browse sixty-eight Christian mission hospitals worldwide. Read about the work, the people they serve, and the staff needs they carry. Find where you might be sent.",
    href: "/hospitals",
    cta: "Tour the hospitals",
  },
  {
    num: "For donors",
    title: "Fund a",
    titleEm: "need",
    body: "Each hospital writes its own needs. We vet them. You fund a specific line item — a piece of equipment, a residency seat, a building. Funds release on milestones.",
    href: "/needs",
    cta: "See missionary needs",
  },
  {
    num: "For physicians",
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
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-terra/[0.11] via-bone/80 to-paper"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[640px] w-[640px] rounded-full bg-terra/18 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-48 top-1/3 h-[520px] w-[520px] rounded-full bg-moss/14 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-terra/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.027] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(#1F1B14 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="container-page relative py-20 text-center md:py-[104px]">
          <Reveal>
            <div className="mb-8 flex items-center justify-center gap-3">
              {/* <span aria-hidden className="h-px w-12 bg-terra/60" /> */}
              <Eyebrow className="m-0 max-w-measure mx-auto normal-case tracking-[0.12em]">
                Powered by Giving Tree Projects · 501(c)(3)
              </Eyebrow>
              {/* <span aria-hidden className="h-px w-12 bg-terra/60" /> */}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto max-w-[14ch] text-balance font-serif text-[clamp(2.75rem,7.5vw,6.75rem)] font-light leading-[1.03] tracking-[-0.035em] text-ink md:leading-[1.02]">
              Discover your calling.
              <br />
              <em className="italic text-terra">Fund a need.</em>
              <br />
              Go serve.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="prose-measure mx-auto mt-8 text-[clamp(1.0625rem,2.2vw,1.28rem)] font-normal leading-[1.7] tracking-[0.01em] text-ink-2 md:mt-10 md:leading-[1.72]">
              A catalog of Christian medical mission hospitals worldwide. For
              those called to serve, those moved to give.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-11 flex flex-wrap justify-center gap-3">
              <Button href="/hospitals" variant="primary">
                Tour the hospitals
              </Button>
              <Button href="/needs" variant="ghost">
                See missionary needs
              </Button>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-hair pt-11 sm:mt-20 sm:pt-[3.25rem]">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
              {heroStats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  className={[
                    "px-0 text-center sm:px-6 md:px-8",
                    i < heroStats.length - 1
                      ? "sm:border-r sm:border-hair"
                      : "",
                    i === 0 ? "sm:pl-0" : "",
                    i === heroStats.length - 1 ? "sm:pr-0" : "",
                  ].join(" ")}
                >
                  <strong className="mb-3 block font-serif text-[clamp(2.5rem,6vw,3.25rem)] font-light italic leading-none tracking-tight text-ink md:mb-3.5">
                    <CountUp value={stat.value} />
                  </strong>
                  <span className="mx-auto block max-w-[26ch] font-sans text-[15px] font-medium uppercase leading-[1.45] tracking-[0.06em] text-ink-2 md:text-[16px] md:leading-relaxed md:tracking-[0.055em]">
                    {stat.label}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="hospitals"
        className="border-b border-hair bg-bone py-20 md:py-24"
      >
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-hair/80 pb-10">
            <Reveal>
              <p className="mb-3 font-sans font-extrabold text-[12.5px] uppercase tracking-[0.1em] text-ink-2 underline decoration-hair decoration-1 underline-offset-[5px]">
                Chapter 1
              </p>
              <h2 className="max-w-[17ch] text-balance font-serif text-[clamp(2rem,4.8vw,3.75rem)] font-light leading-[1.08] tracking-tight text-ink md:leading-[1.05]">
                Hospitals in the{" "}
                <em className="italic text-terra">network</em>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/hospitals" className="link-chapter group inline-flex items-center gap-2">
                Tour all 68
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-x-10 gap-y-14 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHospitals.map((h, i) => (
              <Reveal key={h.slug} delay={i * 90} className="h-full">
                <HospitalCard hospital={h} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hair bg-bone/40 py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="mb-3 font-sans font-extrabold text-[12.5px] uppercase tracking-[0.1em] text-ink-2 md:text-[13px]">
              Three ways to take part
            </p>
            <h2 className="max-w-[22ch] text-balance font-serif text-[clamp(1.85rem,3.5vw,2.6rem)] font-light leading-[1.15] tracking-tight text-ink md:leading-tight">
              Choose your <em className="italic text-terra">chapter</em>.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:mt-14 md:gap-7 lg:grid-cols-3">
            {paths.map((p, idx) => (
              <Reveal key={p.num} delay={idx * 110} className="h-full">
                <article className="flex h-full min-h-[320px] flex-col rounded-2xl bg-paper p-6 shadow-story-sm transition-shadow duration-300 hover:shadow-story md:p-7 lg:min-h-[340px]">
                  <div className="flex items-center gap-3">
                    <p className="font-sans text-[12.5px] font-extrabold uppercase tracking-[0.09em] text-ink-2 md:text-[13px]">
                      {p.num}
                    </p>
                  </div>

                  <h3 className="mb-5 max-w-[18ch] font-serif border-t border-hair pt-5 text-[clamp(1.65rem,2.8vw,2.15rem)] font-light leading-[1.14] tracking-tight text-ink md:leading-[1.12]">
                    {p.title}{" "}
                    <em className="not-italic text-terra">{p.titleEm}</em>.
                  </h3>

                  <p className="flex-grow text-[17px] leading-[1.74] tracking-[0.011em] text-ink-2 md:text-[1.065rem] md:leading-[1.76]">
                    {p.body}
                  </p>

                  <Link
                    href={p.href}
                    className="link-chapter group mt-8 inline-flex items-center gap-2 border-t border-hair/80 pt-6 md:mt-10 font-bold"
                  >
                    {p.cta}
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="needs"
        className="border-t border-hair bg-paper py-20 md:py-24"
      >
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-hair/80 pb-10">
            <Reveal>
              <p className="mb-3 font-sans font-extrabold text-[12.5px] uppercase tracking-[0.1em] text-ink-2 md:text-[13px]">
                Chapter 2
              </p>
              <h2 className="max-w-[17ch] text-balance font-serif text-[clamp(2rem,4.8vw,3.75rem)] font-light leading-[1.08] tracking-tight text-ink md:leading-[1.05]">
                Active{" "}
                <em className="italic text-terra">missionary needs</em>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/needs" className="link-chapter group inline-flex items-center gap-2">
                See all 15
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-x-10 gap-y-14 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {featuredNeeds.map((need, i) => (
              <Reveal key={need.slug} delay={i * 90} className="h-full">
                <NeedCard need={need} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hair bg-gradient-to-b from-bone via-bone to-paper py-20 md:py-28">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16">
            <Reveal>
              <div className="group">
                <PhotoFrame
                  imageUrl="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=960&q=85&auto=format&fit=crop"
                  aspectClassName="aspect-[4/5] min-h-[280px]"
                  className="lg:max-w-md"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow className="mb-4">From the field</Eyebrow>
              <blockquote className="prose-measure font-serif text-[clamp(1.5rem,3.2vw,2.5rem)] font-light  leading-[1.28] tracking-[-0.01em] text-ink md:leading-[1.32]">
                &ldquo; The cath lab paid for itself in{" "}
                <em className="not-italic text-terra">two weeks</em>. Three
                patients who would have died on the way to Nairobi are alive in
                our follow-up clinic. &rdquo;
              </blockquote>
              <cite className="mt-9 block font-sans text-[12.5px] font-semibold uppercase leading-relaxed tracking-[0.09em] text-ink not-italic md:text-[13px]">
                <strong className="font-semibold text-ink">
                  Dr. James Otieno
                </strong>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> · </span>
                <span className="text-ink-2">Tenwek Hospital, Kenya</span>
              </cite>
              <Link
                href="/news"
                className="link-chapter group mt-10 inline-flex items-center gap-2"
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

      <section className="border-t border-hair bg-paper py-20 text-center md:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="mx-auto max-w-[14ch] text-balance font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-light leading-[1.07] tracking-tight text-ink md:leading-[1.06]">
              Discover your calling.
              <br />
              <em className="italic text-terra">Fund a need.</em>
              <br />
              Go serve.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="prose-measure mx-auto mt-8 text-[1.065rem] font-normal leading-[1.72] tracking-[0.01em] text-ink-2 md:mt-9 md:text-[1.085rem]">
              Browse the network, support a documented need, or take your
              skills to the field.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 md:mt-11">
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
