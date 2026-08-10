import Image from "next/image";

/**
 * Foto da fachada — recebe a imagem por prop para troca simples quando o
 * arquivo chegar do cliente.
 *
 * TODO: foto da fachada pendente (Foto Fachada/ vazia em 06/08/2026).
 * Quando chegar: salvar em public/images/fachada/fachada.jpg e passar
 * src="/images/fachada/fachada.jpg" nos dois usos (Hero e OndeEstamos).
 * Ver public/images/fachada/LEIA-ME.md. Sem filtros pesados nem overlays
 * escuros que descaracterizem a loja (PRD §3.2).
 */
export const FACHADA_ALT =
  "Fachada da Progresso Materiais de Construção na Av. Graça Aranha, Jardim Nova Era, Aparecida de Goiânia";

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
