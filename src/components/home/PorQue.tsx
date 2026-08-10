import { porQue } from "@/content/home";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Por que a Progresso (PRD §6.1 #5): blocos de diferencial.
 * 3 blocos confirmados — o 4º ("Atendimento de quem conhece obra") depende
 * do TODO [CONFIRMAR] em content/home.ts (anos de operação).
 */
export function PorQue() {
  return (
    <Section tone="light">
      <Container>
        <Heading level={2}>{porQue.h2}</Heading>
        <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-4)] md:grid-cols-3">
          {porQue.blocos.map((b, i) => (
            <Card key={b.titulo}>
              <span
                aria-hidden="true"
                className="font-display text-[length:var(--text-xl)] font-extrabold italic text-accent"
              >
                {i + 1}.
              </span>
              <h3 className="mt-[var(--space-2)] font-display text-[length:var(--text-lg)] font-bold italic uppercase leading-[var(--leading-snug)] text-heading">
                {b.titulo}
              </h3>
              <p className="mt-[var(--space-2)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-body">
                {b.texto}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
