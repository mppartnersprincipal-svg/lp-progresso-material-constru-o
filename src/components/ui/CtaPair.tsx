import { ctaGlobal } from "@/content/home";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";
import { Button } from "./Button";

/**
 * Par de CTAs global (COPY — Elementos globais): primário WhatsApp +
 * secundário Ligar. Fonte única dos rótulos em content/home.ts (ctaGlobal).
 * Usado no hero da home, no hero de categoria e ao fim de "O que temos".
 */
export function CtaPair({
  mensagem,
  tone = "light",
  origem,
  className = "",
}: {
  /** Mensagem pré-preenchida do WhatsApp (por categoria ou padrão) */
  mensagem: string;
  /** dark = seção navy (botão Ligar outline-dark) · light = seção clara */
  tone?: "dark" | "light";
  /** Origem do clique nos eventos de analytics (ex.: "hero") */
  origem: string;
  className?: string;
}) {
  return (
    <div data-cta={origem} className={`flex flex-wrap gap-[var(--space-4)] ${className}`}>
      <Button href={whatsappUrl(mensagem)} size="lg" target="_blank" rel="noopener">
        {ctaGlobal.primario}
      </Button>
      <Button href={telUrl()} variant={tone === "dark" ? "outline-dark" : "outline"} size="lg">
        {ctaGlobal.secundario}
      </Button>
    </div>
  );
}
