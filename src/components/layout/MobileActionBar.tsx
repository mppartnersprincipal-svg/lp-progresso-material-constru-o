import { telUrl, whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";

/**
 * Barra fixa inferior em mobile (PRD §11.1/§11.3): [Ligar] | [WhatsApp].
 * Área de toque ≥48px. Some em telas md+.
 */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Ações rápidas"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border-token bg-surface-card shadow-lg-brand md:hidden"
    >
      <a
        href={telUrl()}
        className="flex min-h-14 items-center justify-center gap-2 font-display text-[length:var(--text-sm)] font-semibold uppercase tracking-[var(--tracking-caps)] text-heading hover:no-underline"
      >
        Ligar
      </a>
      <a
        href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
        target="_blank"
        rel="noopener"
        className="flex min-h-14 items-center justify-center gap-2 bg-accent font-display text-[length:var(--text-sm)] font-semibold uppercase tracking-[var(--tracking-caps)] text-white transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover hover:text-white hover:no-underline"
      >
        WhatsApp
      </a>
    </nav>
  );
}
