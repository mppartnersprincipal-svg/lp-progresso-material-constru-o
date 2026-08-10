import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Botão do DS (components/core/Button.jsx + kit de landing):
 * pill (--radius-button), Kanit 600 uppercase tracking .04em,
 * hover escurece 1 passo, press 2 passos, transição 120ms ease-brand.
 * CTA primário do projeto = laranja --accent (decisão do usuário, 06/08/2026 —
 * o "verde" do PRD §11.1 foi descartado; DS vence).
 * Tamanho lg garante área de toque ≥48px (PRD §11.3).
 */
type Variant = "primary" | "secondary" | "outline" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover active:bg-accent-press border border-transparent hover:no-underline hover:text-white",
  secondary:
    "bg-surface-dark text-on-dark hover:bg-navy-700 active:bg-navy-900 border border-transparent hover:no-underline hover:text-on-dark",
  outline:
    "bg-transparent text-heading border border-border-strong hover:bg-gray-100 active:bg-gray-200 hover:no-underline hover:text-heading",
  "outline-dark":
    "bg-transparent text-on-dark border border-[rgba(244,246,250,.35)] hover:bg-[rgba(244,246,250,.08)] active:bg-[rgba(244,246,250,.16)] hover:no-underline hover:text-on-dark",
  ghost:
    "bg-transparent text-accent-hover border border-transparent hover:bg-accent-soft active:bg-orange-100 hover:no-underline",
};

const sizes: Record<Size, string> = {
  sm: "px-[14px] py-[7px] text-[13px]",
  md: "px-[22px] py-[11px] text-[14px]",
  lg: "px-[28px] py-[14px] text-[16px] min-h-12",
};

const base =
  "inline-flex items-center justify-center gap-2 font-display-ui font-semibold uppercase tracking-[var(--tracking-caps)] rounded-[var(--radius-button)] cursor-pointer transition-colors duration-[var(--dur-fast)] ease-[var(--ease-brand)] disabled:cursor-not-allowed disabled:opacity-50";

type ButtonAsButton = { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...rest
}: {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
} & (ButtonAsButton | ButtonAsLink)) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;
  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as ButtonAsLink;
    return (
      <a href={href} className={cls} {...anchor}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
