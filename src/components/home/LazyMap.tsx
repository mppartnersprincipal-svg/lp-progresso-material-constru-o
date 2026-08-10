"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Google Maps com carregamento lazy (PRD §8.5): o iframe SÓ entra ao rolar
 * até o viewport (IntersectionObserver) ou ao clicar no placeholder.
 * Iframe direto no load destrói LCP e INP em mobile.
 * Altura fixa reservada — sem CLS.
 */
export function LazyMap({ embedUrl, endereco }: { embedUrl: string; endereco: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || carregar) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setCarregar(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [carregar]);

  return (
    <div
      ref={ref}
      className="relative h-[320px] w-full overflow-hidden rounded-[var(--radius-lg)] border border-border-token bg-surface-sunken"
    >
      {carregar ? (
        <iframe
          src={embedUrl}
          title="Mapa — Progresso Materiais de Construção"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setCarregar(true)}
          className="absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center gap-[var(--space-3)] font-body text-body"
        >
          <span className="font-semibold text-heading">Ver no mapa</span>
          <span className="max-w-[80%] text-center text-[length:var(--text-sm)] text-gray-700">
            {endereco}
          </span>
          <span className="rounded-[var(--radius-button)] bg-accent px-[22px] py-[11px] font-display-ui text-[14px] font-semibold uppercase tracking-[var(--tracking-caps)] text-white">
            Carregar mapa
          </span>
        </button>
      )}
    </div>
  );
}
