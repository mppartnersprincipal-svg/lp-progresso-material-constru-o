import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Categoria } from "@/content/categorias";

/**
 * Imagem 16:9 do hero de categoria (PRD §7.2). Enquanto o arquivo não existir
 * em public/images/categorias/{slug}.jpg, renderiza placeholder — o build
 * nunca quebra por imagem faltando (checagem em tempo de build, página SSG).
 * TODO: imagens das categorias pendentes (PRD §7 — fotos da loja ou banco livre).
 */
export function CategoriaImagem({
  categoria,
  priority = false,
  className = "",
}: {
  categoria: Pick<Categoria, "imagem" | "nome">;
  priority?: boolean;
  className?: string;
}) {
  const existe = existsSync(join(process.cwd(), "public", categoria.imagem.src));
  if (existe) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-[var(--radius-lg)] ${className}`}>
        <Image
          src={categoria.imagem.src}
          alt={categoria.imagem.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${categoria.imagem.alt} (imagem em breve)`}
      className={`flex aspect-video items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[rgba(244,246,250,.25)] bg-[rgba(244,246,250,.06)] font-body text-[length:var(--text-sm)] font-medium text-muted-on-dark ${className}`}
    >
      Imagem em breve
    </div>
  );
}
