/**
 * Lista de FAQ em <details> nativo — zero JS, INP intacto.
 * Os itens recebidos aqui devem ser EXATAMENTE os marcados no schema FAQPage
 * da página (marcar pergunta invisível viola diretriz do Google — PRD §8.3-C).
 */
export function FaqList({
  items,
}: {
  items: readonly { pergunta: string; resposta: string }[];
}) {
  return (
    <div className="flex flex-col gap-[var(--space-3)]">
      {items.map((f) => (
        <details
          key={f.pergunta}
          className="group rounded-[var(--radius-lg)] border border-border-token bg-surface-card shadow-sm-brand"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-[var(--space-4)] p-[var(--space-5)] font-body text-[length:var(--text-md)] font-semibold text-heading [&::-webkit-details-marker]:hidden">
            {f.pergunta}
            <span
              aria-hidden="true"
              className="text-accent transition-transform duration-[var(--dur-fast)] ease-[var(--ease-brand)] group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-[var(--space-5)] pb-[var(--space-5)] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
            {f.resposta}
          </p>
        </details>
      ))}
    </div>
  );
}
