import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * "O que temos" (PRD §6.2 #5): lista de produtos em colunas no desktop;
 * em mobile vira acordeão (PRD §11.3 — evita rolagem infinita).
 * Sem JS: duas renderizações CSS-controladas (<ul> md+ / <details> mobile).
 */
export function ProdutosLista({ produtos }: { produtos: readonly string[] }) {
  const itens = produtos.map((p) => (
    <li
      key={p}
      className="flex items-start gap-[var(--space-2)] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body"
    >
      <span aria-hidden="true" className="mt-[2px] font-semibold text-accent">
        ›
      </span>
      {p}
    </li>
  ));

  return (
    <Section tone="white">
      <Container>
        <Heading level={2}>O que temos</Heading>
        {/* Desktop/tablet: colunas */}
        <ul className="mt-[var(--space-6)] hidden grid-cols-2 gap-x-[var(--space-6)] gap-y-[var(--space-3)] md:grid lg:grid-cols-3">
          {itens}
        </ul>
        {/* Mobile: acordeão */}
        <details className="group mt-[var(--space-5)] rounded-[var(--radius-lg)] border border-border-token bg-surface-card shadow-sm-brand md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-[var(--space-4)] p-[var(--space-5)] font-body text-[length:var(--text-md)] font-semibold text-heading [&::-webkit-details-marker]:hidden">
            Ver a lista completa
            <span
              aria-hidden="true"
              className="text-accent transition-transform duration-[var(--dur-fast)] ease-[var(--ease-brand)] group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ul className="flex flex-col gap-[var(--space-3)] px-[var(--space-5)] pb-[var(--space-5)]">
            {itens}
          </ul>
        </details>
      </Container>
    </Section>
  );
}
