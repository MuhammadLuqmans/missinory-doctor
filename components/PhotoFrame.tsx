import type { ReactNode } from "react";

interface PhotoFrameProps {
  /** Background image URL (large photos read best at ~900w+). */
  imageUrl: string;
  /** Optional badge / overlay content (position absolute inside). */
  children?: ReactNode;
  /** Aspect ratio wrapper. Default editorial 4:3. */
  aspectClassName?: string;
  className?: string;
}

/**
 * Editorial image treatment: soft depth, inner paper highlight, and a
 * bottom vignette so photography feels intentional — not a raw crop.
 */
export default function PhotoFrame({
  imageUrl,
  children,
  aspectClassName = "aspect-[4/3]",
  className = "",
}: PhotoFrameProps) {
  return (
    <div
      className={`relative mb-5 overflow-hidden rounded-2xl shadow-story-sm ring-1 ring-ink/[0.06] md:mb-6 md:shadow-story ${className}`}
    >
      <div
        className={`${aspectClassName} origin-center bg-cover bg-center transition-[transform,filter] duration-[520ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035] group-hover:brightness-[0.97]`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,251,242,0.28)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-ink/[0.28] via-ink/[0.06] to-transparent"
      />
      {children}
    </div>
  );
}
