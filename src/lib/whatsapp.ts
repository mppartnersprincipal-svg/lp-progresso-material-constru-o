import { NAP } from "./nap";

/**
 * Link wa.me com mensagem pré-preenchida (PRD §10.2).
 * Cada categoria usa sua própria mensagem (qualifica o lead antes da
 * primeira palavra digitada).
 */
export function whatsappUrl(mensagem: string): string {
  return `https://wa.me/${NAP.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagem padrão do botão flutuante (COPY — Elementos globais) */
export const WHATSAPP_MENSAGEM_PADRAO =
  "Olá! Vim pelo site e gostaria de fazer um orçamento.";

export function telUrl(): string {
  return `tel:${NAP.telefoneE164}`;
}
