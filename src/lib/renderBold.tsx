import { Fragment, type ReactNode } from "react";

/**
 * Parses `**bold**` markdown-style segments in a plain string into
 * <strong> spans, so copy in data files can carry light emphasis without
 * every section needing to hand-author JSX.
 */
export function renderBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
