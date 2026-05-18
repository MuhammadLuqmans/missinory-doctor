import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="container-page py-32 text-center">
        <div className="font-sans text-sm uppercase tracking-[0.16em] text-mute">
          404
        </div>
        <h1 className="mx-auto mt-6 max-w-[18ch] font-serif text-[clamp(48px,7vw,96px)] font-light leading-none tracking-[-0.03em]">
          We can&apos;t find <em className="italic text-terra">that page</em>.
        </h1>
        <p className="mx-auto mt-7 max-w-[54ch] text-[20px] leading-[1.55] text-ink-2">
          The page may have moved, or perhaps you followed a link that&apos;s
          gone stale. Start from the hospitals or needs index.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/hospitals"
            className="rounded-full bg-ink px-7 py-[15px] text-[15.5px] font-medium text-paper transition-colors hover:bg-terra"
          >
            Tour the hospitals
          </Link>
          <Link
            href="/needs"
            className="rounded-full border border-ink px-7 py-[15px] text-[15.5px] font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            See missionary needs
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
