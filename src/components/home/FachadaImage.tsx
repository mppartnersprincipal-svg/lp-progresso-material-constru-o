import Image from "next/image";

/**
 * Foto da fachada — recebe a imagem por prop (Hero e OndeEstamos).
 * Foto real do cliente em public/images/fachada/fachada.jpg (12/08/2026).
 * Sem filtros pesados nem overlays escuros que descaracterizem a loja
 * (PRD §3.2). O placeholder abaixo permanece como fallback de src ausente.
 */
export const FACHADA_ALT =
  "Fachada da Progresso Materiais de Construção na Av. Graça Aranha, Jardim Nova Era, Aparecida de Goiânia";

/**
 * Retrato 1164×1351 — para caixas altas (coluna do OndeEstamos).
 * Versão com qualidade aumentada (upscale IA da foto real do cliente),
 * aprovada pelo usuário em 12/08/2026.
 */
export const FACHADA_RETRATO = "/images/fachada/fachada.jpg";

/**
 * Recorte 16:9 1164×655 (letreiro + frente da loja) — para caixas paisagem
 * (hero, LCP: evita baixar/decodificar a metade retrato que o object-cover
 * descartaria) e para o og:image.
 */
export const FACHADA_PAISAGEM = "/images/fachada/fachada-og.jpg";

export function FachadaImage({
  src,
  priority = false,
  className = "",
  tone = "dark",
}: {
  src?: string;
  priority?: boolean;
  className?: string;
  /** Ajusta o placeholder ao fundo da seção (dark = hero navy, light = seção clara) */
  tone?: "dark" | "light";
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-[var(--radius-lg)] ${className}`}>
        <Image
          src={src}
          alt={FACHADA_ALT}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  // Placeholder temporário (padrão do kit do DS para imagem pendente)
  const toneCls =
    tone === "dark"
      ? "border-[rgba(244,246,250,.25)] bg-[rgba(244,246,250,.06)] text-muted-on-dark"
      : "border-border-strong bg-surface-sunken text-gray-700";
  return (
    <div
      role="img"
      aria-label={`${FACHADA_ALT} (foto em breve)`}
      className={`flex items-center justify-center rounded-[var(--radius-lg)] border border-dashed font-body text-[length:var(--text-sm)] font-medium ${toneCls} ${className}`}
    >
      Foto da fachada (aguardando cliente)
    </div>
  );
}
