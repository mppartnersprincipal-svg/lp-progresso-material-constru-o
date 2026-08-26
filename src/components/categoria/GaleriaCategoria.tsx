import Image from "next/image";
import type { Categoria } from "@/content/categorias";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * "Na loja": fotos reais extras da categoria (retrato 3:4) + parágrafo com
 * as keywords secundárias do grupo de anúncios. Renderiza só para categorias
 * com `galeria` em categorias.ts (hoje: material-eletrico, 26/08/2026).
 * Fica entre "Diferenciais" (claro) e "Orçamento" (claro) — fundo branco
 * para alternar os dois únicos fundos do DS.
 */
export function GaleriaCategoria({ galeria }: { galeria: NonNullable<Categoria["galeria"]> }) {
  return (
    <Section tone="white">
      <Container>
        <div className="max-w-[820px]">
          <Eyebrow>Na loja</Eyebrow>
          <Heading level={2} className="mt-[var(--space-3)]">
            {galeria.titulo}
          </Heading>
          <p className="mt-[var(--space-4)] font-body text-[length:var(--text-lg)] leading-[var(--leading-normal)] text-body">
            {galeria.texto}
          </p>
        </div>
        <div className="mt-[var(--space-6)] grid max-w-[960px] grid-cols-1 gap-[var(--space-4)] sm:grid-cols-2">
          {galeria.imagens.map((img) => (
            <figure key={img.src}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] border border-border-token shadow-sm-brand">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 480px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-[var(--space-2)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-muted">
                {img.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
