import { getCategoria } from "@/content/categorias";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * "Também temos" (PRD §6.2 #10): links para 2–3 categorias correlatas
 * (pares definidos no PRD §4.2 — hub-and-spoke, distribui autoridade).
 */
export function TambemTemos({ correlatas }: { correlatas: readonly string[] }) {
  const cats = correlatas
    .map((slug) => getCategoria(slug))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);
  if (cats.length === 0) return null;
  return (
    <Section tone="white">
      <Container>
        <Heading level={2}>Também temos</Heading>
        <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-4)] sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}`}
              className="group rounded-[var(--radius-lg)] border border-border-token bg-surface-card p-[var(--space-5)] shadow-sm-brand transition-shadow duration-[var(--dur-med)] ease-[var(--ease-brand)] hover:shadow-md-brand hover:no-underline"
            >
              <span className="font-display text-[length:var(--text-lg)] font-bold italic uppercase leading-[var(--leading-snug)] text-heading group-hover:text-accent-hover">
                {c.nome}
              </span>
              <p className="mt-[var(--space-2)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-muted">
                {c.cardTexto}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
