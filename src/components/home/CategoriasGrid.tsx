import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { categorias } from "@/content/categorias";
import { gridCategorias } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Grid de categorias (PRD §6.1 #4) — seção mais importante da home.
 * 10 cards com imagem (4:3), nome e link. Enquanto a imagem da categoria não
 * existir em public/images/categorias/{slug}.jpg, renderiza placeholder
 * (checagem em build — página é SSG).
 */
function imagemExiste(src: string): boolean {
  return existsSync(join(process.cwd(), "public", src));
}

export function CategoriasGrid() {
  return (
    <Section tone="white" id="categorias">
      <Container>
        <Heading level={2}>{gridCategorias.h2}</Heading>
        <p className="mt-[var(--space-3)] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
          {gridCategorias.apoio}
        </p>
        <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-4)] sm:grid-cols-2 lg:grid-cols-5">
          {categorias.map((c) => {
            const temImagem = imagemExiste(c.imagem.src);
            return (
              <a
                key={c.slug}
                href={`/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border-token bg-surface-card shadow-sm-brand transition-shadow duration-[var(--dur-med)] ease-[var(--ease-brand)] hover:shadow-md-brand hover:no-underline"
              >
                <div className="relative aspect-[4/3] w-full bg-surface-sunken">
                  {temImagem ? (
                    <Image
                      src={c.imagem.src}
                      alt={c.imagem.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover"
                    />
                  ) : (
                    // TODO: imagem da categoria pendente (Fase 3 — PRD §7).
                    <div className="flex h-full items-center justify-center font-body text-[length:var(--text-xs)] text-gray-700">
                      Imagem em breve
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-[var(--space-2)] p-[var(--space-4)]">
                  <span className="font-display text-[length:var(--text-lg)] font-bold italic uppercase leading-[var(--leading-snug)] text-heading group-hover:text-accent-hover">
                    {c.nome}
                  </span>
                  <span className="font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-muted">
                    {c.cardTexto}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
