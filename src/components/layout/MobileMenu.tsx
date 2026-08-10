"use client";

import { useState, type ReactNode } from "react";

/**
 * Menu hambúrguer mobile. Wrapper client mínimo: os links chegam prontos do
 * servidor (children) — categorias.ts não entra no bundle do cliente.
 * Fecha ao tocar em qualquer link do painel.
 */
export function MobileMenu({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        onClick={() => setAberto(!aberto)}
        className="flex h-12 w-12 cursor-pointer items-center justify-center text-heading"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {aberto ? (
            <>
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>
      {aberto ? (
        <div
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-72px-56px)] overflow-y-auto border-b border-border-token bg-surface-card shadow-lg-brand"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setAberto(false);
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
