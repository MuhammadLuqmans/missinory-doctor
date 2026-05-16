interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`font-sans text-[13.5px] font-medium uppercase leading-snug tracking-[0.11em] text-ink-2 md:text-[14px] ${className}`}
    >
      {children}
    </div>
  );
}
