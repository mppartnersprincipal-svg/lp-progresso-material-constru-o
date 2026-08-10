import { barraConfianca } from "@/content/home";
import { telUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

/**
 * Barra de confiança (PRD §6.1 #3): faixa horizontal, alto contraste.
 * Navy-900 para destacar da seção hero (navy-800) — dentro dos 2 fundos do DS.
 * O telefone é clicável (PRD §9.6: telefone visível sem rolagem em mobile).
 */
export function TrustBar() {
  return (
    <div className="bg-surface-darker py-[var(--space-3)]">
      <Container className="flex flex-wrap items-center justify-center gap-x-[var(--space-4)] gap-y-[var(--space-1)]">
        {barraConfianca.map((item, i) => (
          <span
            key={item}
            className="flex items-center gap-[var(--space-4)] font-body text-[length:var(--text-sm)] font-semibold text-on-dark"
          >
            {i > 0 && (
              <span aria-hidden="true" className="text-orange-400">
                ·
              </span>
            )}
            {item === "(62) 98517-2398" ? (
              <a href={telUrl()} className="text-on-dark hover:text-orange-400">
                {item}
              </a>
            ) : (
              item
            )}
          </span>
        ))}
      </Container>
    </div>
  );
}
