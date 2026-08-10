import type { Categoria } from "@/content/categorias";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Diferenciais específicos da categoria (PRD §6.2 #6): 3 blocos. */
export function DiferenciaisCategoria({
  diferenciais,
}: {
  diferenciais: Categoria["diferenciais"];
}) {
  return (
    <Section tone="light">
      <Container>
        <Heading level={2}>Diferenciais</Heading>
        <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-4)] md:grid-cols-3">
          {diferenciais.map((d) => (
            <Card key={d.titulo}>
              <h3 className="font-display text-[length:var(--text-lg)] font-bold italic uppercase leading-[var(--leading-snug)] text-heading">
                {d.titulo}
              </h3>
              <p className="mt-[var(--space-2)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-body">
                {d.texto}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
