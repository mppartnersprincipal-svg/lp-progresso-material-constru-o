import { categorias } from "@/content/categorias";
import { NAP } from "@/lib/nap";
import { telUrl, whatsappUrl, WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { MobileMenu } from "./MobileMenu";

/**
 * Header fixo (PRD §6.1): logo, menu, telefone clicável, CTA WhatsApp.
 * Menu (PRD §4.2 — a home linka para as 10 categorias também pelo menu):
 * - Desktop: dropdown "Categorias" (hover E foco de teclado — PRD §11.3
 *   proíbe hover como única forma) + âncoras "Onde estamos"/"Perguntas
 *   frequentes" (as seções existem na home e nas páginas de categoria).
 * - Mobile: hambúrguer (MobileMenu) com as mesmas entradas.
 */
const navSecoes = [
  { href: "#onde-estamos", label: "Onde estamos" },
  { href: "#faq", label: "Perguntas frequentes" },
];

const navLink =
  "font-body text-[length:var(--text-sm)] font-medium text-body hover:text-link-hover hover:no-underline";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-token bg-surface-card">
      <Container className="relative flex h-[72px] items-center justify-between gap-[var(--space-4)]">
        <a href="/" className="shrink-0 hover:no-underline" aria-label={NAP.nome}>
          <Wordmark />
        </a>

        {/* Menu desktop */}
        <nav aria-label="Menu principal" className="hidden items-center gap-[var(--space-6)] lg:flex">
          <div className="group relative">
            <a href="/#categorias" className={`${navLink} inline-flex items-center gap-1 py-[var(--space-3)]`}>
              Categorias
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" />
              </svg>
            </a>
            <div className="invisible absolute left-1/2 top-full z-40 w-[520px] -translate-x-1/2 rounded-[var(--radius-lg)] border border-border-token bg-surface-card p-[var(--space-3)] opacity-0 shadow-lg-brand transition-opacity duration-[var(--dur-fast)] ease-[var(--ease-brand)] group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="grid grid-cols-2 gap-[2px]">
                {categorias.map((c) => (
                  <li key={c.slug}>
                    <a
                      href={`/${c.slug}`}
                      className="block rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] font-body text-[length:var(--text-sm)] font-medium text-body hover:bg-accent-soft hover:text-link-hover hover:no-underline"
                    >
                      {c.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {navSecoes.map((s) => (
            <a key={s.href} href={s.href} className={navLink}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[var(--space-3)]">
          <a
            href={telUrl()}
            className="hidden font-body text-[length:var(--text-sm)] font-semibold text-heading xl:inline"
          >
            {NAP.telefoneDisplay}
          </a>
          {/* Em mobile a barra fixa inferior já traz Ligar + WhatsApp (PRD §6.1) */}
          <span className="hidden sm:block">
            <Button
              href={whatsappUrl(WHATSAPP_MENSAGEM_PADRAO)}
              size="md"
              target="_blank"
              rel="noopener"
            >
              Orçamento no WhatsApp
            </Button>
          </span>

          {/* Menu mobile */}
          <MobileMenu>
            <nav aria-label="Menu" className="p-[var(--space-4)]">
              <p className="px-[var(--space-3)] pb-[var(--space-2)] font-body text-[length:var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-eyebrow)] text-accent-press">
                Categorias
              </p>
              <ul className="grid grid-cols-1 gap-[2px] sm:grid-cols-2">
                {categorias.map((c) => (
                  <li key={c.slug}>
                    <a
                      href={`/${c.slug}`}
                      className="block rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] font-body text-[length:var(--text-md)] font-medium text-body hover:bg-accent-soft hover:no-underline"
                    >
                      {c.nome}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-[var(--space-3)] border-t border-border-token pt-[var(--space-3)]">
                <ul className="grid gap-[2px]">
                  {navSecoes.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        className="block rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] font-body text-[length:var(--text-md)] font-medium text-body hover:bg-accent-soft hover:no-underline"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={telUrl()}
                      className="block rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] font-body text-[length:var(--text-md)] font-semibold text-heading hover:bg-accent-soft hover:no-underline"
                    >
                      Ligar: {NAP.telefoneDisplay}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </MobileMenu>
        </div>
      </Container>
    </header>
  );
}
