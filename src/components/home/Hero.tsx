import { hero } from "@/content/home";
import { telUrl, whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DiagonalBars } from "@/components/brand/DiagonalBars";
import { FachadaImage } from "./FachadaImage";

/**
 * Hero da home (PRD §6.1 #2): H1 marca+cidade, subtítulo, 2 CTAs, foto da
 * fachada. Fundo navy (seção de impacto do DS).
 * A imagem chega por prop — trocar o arquivo quando o cliente enviar.
 */
export function Hero({ fachadaSrc }: { fachadaSrc?: string }) {
  return (
    <section className="bg-surface-dark py-[var(--space-8)] lg:py-[var(--space-9)]">
      <Container className="grid grid-cols-1 items-center gap-[var(--space-7)] lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col items-start gap-[var(--space-5)]">
          <DiagonalBars height={44} />
          <h1 className="font-display text-[length:var(--text-2xl)] font-extrabold italic uppercase leading-[var(--leading-tight)] text-on-dark md:text-[length:var(--text-3xl)] lg:text-[length:var(--text-4xl)]">
            {hero.h1}
          </h1>
          <p className="max-w-[460px] font-body text-[length:var(--text-lg)] leading-[var(--leading-normal)] text-muted-on-dark">
            {hero.subtitulo}
          </p>
          <div className="flex flex-wrap gap-[var(--space-4)]">
            <Button
              href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
              size="lg"
              target="_blank"
              rel="noopener"
            >
              {hero.ctaPrimario}
            </Button>
            <Button href={telUrl()} variant="outline-dark" size="lg">
              {hero.ctaSecundario}
            </Button>
          </div>
        </div>
        <FachadaImage src={fachadaSrc} priority className="h-[280px] w-full lg:h-[340px]" />
      </Container>
    </section>
  );
}
