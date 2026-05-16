import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  type?: never;
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> {
  href?: undefined;
}

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-7 py-4 text-[16px] font-medium transition-colors md:px-8 md:py-[15px]";

const variantStyles: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-terra",
  ghost: "border border-ink text-ink hover:bg-ink hover:text-paper",
};

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `group ${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
        <Arrow />
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } =
    props as NativeButtonProps;
  void _v;
  void _c;
  void _ch;
  void _h;
  return (
    <button className={classes} {...rest}>
      {children}
      <Arrow />
    </button>
  );
}
