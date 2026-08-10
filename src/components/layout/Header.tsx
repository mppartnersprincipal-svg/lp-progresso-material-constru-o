import { NAP } from "@/lib/nap";
import { telUrl, whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * Header fixo (PRD §6.1): logo, telefone clicável, CTA WhatsApp.
 * Em mobile o telefone vira ícone/link compacto — as ações principais
 * ficam na MobileActionBar fixa inferior.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-token bg-surface-card">
      <Container className="flex h-[72px] items-center justify-between gap-[var(--space-4)]">
        <a href="/" className="hover:no-underline" aria-label={NAP.nome}>
          <Wordmark />
        </a>
        <div className="flex items-center gap-[var(--space-4)]">
          <a
            href={telUrl()}
            className="hidden font-body text-[length:var(--text-sm)] font-semibold text-heading sm:inline"
          >
            {NAP.telefoneDisplay}
          </a>
          <Button
            href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
            size="md"
            target="_blank"
            rel="noopener"
          >
            Orçamento no WhatsApp
          </Button>
        </div>
      </Container>
    </header>
  );
}
