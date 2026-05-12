interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`font-mono text-[13px] uppercase tracking-[0.16em] text-mute ${className}`}
    >
      {children}
    </div>
  );
}
