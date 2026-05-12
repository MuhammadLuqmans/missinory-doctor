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
    <footer className="border-t border-hair pb-10 pt-[72px]">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 font-serif text-2xl tracking-tight">
              MissionaryDoctors
            </div>
            <p className="max-w-[24ch] font-serif text-2xl font-light italic leading-snug text-ink">
              A catalog of medical mission hospitals worldwide.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-[18px] font-mono text-[13px] font-normal uppercase tracking-[0.14em] text-mute">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-[6px] text-[15.5px] text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-2 border-t border-hair pt-7 text-[13.5px] text-mute sm:flex-row sm:items-center">
          <div>© 2026 Giving Tree Projects · Shreveport, Louisiana</div>
          <div>Powered by Giving Tree Projects</div>
        </div>
      </div>
    </footer>
  );
}
