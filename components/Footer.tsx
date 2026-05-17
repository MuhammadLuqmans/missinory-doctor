import Link from "next/link";

interface FooterColumn {
  title: string;
  links: { href: string; label: string }[];
}

const columns: FooterColumn[] = [
  {
    title: "Discover",
    links: [
      { href: "/hospitals", label: "Hospital tours" },
      { href: "/needs", label: "Missionary needs" },
      { href: "/news", label: "News & field reports" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Take part",
    links: [
      { href: "/apply", label: "Apply to serve" },
      { href: "/give-monthly", label: "Give monthly" },
      { href: "/for-hospitals", label: "For hospitals" },
      { href: "/newsletter", label: "Newsletter" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/financials", label: "Financials" },
      { href: "/501c3", label: "501(c)(3) status" },
      { href: "/privacy", label: "Privacy" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t  border-hair   max-w-[100vw] overflow-hidden">
      
      <div className="container-page relative pb-10 pt-[72px]">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 font-serif text-2xl tracking-tight">
              MissionaryDoctors
            </div>
            <p className="max-w-[26ch] font-serif text-[clamp(1.25rem,2.4vw,1.5rem)] font-light italic leading-snug text-ink">
              A catalog of medical mission hospitals worldwide.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.11em] text-ink-2">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-1.5 text-[16px] leading-snug text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-hair pt-8 text-[14px] leading-relaxed text-ink-2 sm:flex-row sm:items-center">
          <div>© 2026 Giving Tree Projects · Shreveport, Louisiana</div>
          <div>Powered by Giving Tree Projects</div>
        </div>
      {/* <div
  aria-hidden
  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1612] via-[#2A241E]/95 to-[#3B332B]/80"
  /> */}

<div
  aria-hidden
  className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-terra/20 blur-3xl"
/>

<div
  aria-hidden
  className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-moss/15 blur-3xl"
/>

<div
  aria-hidden
  className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
  style={{
    backgroundImage:
    "radial-gradient(#F5E6D3 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  }}
/>
  </div>
    </footer>
  );
}
