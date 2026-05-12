import Link from "next/link";
import { notFound } from "next/navigation";
import CountUp from "@/components/CountUp";
import Eyebrow from "@/components/Eyebrow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import {
  getHospital,
  getHospitalDetail,
  hospitals,
  tenwekActiveNeeds,
} from "@/lib/data";
import { formatMoney, percentLabel } from "@/lib/format";

export function generateStaticParams() {
  return hospitals.map((h) => ({ slug: h.slug }));
}

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps) {
  const hospital = getHospital(params.slug);
  if (!hospital) return {};
  return {
    title: `${hospital.name} — Hospital Tours — MissionaryDoctors`,
    description: hospital.blurb,
  };
}

export default function HospitalDetailPage({ params }: PageProps) {
  const hospital = getHospital(params.slug);
  if (!hospital) notFound();

  // Fallback: only Tenwek has rich content; other hospitals show summary view.
  const detail = getHospitalDetail(hospital.slug);

  return (
    <>
      <Header current="hospitals" />

      <div className="mx-auto max-w-container px-[clamp(24px,5vw,80px)] pt-6">
        <Link
          href="/hospitals"
          className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.15em] text-mute transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> All hospital tours
        </Link>
      </div>

      <section className="container-page pb-14 pt-8">
        <Reveal>
          <Eyebrow className="mb-7">
            {hospital.location} · {hospital.country}
            {detail
              ? ` · Africa Gospel Church · Founded ${hospital.founded}`
              : ` · Founded ${hospital.founded}`}
          </Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mb-8 max-w-[18ch] font-serif text-[clamp(52px,8vw,108px)] font-light italic leading-none tracking-[-0.03em]">
            {hospital.name.replace(/ Hospital$/, "")}{" "}
            {hospital.name.endsWith(" Hospital") && (
              <em className="not-italic text-terra">Hospital</em>
            )}
            .
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="max-w-[54ch] text-[21px] font-light leading-[1.5] text-ink-2">
            {hospital.blurb}
          </p>
        </Reveal>
      </section>

      <div className="container-page">
        <Reveal delay={220}>
          <div
            className="aspect-[21/9] rounded-[18px] bg-hair bg-cover bg-center"
            style={{ backgroundImage: `url(${hospital.imageUrl})` }}
          />
        </Reveal>
      </div>

      <div className="container-page">
        <div className="grid gap-14 py-14 lg:grid-cols-[1fr_380px] lg:gap-20 lg:py-20">
          <main className="space-y-16">
            {detail ? (
              <DetailedHospital detail={detail} />
            ) : (
              <FallbackHospital
                location={hospital.location}
                country={hospital.country}
                founded={hospital.founded}
                beds={hospital.beds}
              />
            )}
          </main>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[18px] border border-hair bg-bone p-[30px]">
              <h4 className="mb-5 font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-mute">
                At a glance
              </h4>
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3.5 text-[16px]">
                {(detail?.glance ?? [
                  { key: "Country", value: hospital.country },
                  { key: "Location", value: hospital.location },
                  { key: "Founded", value: String(hospital.founded) },
                  { key: "Beds", value: String(hospital.beds) },
                  { key: "Region", value: hospital.region },
                ]).map((g) => (
                  <div key={g.key} className="contents">
                    <dt className="pt-1 font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                      {g.key}
                    </dt>
                    <dd className="leading-[1.5] text-ink">{g.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-[18px] bg-ink p-[30px] text-paper">
              <h4 className="mb-[18px] font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-terra">
                Get involved
              </h4>
              <div className="mb-[26px] font-serif text-[26px] font-light italic leading-[1.2] tracking-tight">
                For those{" "}
                <em className="not-italic text-terra">called to serve</em>.
              </div>
              <Link
                href="/apply"
                className="block rounded-[10px] bg-terra px-4 py-4 text-center text-[15.5px] font-medium text-bone transition-colors hover:bg-terra-deep"
              >
                Apply to serve
              </Link>
              <Link
                href="/needs"
                className="mt-2.5 block rounded-[10px] border border-paper/30 px-4 py-3.5 text-center text-[14.5px] text-paper transition-colors hover:border-paper/55 hover:bg-paper/10"
              >
                Fund a missionary need
              </Link>
              <div className="mt-5 border-t border-paper/20 pt-5 text-[14px] leading-[1.55] text-paper/80">
                Applications routed to the appropriate sending agency. Average
                response: <strong className="font-medium text-paper">2 days</strong>.
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}

function DetailedHospital({
  detail,
}: {
  detail: NonNullable<ReturnType<typeof getHospitalDetail>>;
}) {
  return (
    <>
      <Reveal>
        <section>
          <Eyebrow className="mb-5">Origin &amp; mission</Eyebrow>
          <p className="mb-7 max-w-[48ch] font-serif text-[25px] font-light italic leading-[1.4] text-ink">
            “{detail.motto}”
          </p>
          {detail.origin.map((p, i) => (
            <p
              key={i}
              className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2"
            >
              {p}
            </p>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">The hospital</Eyebrow>
          <div className="mt-8 grid gap-3 sm:grid-cols-[1.4fr_1fr_1fr] sm:grid-rows-[280px_280px]">
            {detail.galleryUrls.slice(0, 5).map((url, i) => (
              <div
                key={url}
                className={[
                  "overflow-hidden rounded-[14px] bg-hair bg-cover bg-center transition-transform duration-500 hover:scale-[1.012]",
                  i === 0 ? "sm:row-span-2" : "aspect-[4/3] sm:aspect-auto",
                ].join(" ")}
                style={{ backgroundImage: `url(${url})` }}
              />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Capacity &amp; technology</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          On the <em className="italic">campus</em>.
        </h2>
        <p className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
          {detail.capacityIntro}
        </p>

        <div className="my-8 grid grid-cols-1 border-y border-hair sm:grid-cols-3">
          {detail.bigNumbers.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 110}
              className={[
                "py-7",
                i < detail.bigNumbers.length - 1
                  ? "border-b border-hair sm:border-b-0 sm:border-r"
                  : "",
                i === 0 ? "sm:pr-6" : "sm:px-6",
              ].join(" ")}
            >
              <strong className="mb-2.5 block font-serif text-[52px] font-light italic leading-none tracking-tight text-ink">
                <CountUp
                  value={n.value}
                  formatKind={n.formatKind}
                  suffix={n.suffix}
                />
              </strong>
              <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-mute">
                {n.label}
              </span>
            </Reveal>
          ))}
        </div>

          <InfoList items={detail.capacityInfo} />
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Services</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          What the hospital <em className="italic">offers</em>.
        </h2>
        <p className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
          {detail.servicesIntro}
        </p>

        <div className="mt-8 grid grid-cols-1 border-t border-hair-soft sm:grid-cols-2">
          {detail.services.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3.5 border-b border-hair-soft py-5 font-serif text-[20px] font-normal text-ink"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-moss" />
              {s}
            </div>
          ))}
        </div>

        <div className="mt-8 font-mono text-[13px] uppercase tracking-[0.14em] text-mute">
          Outpatient clinics
        </div>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {detail.outpatientTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-hair bg-bone px-[18px] py-2.5 text-[15px] text-ink-2"
            >
              {t}
            </span>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Training &amp; education</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          A <em className="italic">teaching hospital</em>.
        </h2>
        {detail.trainingParagraphs.map((p, i) => (
          <RichText
            key={i}
            text={p}
            className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2"
          />
        ))}
          <InfoList items={detail.trainingInfo} />
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Where we need volunteers</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          Active <em className="italic">staff needs</em>.
        </h2>
        <p className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
          {detail.needsParagraph}
        </p>

        <div className="mt-8 grid grid-cols-1 border-t border-hair-soft sm:grid-cols-2">
          {detail.staffNeeds.map((n) => (
            <div
              key={n}
              className="flex items-center gap-[18px] border-b border-hair-soft py-6"
            >
              <span className="block h-2 w-2 flex-shrink-0 rounded-full bg-terra" />
              <span className="font-serif text-[22px] font-normal tracking-tight text-ink">
                {n}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-start gap-[18px] rounded-[14px] border border-hair bg-bone p-[26px]">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink font-serif text-base italic text-ink">
            i
          </span>
            <RichText
              text={detail.tracksNote}
              className="m-0 max-w-none text-[16.5px] leading-[1.6] text-ink-2"
            />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">
            Open missionary needs · {tenwekActiveNeeds.length} active
          </Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          Active <em className="italic">projects</em>.
        </h2>
        <p className="mb-7 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
          {detail.hospitalNeedsIntro}
        </p>

        <div>
          {tenwekActiveNeeds.map((n) => (
            <Link
              key={n.slug}
              href={`/needs/${n.slug}`}
              className="grid grid-cols-[90px_1fr] items-center gap-4 border-b border-hair-soft py-6 transition-[padding-left] duration-200 hover:pl-2 sm:grid-cols-[110px_1fr_200px_130px] sm:gap-7"
            >
              <div
                className="aspect-[4/3] w-full rounded-[10px] bg-hair bg-cover bg-center"
                style={{ backgroundImage: `url(${n.imageUrl})` }}
              />
              <div>
                <h4 className="mb-1.5 font-serif text-[20px] font-normal leading-[1.25] tracking-tight">
                  {n.title}
                </h4>
                <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                  {n.category}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:pl-0">
                <div className="mb-2 flex justify-between text-[14.5px] text-ink-2">
                  <span>
                    <strong className="font-medium text-ink">
                      {formatMoney(n.raised)}
                    </strong>{" "}
                    raised
                  </span>
                  <span>{percentLabel(n.raised, n.goal)}</span>
                </div>
                <ProgressBar raised={n.raised} goal={n.goal} />
              </div>
              <div className="col-span-2 text-right font-serif text-[20px] italic text-ink sm:col-span-1">
                {formatMoney(n.goal)}
                <small className="mt-0.5 block font-mono text-[13px] not-italic tracking-wider text-mute">
                  total goal
                </small>
              </div>
            </Link>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Living at {detail.glance.find(g => g.key === "Town")?.value.split(" ")[0] ?? "the hospital"}</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          Practical <em className="italic">information</em>.
        </h2>

        <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-hair bg-bone sm:grid-cols-2">
          {detail.logistics.map((cell, i) => (
            <div
              key={cell.title}
              className={[
                "p-[30px]",
                i % 2 === 0 ? "sm:border-r sm:border-hair" : "",
                i < detail.logistics.length - 2 ? "border-b border-hair" : "",
              ].join(" ")}
            >
              <h5 className="mb-3.5 font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-terra">
                {cell.title}
              </h5>
              <RichText
                text={cell.body}
                className="m-0 max-w-none text-[16.5px] leading-[1.65] text-ink-2"
              />
            </div>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Sending agencies</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          Who <em className="italic">routes</em> here.
        </h2>
        <p className="mb-7 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
          Long-term placements typically go through a sending organization. We
          help match physicians to the right one based on denomination, support
          model, and the role.
        </p>

        <div className="grid grid-cols-2 overflow-hidden rounded-[14px] border border-hair bg-bone sm:grid-cols-4">
          {detail.agencies.map((a, i) => (
            <div
              key={a.name}
              className={[
                "px-4 py-8 text-center",
                i < detail.agencies.length - 1
                  ? "border-r border-hair last:border-r-0"
                  : "",
                i < 2 ? "border-b border-hair sm:border-b-0" : "",
              ].join(" ")}
            >
              <div className="mb-2 font-serif text-[26px] font-light italic tracking-tight text-ink">
                {a.name}
              </div>
              <div className="font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                {a.desc}
              </div>
            </div>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Spiritual life &amp; community</Eyebrow>
        <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
          More than a <em className="italic">hospital</em>.
        </h2>
          {detail.spiritualParagraphs.map((p, i) => (
            <RichText
              key={i}
              text={p}
              className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2"
            />
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-hair pt-16">
          <Eyebrow className="mb-5">Common questions</Eyebrow>
          <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
            Honest <em className="italic">answers</em>.
          </h2>
          <FAQ items={detail.faqs} />
        </section>
      </Reveal>
    </>
  );
}

function FallbackHospital({
  location,
  country,
  founded,
  beds,
}: {
  location: string;
  country: string;
  founded: number;
  beds: number;
}) {
  return (
    <section>
      <Eyebrow className="mb-5">Overview</Eyebrow>
      <h2 className="mb-7 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.1] tracking-tight">
        About this <em className="italic">hospital</em>.
      </h2>
      <p className="max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
        Founded in {founded} in {location}, {country}. A {beds}-bed mission
        hospital serving the region with a full slate of inpatient and
        outpatient services.
      </p>
      <p className="mt-4 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
        A full hospital profile — gallery, training, sending agencies, FAQs —
        is being prepared. In the meantime, visit{" "}
        <Link
          href="/hospitals/tenwek"
          className="text-terra underline-offset-4 hover:underline"
        >
          Tenwek Hospital
        </Link>{" "}
        to see the full hospital tour template.
      </p>
    </section>
  );
}

function InfoList({
  items,
}: {
  items: { key: string; value: string }[];
}) {
  return (
    <div className="mt-6 grid grid-cols-1">
      {items.map((it) => (
        <div
          key={it.key}
          className="grid items-baseline gap-1.5 border-b border-hair-soft py-[18px] last:border-b-0 sm:grid-cols-[200px_1fr] sm:gap-6"
        >
          <div className="pt-0.5 font-mono text-[13px] uppercase tracking-[0.12em] text-mute">
            {it.key}
          </div>
          <div className="text-[17px] leading-[1.6] text-ink">{it.value}</div>
        </div>
      ))}
    </div>
  );
}
