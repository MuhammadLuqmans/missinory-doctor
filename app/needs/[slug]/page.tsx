import Link from "next/link";
import { notFound } from "next/navigation";
import DonationAside from "@/components/DonationAside";
import Eyebrow from "@/components/Eyebrow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RichText from "@/components/RichText";
import {
  getHospital,
  getNeedDetail,
  needDetails,
} from "@/lib/data";
import { formatMoney } from "@/lib/format";

export function generateStaticParams() {
  return Object.keys(needDetails).map((slug) => ({ slug }));
}

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps) {
  const need = getNeedDetail(params.slug);
  if (!need) return {};
  const title = need.titleHighlight
    ? `${need.title} ${need.titleHighlight}`
    : need.title;
  return {
    title: `${title} — A missionary need — MissionaryDoctors`,
    description: need.lede,
  };
}

export default function NeedDetailPage({ params }: PageProps) {
  const need = getNeedDetail(params.slug);
  if (!need) notFound();

  const hospital = getHospital(need.hospitalSlug);
  const variant = need.urgent ? "urgent" : "default";

  return (
    <>
      <Header current="needs" />

      <div className="mx-auto max-w-container px-[clamp(24px,5vw,80px)] pt-6">
        <Link
          href="/needs"
          className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.15em] text-mute transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> All missionary needs
        </Link>
      </div>

      <section className="container-page pb-12 pt-8">
        <Eyebrow className="mb-6">
          A missionary need · {need.category} · {need.hospitalLocation} ·{" "}
          {need.hospitalCountry}
        </Eyebrow>
        <h1 className="mb-7 max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light italic leading-none tracking-[-0.03em]">
          {need.title}{" "}
          {need.titleHighlight ? (
            <em className="not-italic text-terra">{need.titleHighlight}</em>
          ) : null}
          .
        </h1>
        <p className="max-w-[54ch] text-[21px] font-light leading-[1.5] text-ink-2">
          {need.lede}
        </p>
      </section>

      <div className="container-page">
        <div
          className="aspect-[21/9] rounded-[18px] bg-hair bg-cover bg-center"
          style={{ backgroundImage: `url(${need.heroImageUrl})` }}
        />
      </div>

      <div className="container-page">
        <div className="grid gap-12 py-[72px] lg:grid-cols-[1fr_380px] lg:gap-[72px] lg:py-[88px]">
          <main className="space-y-16">
            <section>
              <Eyebrow className="mb-5">Why this</Eyebrow>
              <p className="mb-7 max-w-[48ch] font-serif text-[24px] font-light italic leading-[1.4] text-ink">
                {need.whyHeadline}
              </p>
              {need.whyParagraphs.map((p, i) => (
                <RichText
                  key={i}
                  text={p}
                  className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2"
                />
              ))}
            </section>

            <section className="border-t border-hair pt-16">
              <Eyebrow className="mb-5">Where the money goes</Eyebrow>
              <h2 className="mb-6 max-w-[22ch] font-serif text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] tracking-tight">
                Every <em className="italic">line</em>.
              </h2>
              {need.budgetNote ? (
                <p className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
                  {need.budgetNote}
                </p>
              ) : null}

              <div className="mt-7">
                {need.budget.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-[18px] border-b border-hair-soft py-[18px]"
                  >
                    <div className="font-serif text-[19px] font-normal text-ink">
                      {item.name}
                      <small className="mt-[3px] block font-sans text-[14.5px] font-normal text-mute">
                        {item.detail}
                      </small>
                    </div>
                    <div className="text-right font-serif text-[19px] font-normal text-ink">
                      {formatMoney(item.amount)}
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-[1fr_auto] items-baseline gap-[18px] border-t-2 border-ink pt-6">
                  <div className="font-serif text-[21px] font-normal italic text-ink">
                    Total
                  </div>
                  <div className="text-right font-serif text-[26px] font-normal italic text-terra">
                    {formatMoney(need.budgetTotal)}
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-hair pt-16">
              <Eyebrow className="mb-5">How it ships</Eyebrow>
              <h2 className="mb-6 max-w-[22ch] font-serif text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] tracking-tight">
                Funds release on <em className="italic">milestones</em>.
              </h2>
              <p className="max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
                Each milestone has a deliverable that triggers the next
                disbursement.
              </p>

              <div className="relative mt-7">
                <div className="absolute bottom-2 left-[7px] top-2 w-px bg-hair" />
                {need.timeline.map((step) => (
                  <div
                    key={`${step.date}-${step.title}`}
                    className="relative pb-7 pl-9 last:pb-0"
                  >
                    <span
                      className={[
                        "absolute left-0 top-[7px] h-[14px] w-[14px] rounded-full border-[1.5px]",
                        step.state === "done"
                          ? "border-moss bg-moss"
                          : step.state === "current"
                            ? "border-terra bg-terra shadow-[0_0_0_4px_rgba(177,74,44,0.18)]"
                            : "border-hair bg-paper",
                      ].join(" ")}
                    />
                    <div className="mb-1.5 font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                      {step.date}
                    </div>
                    <div className="mb-1.5 font-serif text-[20px] font-normal leading-[1.3] text-ink">
                      {step.title}
                    </div>
                    <div className="max-w-[50ch] text-[16px] leading-[1.6] text-ink-2">
                      {step.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-hair pt-16">
              <Eyebrow className="mb-5">Updates from the field</Eyebrow>
              <h2 className="mb-6 max-w-[22ch] font-serif text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] tracking-tight">
                What the <em className="italic">hospital</em> is telling us.
              </h2>

              {need.updates.map((update, i) => (
                <article
                  key={`${update.date}-${i}`}
                  className="border-b border-hair-soft py-7 last:border-b-0"
                >
                  <div className="mb-3 font-mono text-[13px] uppercase tracking-[0.1em] text-mute">
                    {update.date}
                  </div>
                  <h3 className="mb-3.5 font-serif text-[23px] font-normal leading-[1.25] text-ink">
                    {update.title}
                  </h3>
                  {update.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mb-3.5 max-w-[60ch] text-[17px] leading-[1.6] text-ink-2"
                    >
                      {p}
                    </p>
                  ))}
                  {update.photoUrl ? (
                    <div
                      className="my-3.5 aspect-[16/9] rounded-[10px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${update.photoUrl})` }}
                    />
                  ) : null}
                  <div className="mt-4 flex items-center gap-2.5 text-[14.5px] text-mute">
                    —{" "}
                    <strong className="font-medium text-ink">
                      {update.author}
                    </strong>
                    , {update.role}
                  </div>
                </article>
              ))}

              <Link
                href="#"
                className="mt-6 inline-block font-mono text-[13px] uppercase tracking-[0.15em] text-terra transition-colors hover:text-terra-deep"
              >
                All updates →
              </Link>
            </section>

            {hospital ? (
              <section className="border-t border-hair pt-16">
                <Eyebrow className="mb-5">The hospital</Eyebrow>
                <h2 className="mb-6 max-w-[22ch] font-serif text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] tracking-tight">
                  {need.hospitalName.split(" ")[0]}{" "}
                  <em className="italic">
                    {need.hospitalName.split(" ").slice(1).join(" ")}
                  </em>
                  .
                </h2>

                <div className="mt-7 grid grid-cols-1 items-center gap-6 rounded-[14px] border border-hair bg-bone p-6 sm:grid-cols-[140px_1fr]">
                  <div
                    className="aspect-[16/9] w-full rounded-[10px] bg-hair bg-cover bg-center sm:aspect-square"
                    style={{ backgroundImage: `url(${hospital.imageUrl})` }}
                  />
                  <div>
                    <h4 className="mb-1 font-serif text-[22px] font-normal leading-tight tracking-tight">
                      {hospital.name}
                    </h4>
                    <div className="mb-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-mute">
                      {hospital.location}, {hospital.country} · Founded{" "}
                      {hospital.founded} · {hospital.beds} beds
                    </div>
                    <p className="text-[16px] leading-[1.55] text-ink-2">
                      {hospital.blurb}
                    </p>
                    <Link
                      href={`/hospitals/${hospital.slug}`}
                      className="mt-3 inline-block font-mono text-[13px] uppercase tracking-[0.15em] text-terra transition-colors hover:text-terra-deep"
                    >
                      Tour the hospital →
                    </Link>
                  </div>
                </div>
              </section>
            ) : null}

            <section className="border-t border-hair pt-16">
              <Eyebrow className="mb-5">Common questions</Eyebrow>
              <h2 className="mb-6 max-w-[22ch] font-serif text-[clamp(32px,4.5vw,48px)] font-light leading-[1.1] tracking-tight">
                Things <em className="italic">worth asking</em>.
              </h2>
              <FAQ items={need.faqs} />
            </section>
          </main>

          <DonationAside
            raised={need.raised}
            goal={need.goal}
            donors={need.donors}
            estimatedClose={need.estimatedClose}
            variant={variant}
            defaultAmount={100}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
