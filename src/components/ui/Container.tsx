import type { ReactNode } from "react";

/** Container do DS: max 1140px (--container-max), gutter lateral 24px (space-5). */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--space-5)] ${className}`}
    >
      {children}
    </div>
  );
}
