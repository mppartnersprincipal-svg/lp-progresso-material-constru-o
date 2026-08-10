import type { ReactNode } from "react";

/**
 * Banner em paralelogramo (guidelines/brand-motif): fundo laranja skewado −8°,
 * conteúdo contra-skewado +8° para ficar reto. Uso pontual — banners e CTAs,
 * nunca fundo de seção inteira.
 */
export function SkewBanner({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-accent [transform:skewX(var(--skew))] rounded-[var(--radius-sm)] px-[var(--space-6)] py-[var(--space-5)] ${className}`}
    >
      <div className="[transform:skewX(8deg)]">{children}</div>
    </div>
  );
}
