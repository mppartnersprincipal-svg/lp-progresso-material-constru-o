import type { ReactNode } from "react";

/** Label em caixa alta espaçada (guidelines/type-eyebrow): Barlow 600 12px, tracking .18em. */
export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  /** accent = laranja (padrão) · muted = cinza · on-dark = laranja-400 sobre navy */
  tone?: "accent" | "muted" | "on-dark";
}) {
  // accent usa orange-700 (--accent-press) em fundo claro: o orange-500 tem
  // contraste 3.0:1 sobre branco e falha WCAG AA em texto de 12px
  // (decisão D13 em docs/decisoes-design.md — valor da própria escala do DS)
  const color =
    tone === "muted"
      ? "text-muted"
      : tone === "on-dark"
        ? "text-orange-400"
        : "text-accent-press";
  return (
    <div
      className={`font-body text-[length:var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-eyebrow)] ${color}`}
    >
      {children}
    </div>
  );
}
