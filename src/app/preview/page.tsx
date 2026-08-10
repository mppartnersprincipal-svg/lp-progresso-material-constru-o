import type { Metadata } from "next";
import { categorias } from "@/content/categorias";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { DiagonalBars } from "@/components/brand/DiagonalBars";
import { SkewBanner } from "@/components/brand/SkewBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { TextAreaField, TextField } from "@/components/form/Field";

export const metadata: Metadata = {
  title: "Preview — tokens e componentes",
  robots: { index: false, follow: false },
};

/**
 * Rota TEMPORÁRIA de revisão da Fase 1 (noindex): mostra tokens e componentes
 * base para aprovação visual. Será removida antes do deploy.
 */
const swatches: { nome: string; varName: string }[] = [
  { nome: "navy-950", varName: "--navy-950" },
  { nome: "navy-900", varName: "--navy-900" },
  { nome: "navy-800 · principal", varName: "--navy-800" },
  { nome: "navy-700", varName: "--navy-700" },
  { nome: "navy-600", varName: "--navy-600" },
  { nome: "orange-700 · press", varName: "--orange-700" },
  { nome: "orange-600 · hover", varName: "--orange-600" },
  { nome: "orange-500 · acento", varName: "--orange-500" },
  { nome: "orange-400", varName: "--orange-400" },
  { nome: "orange-100", varName: "--orange-100" },
  { nome: "orange-50", varName: "--orange-50" },
  { nome: "gray-50 · página", varName: "--gray-50" },
  { nome: "gray-100", varName: "--gray-100" },
  { nome: "gray-200 · borda", varName: "--gray-200" },
  { nome: "gray-300", varName: "--gray-300" },
  { nome: "gray-500", varName: "--gray-500" },
  { nome: "gray-700", varName: "--gray-700" },
  { nome: "success", varName: "--success" },
  { nome: "warning", varName: "--warning" },
  { nome: "danger", varName: "--danger" },
  { nome: "info", varName: "--info" },
];

export default function Preview() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Section tone="white">
          <Container className="flex flex-col gap-[var(--space-6)]">
            <div>
              <Eyebrow>Fase 1 · Preview</Eyebrow>
              <Heading level={1} className="mt-[var(--space-2)]">
                Tokens e componentes
              </Heading>
            </div>

            <div>
              <Heading level={3}>Paleta</Heading>
              <div className="mt-[var(--space-4)] grid grid-cols-3 gap-[var(--space-3)] sm:grid-cols-5 lg:grid-cols-7">
                {swatches.map((s) => (
                  <div key={s.varName}>
                    <div
                      className="h-14 rounded-[var(--radius-md)] border border-border-token"
                      style={{ background: `var(${s.varName})` }}
                    />
                    <div className="mt-1 font-body text-[length:var(--text-xs)] text-muted">
                      {s.nome}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Heading level={3}>Tipografia</Heading>
              <div className="mt-[var(--space-4)] flex flex-col gap-[var(--space-2)]">
                <Heading level={1}>H1 Kanit itálico</Heading>
                <Heading level={2}>H2 em caixa alta</Heading>
                <Heading level={3}>H3 título de bloco</Heading>
                <p className="font-body text-[length:var(--text-lg)] font-semibold text-heading">
                  Subtítulo 18 · Barlow 600
                </p>
                <p className="max-w-[560px] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)]">
                  Corpo 16 · Barlow 400, leading 1.55, nunca itálico. O cliente
                  quer saber três coisas: tem?, onde fica?, quanto custa?
                </p>
                <Eyebrow>Eyebrow · caixa alta espaçada</Eyebrow>
              </div>
            </div>

            <div>
              <Heading level={3}>Botões</Heading>
              <div className="mt-[var(--space-4)] flex flex-wrap items-center gap-[var(--space-3)]">
                <Button size="lg">Fazer orçamento no WhatsApp</Button>
                <Button variant="secondary">Ligar: (62) 98517-2398</Button>
                <Button variant="outline">Como chegar</Button>
                <Button variant="ghost">Ver categorias</Button>
                <Badge>Aberto aos domingos</Badge>
                <Badge tone="neutral">Loja física</Badge>
              </div>
            </div>

            <div>
              <Heading level={3}>Motivos da marca</Heading>
              <div className="mt-[var(--space-4)] flex flex-wrap items-center gap-[var(--space-6)]">
                <DiagonalBars height={64} />
                <SkewBanner>
                  <span className="font-display text-[20px] font-bold italic uppercase tracking-[.06em] text-white">
                    Aberto todos os dias
                  </span>
                </SkewBanner>
              </div>
            </div>

            <div>
              <Heading level={3}>Cards (grid de categorias)</Heading>
              <div className="mt-[var(--space-4)] grid grid-cols-1 gap-[var(--space-4)] sm:grid-cols-2 lg:grid-cols-5">
                {categorias.map((c) => (
                  <Card key={c.slug} interactive>
                    <div className="font-display text-[length:var(--text-lg)] font-bold italic uppercase text-heading">
                      {c.nome}
                    </div>
                    <p className="mt-[var(--space-2)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-muted">
                      {c.heroSubtitulo}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Heading level={3}>Formulário</Heading>
              <Card className="mt-[var(--space-4)] max-w-[480px]">
                <form className="flex flex-col gap-[var(--space-4)]">
                  <TextField id="nome" label="Seu nome" name="nome" />
                  <TextField
                    id="whatsapp"
                    label="Seu WhatsApp"
                    name="whatsapp"
                    placeholder="(62) 90000-0000"
                    inputMode="tel"
                  />
                  <TextAreaField
                    id="mensagem"
                    label="O que você precisa?"
                    name="mensagem"
                    placeholder="Liste os materiais ou descreva o serviço"
                  />
                  <Button type="button" size="lg" fullWidth>
                    Enviar pedido de orçamento
                  </Button>
                </form>
              </Card>
            </div>
          </Container>
        </Section>

        <Section tone="dark">
          <Container>
            <Eyebrow tone="on-dark">Seção de impacto</Eyebrow>
            <Heading level={2} onDark className="mt-[var(--space-2)]">
              Fundo navy do DS
            </Heading>
            <p className="mt-[var(--space-3)] max-w-[560px] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-muted-on-dark">
              Máximo dois fundos por página: claro (padrão) e navy (impacto).
              Laranja nunca como fundo de seção inteira.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
