/**
 * Barras diagonais /// do símbolo da marca (guidelines/brand-motif).
 * skewX(--skew) = −8°. Máx. 1–2 motivos diagonais por seção.
 */
export function DiagonalBars({
  height = 44,
  count = 3,
}: {
  height?: number;
  count?: 2 | 3;
}) {
  return (
    <div className="flex gap-[6px]" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-[9px] bg-accent [transform:skewX(var(--skew))]"
          style={{ height }}
        />
      ))}
    </div>
  );
}
