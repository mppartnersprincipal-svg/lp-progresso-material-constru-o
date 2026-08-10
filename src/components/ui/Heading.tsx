import type { ReactNode } from "react";

/**
 * Títulos do DS: Kanit itálico uppercase, leading 1.05.
 * Escala desktop: H1 44–60 · H2 32 · H3 24 (guidelines/type-scale).
 * Reduções mobile derivadas da própria escala de tokens
 * (60→32, 44→32, 32→24 — ver docs/decisoes-design.md).
 */
const styles = {
  1: "text-[length:var(--text-2xl)] md:text-[length:var(--text-3xl)] lg:text-[length:var(--text-4xl)] font-extrabold",
  2: "text-[length:var(--text-xl)] md:text-[length:var(--text-2xl)] font-bold",
  3: "text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-bold",
} as const;

export function Heading({
  level,
  children,
  onDark = false,
  className = "",
}: {
  level: 1 | 2 | 3;
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  const Tag = `h${level}` as const;
  const color = onDark ? "text-on-dark" : "text-heading";
  return (
    <Tag
      className={`font-display italic uppercase leading-[var(--leading-tight)] ${styles[level]} ${color} ${className}`}
    >
      {children}
    </Tag>
  );
}
