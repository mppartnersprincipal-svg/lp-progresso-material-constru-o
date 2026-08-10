import type { Metadata } from "next";
import { whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Página de confirmação do formulário (PRD §4). noindex — também bloqueada
 * no robots.txt. Copy: COPY-Progresso.md — Elementos globais.
 */
export const metadata: Metadata = {
  title: "Pedido recebido | Progresso Materiais de Construção",
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <>
      <Header />
      <main>
        <Section tone="light" className="min-h-[60vh]">
          <Container className="flex max-w-[720px] flex-col items-start gap-[var(--space-5)]">
            <Heading level={1}>Pedido recebido</Heading>
            <p className="font-body text-[length:var(--text-lg)] leading-[var(--leading-normal)] text-body">
              Respondemos no seu WhatsApp em breve, dentro do horário de
              funcionamento da loja.
            </p>
            <Button
              href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
              size="lg"
              target="_blank"
              rel="noopener"
            >
              Falar agora no WhatsApp
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
