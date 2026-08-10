import type { Metadata } from "next";
import { NAP } from "@/lib/nap";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Política de Privacidade — exigência LGPD + política do Google Ads (PRD §4).
 * Texto padrão descrevendo exatamente o que o site coleta (formulário +
 * cookies de medição via GTM/GA4/Google Ads com Consent Mode v2).
 * TODO [CONFIRMAR]: razão social e CNPJ do controlador (pendência #3 do PRD
 * §15) — publicar somente após preencher a seção "Quem somos".
 */
export const metadata: Metadata = {
  title: "Política de Privacidade | Progresso Materiais de Construção",
  description:
    "Como a Progresso Materiais de Construção trata seus dados: o que coletamos, para que usamos e seus direitos segundo a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const H3 = "font-display text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-bold italic uppercase leading-[var(--leading-snug)] text-heading mt-[var(--space-6)]";
const P = "font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body mt-[var(--space-3)]";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main>
        <Section tone="light">
          <Container className="max-w-[820px]">
            <Heading level={1}>Política de Privacidade</Heading>

            <h2 className={H3}>Quem somos</h2>
            <p className={P}>
              Este site é operado por {NAP.nome}
              {/* TODO [CONFIRMAR]: razão social e CNPJ — ex.: ", nome
                  empresarial [RAZÃO SOCIAL], CNPJ [00.000.000/0001-00]" */},
              com endereço na {NAP.endereco}. Contato:{" "}
              {NAP.telefoneDisplay} (telefone e WhatsApp).
            </p>

            <h2 className={H3}>Quais dados coletamos</h2>
            <p className={P}>
              <strong>Formulário de orçamento:</strong> nome, número de WhatsApp
              e a descrição do que você precisa. Esses dados são usados
              exclusivamente para responder ao seu pedido de orçamento e são
              enviados diretamente ao WhatsApp da loja — não os armazenamos em
              banco de dados próprio.
            </p>
            <p className={P}>
              <strong>Cookies de medição:</strong> com o seu consentimento,
              usamos Google Analytics 4 e Google Ads (via Google Tag Manager)
              para medir visitas, cliques e conversões. Sem o seu aceite, esses
              cookies permanecem desativados (Consent Mode v2, padrão
              &quot;negado&quot;).
            </p>

            <h2 className={H3}>Base legal e finalidade</h2>
            <p className={P}>
              Tratamos os dados do formulário com base na execução de
              procedimentos preliminares a pedido do titular (art. 7º, V, LGPD)
              e os dados de medição com base no seu consentimento (art. 7º, I,
              LGPD), coletado pelo aviso de cookies.
            </p>

            <h2 className={H3}>Compartilhamento</h2>
            <p className={P}>
              Os dados de medição são processados pelo Google (Google Analytics
              e Google Ads) conforme as políticas de privacidade do próprio
              Google. Não vendemos nem compartilhamos seus dados pessoais com
              terceiros para outras finalidades.
            </p>

            <h2 className={H3}>Retenção</h2>
            <p className={P}>
              Conversas de WhatsApp seguem a retenção padrão do aplicativo da
              loja. Dados de medição seguem os prazos de retenção configurados
              no Google Analytics.
            </p>

            <h2 className={H3}>Seus direitos</h2>
            <p className={P}>
              Nos termos da LGPD, você pode solicitar acesso, correção ou
              exclusão dos seus dados, além de revogar o consentimento de
              cookies a qualquer momento (basta limpar os dados do site no seu
              navegador). Para exercer qualquer direito, fale com a loja pelo
              telefone ou WhatsApp {NAP.telefoneDisplay}.
            </p>

            <h2 className={H3}>Atualizações</h2>
            <p className={P}>
              Esta política pode ser atualizada para refletir mudanças no site.
              A versão vigente estará sempre publicada nesta página.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
