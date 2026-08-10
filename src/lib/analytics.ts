/**
 * Plano de eventos (PRD §10.1) — todos via dataLayer (GTM roteia para GA4 e
 * Google Ads). Cada clique de WhatsApp leva o slug da categoria como
 * parâmetro, para saber qual linha gera mais contato.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type EventoGA =
  | "click_whatsapp"
  | "click_telefone"
  | "envio_formulario"
  | "click_rota"
  | "scroll_75"
  | "view_categoria";

export function pushEvent(evento: EventoGA, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: evento, ...params });
}

/** Slug da categoria a partir do pathname ("/" → "home"). */
export function categoriaAtual(): string {
  if (typeof window === "undefined") return "home";
  const seg = window.location.pathname.replace(/^\/|\/$/g, "");
  return seg === "" ? "home" : seg;
}
