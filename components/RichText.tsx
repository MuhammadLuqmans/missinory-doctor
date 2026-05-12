interface RichTextProps {
  text: string;
  className?: string;
}

/**
 * Minimal inline formatter: turns `**text**` into <strong>text</strong>.
 * Keeps copy in `data.ts` portable without an MD parser dependency.
 */
export default function RichText({ text, className = "" }: RichTextProps) {
  const parts: (string | { strong: string })[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push({ strong: match[1] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <p className={className}>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <strong key={i} className="font-medium text-ink">
            {p.strong}
          </strong>
        )
      )}
    </p>
  );
}
