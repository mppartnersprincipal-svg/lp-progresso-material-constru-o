import type { ReactNode } from "react";

/**
 * Card do DS: fundo branco, borda --border, sombra sm; hover eleva para md.
 * Cantos firmes (radius-lg 10px) — nunca pill em cards.
 */
export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`bg-surface-card border border-border-token rounded-[var(--radius-lg)] shadow-sm-brand p-[var(--space-5)] ${
        interactive
          ? "transition-shadow duration-[var(--dur-med)] ease-[var(--ease-brand)] hover:shadow-md-brand"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
