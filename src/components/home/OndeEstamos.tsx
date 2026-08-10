import { ondeEstamos } from "@/content/home";
import { HORARIOS } from "@/lib/nap";
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { FachadaImage } from "./FachadaImage";
import { LazyMap } from "./LazyMap";

/**
 * Onde estamos (PRD §6.1 #6): foto da fachada (generosa) + mapa lazy +
 * endereço + horários + "Como chegar".
 * Foto por prop — trocar quando o cliente enviar o arquivo.
 */
export function OndeEstamos({ fachadaSrc }: { fachadaSrc?: string }) {
  return (
    <Section tone="white" id="onde-estamos">
      <Container>
        <Heading level={2}>{ondeEstamos.h2}</Heading>
        <div className="mt-[var(--space-6)] grid grid-cols-1 gap-[var(--space-6)] lg:grid-cols-2">
          <FachadaImage src={fachadaSrc} tone="light" className="min-h-[280px] w-full lg:min-h-full" />
          <div className="flex flex-col gap-[var(--space-5)]">
            <p className="font-body text-[length:var(--text-md)] font-semibold leading-[var(--leading-normal)] text-heading">
              {ondeEstamos.endereco}
            </p>
            <p className="font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
              {ondeEstamos.texto}
            </p>
            <div>
              <h3 className="font-body text-[length:var(--text-sm)] font-semibold uppercase tracking-[var(--tracking-eyebrow)] text-accent-press">
                {ondeEstamos.horariosTitulo}
              </h3>
              <p className="mt-[var(--space-2)] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
                {HORARIOS.semana}
                <br />
                {HORARIOS.sabado}
                <br />
                {HORARIOS.domingo}
              </p>
            </div>
            <div>
              <Button href={MAPS_DIRECTIONS_URL} variant="secondary" size="lg" target="_blank" rel="noopener">
                {ondeEstamos.cta}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-[var(--space-6)]">
          <LazyMap embedUrl={MAPS_EMBED_URL} endereco={ondeEstamos.endereco} />
        </div>
      </Container>
    </Section>
  );
}
