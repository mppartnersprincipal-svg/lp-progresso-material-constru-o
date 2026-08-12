import { ctaFinal } from "@/content/home";
import { whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SkewBanner } from "@/components/brand/SkewBanner";

/**
 * CTA final (PRD §6.1 #8): bloco de conversão em banner skewado laranja —
 * uso permitido pelo DS (banners/CTAs, nunca seção inteira).
 * Reutilizado nas páginas de categoria (12/08/2026) com a mensagem de
 * WhatsApp daquela linha via prop.
 */
export function CtaFinal({ mensagem = WHATSAPP_MENSAGEM_PADRAO }: { mensagem?: string }) {
  return (
    <section data-cta="cta-final" className="bg-surface-page pb-[var(--space-9)]">
      <Container>
        <SkewBanner className="px-[var(--space-6)] py-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="flex flex-col items-start justify-between gap-[var(--space-5)] lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-[length:var(--text-xl)] font-extrabold italic uppercase leading-[var(--leading-tight)] text-white lg:text-[length:var(--text-2xl)]">
                {ctaFinal.h2}
              </h2>
              <p className="mt-[var(--space-2)] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-[rgba(255,255,255,.9)]">
                {ctaFinal.texto}
              </p>
            </div>
            <Button
              href={whatsappUrl(mensagem)}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener"
              className="shrink-0"
            >
              {ctaFinal.botao}
            </Button>
          </div>
        </SkewBanner>
      </Container>
    </section>
  );
}
