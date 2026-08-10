import type { ReactNode } from "react";

/** Badge/tag: único uso permitido de pill fora de botões (DS radius-borders). */
export function Badge({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "neutral";
}) {
  const colors =
    tone === "accent"
      ? "bg-orange-100 text-accent-press"
      : "bg-surface-sunken text-body";
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-pill)] px-[var(--space-3)] py-[var(--space-1)] font-body text-[length:var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-caps)] ${colors}`}
    >
      {children}
    </span>
  );
}
