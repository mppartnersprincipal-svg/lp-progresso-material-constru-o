import { categorias } from "@/content/categorias";
import { whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * 404 personalizada (PRD §13) com grid das 10 categorias.
 * Copy: COPY-Progresso.md — Elementos globais.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Section tone="light">
          <Container className="flex flex-col items-start gap-[var(--space-5)]">
            <Heading level={1}>Essa página não existe</Heading>
            <p className="max-w-[560px] font-body text-[length:var(--text-lg)] leading-[var(--leading-normal)] text-body">
              Mas o material provavelmente está na loja. Veja as categorias
              abaixo ou chame no WhatsApp.
            </p>
            <Button
              href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
              size="lg"
              target="_blank"
              rel="noopener"
            >
              Fazer orçamento no WhatsApp
            </Button>
            <div className="mt-[var(--space-4)] grid w-full grid-cols-1 gap-[var(--space-4)] sm:grid-cols-2 lg:grid-cols-5">
              {categorias.map((c) => (
                <a
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="group rounded-[var(--radius-lg)] border border-border-token bg-surface-card p-[var(--space-4)] shadow-sm-brand transition-shadow duration-[var(--dur-med)] ease-[var(--ease-brand)] hover:shadow-md-brand hover:no-underline"
                >
                  <span className="font-display text-[length:var(--text-md)] font-bold italic uppercase leading-[var(--leading-snug)] text-heading group-hover:text-accent-hover">
                    {c.nome}
                  </span>
                  <p className="mt-[var(--space-1)] font-body text-[length:var(--text-xs)] leading-[var(--leading-normal)] text-muted">
                    {c.cardTexto}
                  </p>
                </a>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
