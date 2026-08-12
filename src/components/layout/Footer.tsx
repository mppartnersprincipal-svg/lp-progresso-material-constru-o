import { NAP, HORARIOS } from "@/lib/nap";
import { whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { categorias } from "@/content/categorias";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * Rodapé (COPY — Elementos globais): 4 colunas + linha final.
 * NAP completo + links das 10 categorias + política de privacidade (PRD §9.6).
 */
export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer data-cta="rodape" className="bg-surface-darker py-[var(--space-8)]">
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-6)] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark onDark />
            <p className="mt-[var(--space-4)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-muted-on-dark">
              Loja completa de material de construção em Aparecida de Goiânia.
              Elétrica, hidráulica, tintas, ferragens, cimento e ferramentas.
            </p>
          </div>
          <div>
            <h2 className="font-body text-[length:var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-eyebrow)] text-orange-400">
              Categorias
            </h2>
            <ul className="mt-[var(--space-4)] space-y-[var(--space-2)]">
              {categorias.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/${c.slug}`}
                    className="font-body text-[length:var(--text-sm)] text-on-dark hover:text-orange-400"
                  >
                    {c.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-body text-[length:var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-eyebrow)] text-orange-400">
              Contato
            </h2>
            <address className="mt-[var(--space-4)] font-body text-[length:var(--text-sm)] not-italic leading-[var(--leading-normal)] text-on-dark">
              {NAP.logradouro} - {NAP.bairro}
              <br />
              {NAP.cidade} - {NAP.uf}, {NAP.cep}
              <br />
              <a href={`tel:${NAP.telefoneE164}`} className="text-on-dark hover:text-orange-400">
                {NAP.telefoneDisplay}
              </a>
              <br />
              <a
                href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
                target="_blank"
                rel="noopener"
                className="text-on-dark hover:text-orange-400"
              >
                WhatsApp
              </a>
              <br />
              <a
                href={NAP.instagram}
                target="_blank"
                rel="noopener"
                className="text-on-dark hover:text-orange-400"
              >
                Instagram {NAP.instagramHandle}
              </a>
            </address>
          </div>
          <div>
            <h2 className="font-body text-[length:var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-eyebrow)] text-orange-400">
              Horário
            </h2>
            <p className="mt-[var(--space-4)] font-body text-[length:var(--text-sm)] leading-[var(--leading-normal)] text-on-dark">
              {HORARIOS.semana}
              <br />
              {HORARIOS.sabado}
              <br />
              {HORARIOS.domingo}
            </p>
          </div>
        </div>
        <div className="mt-[var(--space-7)] border-t border-[rgba(244,246,250,.15)] pt-[var(--space-5)] font-body text-[length:var(--text-xs)] text-muted-on-dark">
          © {ano} {NAP.nome} ·{" "}
          {/* TODO [CONFIRMAR]: razão social e CNPJ */}
          {/* py-2 inline-block: amplia a área de toque do link legal sem
              mudar o layout da linha (PRD §11.3) */}
          <a
            href="/politica-de-privacidade"
            className="inline-block py-[var(--space-2)] text-muted-on-dark hover:text-orange-400"
          >
            Política de Privacidade
          </a>
        </div>
      </Container>
    </footer>
  );
}
