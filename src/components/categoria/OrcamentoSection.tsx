import type { Categoria } from "@/content/categorias";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { FormOrcamento } from "@/components/form/FormOrcamento";

/**
 * Orçamento (PRD §6.2 #7): formulário curto (3 campos — teto do PRD §11.1)
 * + CTA WhatsApp com a mensagem da categoria.
 * Copy do formulário: COPY-Progresso.md — Elementos globais.
 * Envio: FormOrcamento (WhatsApp + /obrigado + evento envio_formulario).
 */
export function OrcamentoSection({ categoria }: { categoria: Categoria }) {
  return (
    <Section tone="light" id="orcamento">
      <Container className="grid grid-cols-1 items-start gap-[var(--space-6)] lg:grid-cols-2">
        <div className="flex flex-col items-start gap-[var(--space-4)]">
          <Heading level={2}>Peça seu orçamento</Heading>
          <p className="font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
            Preencha os campos e retornamos com preço e disponibilidade.
          </p>
          <p className="font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
            Prefere agilidade? Chame direto no WhatsApp:
          </p>
          <Button
            href={whatsappUrl(categoria.mensagemWhatsApp)}
            size="lg"
            target="_blank"
            rel="noopener"
          >
            Fazer orçamento no WhatsApp
          </Button>
        </div>
        <Card>
          <FormOrcamento
            categoriaSlug={categoria.slug}
            mensagemWhatsApp={categoria.mensagemWhatsApp}
          />
        </Card>
      </Container>
    </Section>
  );
}
