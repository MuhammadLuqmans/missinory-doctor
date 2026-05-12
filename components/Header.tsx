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
    <header className="mx-auto flex max-w-container items-center justify-between px-[clamp(24px,5vw,80px)] py-7">
      <Link href="/" className="font-serif text-2xl leading-none tracking-tight">
        MissionaryDoctors
      </Link>
      <nav className="flex items-center gap-9">
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
                "hidden text-[15.5px] transition-colors md:inline",
                isCurrent ? "text-ink" : "text-ink-2 hover:text-ink",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/needs"
          className="rounded-full bg-ink px-[22px] py-[11px] text-[14.5px] font-medium text-paper transition-colors hover:bg-terra"
        >
          Give
        </Link>
      </nav>
    </header>
  );
}
