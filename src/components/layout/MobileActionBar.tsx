import { NAP } from "@/lib/nap";
import { telUrl, whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";

/**
 * Barra fixa inferior em mobile (PRD §11.1/§11.3): [Ligar] | [WhatsApp].
 * Área de toque ≥48px. Some em telas md+.
 * `mensagem`: nas páginas de categoria, receber a mensagem daquela linha —
 * é o CTA mais tocado no mobile e não pode desqualificar o lead (SXO 12/08).
 */
export function MobileActionBar({
  mensagem = WHATSAPP_MENSAGEM_PADRAO,
}: {
  mensagem?: string;
}) {
  return (
    <nav
      aria-label="Ações rápidas"
      data-cta="barra-mobile"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border-token bg-surface-card shadow-lg-brand md:hidden"
    >
      {/* Número no rótulo: o telefone fica visível sem rolagem mesmo com o
          banner de consentimento aberto sobre o hero (PRD §9.6) */}
      <a
        href={telUrl()}
        className="flex min-h-14 flex-col items-center justify-center font-display-ui font-semibold uppercase tracking-[var(--tracking-caps)] text-heading hover:no-underline"
      >
        <span className="text-[length:var(--text-sm)] leading-[var(--leading-snug)]">Ligar</span>
        <span className="font-body text-[length:var(--text-xs)] font-semibold normal-case tracking-normal leading-[var(--leading-snug)]">
          {NAP.telefoneDisplay}
        </span>
      </a>
      <a
        href={whatsappUrl(mensagem)}
        target="_blank"
        rel="noopener"
        className="flex min-h-14 items-center justify-center gap-2 bg-accent font-display-ui text-[length:var(--text-sm)] font-semibold uppercase tracking-[var(--tracking-caps)] text-white transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover hover:text-white hover:no-underline"
      >
        WhatsApp
      </a>
    </nav>
  );
}
