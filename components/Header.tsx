import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

// const navLinks: NavLink[] = [
//   { href: "/about", label: "About" },
//   { href: "/hospitals", label: "Hospital Tours" },
//   { href: "/needs", label: "Missionary Needs" },
//   { href: "/news", label: "News" },
// ];

const navLinks: NavLink[] = [
  { href: "#", label: "About" },
  { href: "/hospitals", label: "Hospital Tours" },
  { href: "#", label: "Missionary Needs" },
  { href: "#", label: "News" },
];

interface HeaderProps {
  current?: "hospitals" | "needs" | "about" | "news";
}

export default function Header({ current }: HeaderProps) {
  return (
    <header className="mx-auto flex max-w-container items-center justify-between px-[clamp(24px,5vw,80px)] py-6 md:py-7">
      <Link
        href="/"
        className="font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] font-normal leading-none tracking-tight text-ink"
      >
        MissionaryDoctors
      </Link>
      <nav className="flex items-center gap-6 md:gap-9">
        {navLinks.map((link) => {
          const isCurrent =
            (current === "hospitals" && link.href === "/hospitals") ||
            (current === "needs" && link.href === "/needs") ||
            (current === "about" && link.href === "/about") ||
            (current === "news" && link.href === "/news");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "hidden text-[16px] font-medium leading-snug transition-colors md:inline",
                isCurrent
                  ? "text-terra underline decoration-hair decoration-2 underline-offset-[10px]"
                  : "text-ink hover:text-ink",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/needs"
          className="rounded-full hover:bg-terra-deep px-5 py-2.5 text-[15px] font-medium text-paper shadow-story-sm transition-colors bg-terra md:px-[22px] md:py-[11px] md:text-[15px]"
        >
          Give
        </Link>
      </nav>
    </header>
  );
}
