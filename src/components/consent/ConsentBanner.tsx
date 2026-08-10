"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "progresso-consent-lgpd";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function consentUpdate(granted: boolean) {
  const w = window as Window;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    (w.dataLayer as unknown[]).push(args);
  }
  const status = granted ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: status,
    analytics_storage: status,
    ad_user_data: status,
    ad_personalization: status,
  });
}

/**
 * Banner LGPD + Consent Mode v2 (PRD §10.2):
 * - opção real de recusa;
 * - default "denied" já setado antes (Gtm.tsx) — aqui só atualiza no aceite;
 * - overlay em CAMADA FIXA (position: fixed) → zero CLS por definição;
 * - em mobile fica acima da barra [Ligar | WhatsApp];
 * - não é intersticial: não cobre o conteúdo na chegada (PRD §9.6).
 */
export function ConsentBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo === "granted") {
      consentUpdate(true);
    } else if (salvo === null) {
      setVisivel(true);
    }
  }, []);

  if (!visivel) return null;

  function decidir(granted: boolean) {
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    if (granted) consentUpdate(true);
    setVisivel(false);
  }

  return (
    <div
      role="region"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-14 z-[60] border-t border-border-token bg-surface-card p-[var(--space-4)] shadow-lg-brand md:bottom-0"
    >
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-start gap-[var(--space-3)] px-[var(--space-2)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-body">
          Usamos cookies para medir o desempenho do site e dos anúncios. Você
          pode aceitar ou recusar. Detalhes na{" "}
          <a href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-[var(--space-3)]">
          <button
            type="button"
            onClick={() => decidir(false)}
            className="cursor-pointer rounded-[var(--radius-button)] border border-border-strong bg-transparent px-[22px] py-[11px] font-display-ui text-[14px] font-semibold uppercase tracking-[var(--tracking-caps)] text-heading transition-colors duration-[var(--dur-fast)] hover:bg-gray-100"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decidir(true)}
            className="cursor-pointer rounded-[var(--radius-button)] bg-accent px-[22px] py-[11px] font-display-ui text-[14px] font-semibold uppercase tracking-[var(--tracking-caps)] text-white transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
