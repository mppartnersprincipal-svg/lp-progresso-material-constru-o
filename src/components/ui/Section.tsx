import type { ReactNode } from "react";

/**
 * Seção com os dois únicos fundos permitidos pelo DS: claro (padrão) e navy
 * (impacto). Laranja nunca como fundo de seção inteira. Respiro vertical
 * 64–128px (space-8 a space-10); padrão 64px mobile / 96px desktop.
 */
export function Section({
  tone = "light",
  children,
  className = "",
  id,
}: {
  tone?: "light" | "white" | "dark";
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const bg =
    tone === "dark"
      ? "bg-surface-dark"
      : tone === "white"
        ? "bg-surface-card"
        : "bg-surface-page";
  return (
    <section
      id={id}
      className={`${bg} py-[var(--space-8)] lg:py-[var(--space-9)] ${className}`}
    >
      {children}
    </section>
  );
}
