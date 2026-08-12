import type { Categoria } from "@/content/categorias";
import { Container } from "@/components/ui/Container";
import { CtaPair } from "@/components/ui/CtaPair";
import { DiagonalBars } from "@/components/brand/DiagonalBars";
import { CategoriaImagem } from "./CategoriaImagem";

/**
 * Hero da categoria (PRD §6.2 #3): H1 = keyword + cidade, imagem 16:9,
 * CTA WhatsApp com a mensagem pré-preenchida DAQUELA linha.
 */
export function CategoriaHero({ categoria }: { categoria: Categoria }) {
  return (
    <section className="bg-surface-dark py-[var(--space-8)] lg:py-[var(--space-9)]">
      <Container className="grid grid-cols-1 items-center gap-[var(--space-7)] lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col items-start gap-[var(--space-5)]">
          <DiagonalBars height={44} />
          <h1 className="font-display text-[length:var(--text-2xl)] font-extrabold italic uppercase leading-[var(--leading-tight)] text-on-dark md:text-[length:var(--text-3xl)] lg:text-[length:var(--text-4xl)]">
            {categoria.h1}
          </h1>
          <p className="max-w-[460px] font-body text-[length:var(--text-lg)] leading-[var(--leading-normal)] text-muted-on-dark">
            {categoria.heroSubtitulo}
          </p>
          <CtaPair mensagem={categoria.mensagemWhatsApp} tone="dark" origem="hero" />
        </div>
        <CategoriaImagem categoria={categoria} priority />
      </Container>
    </section>
  );
}
