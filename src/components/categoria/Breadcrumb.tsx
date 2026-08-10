import { Container } from "@/components/ui/Container";

/** Breadcrumb visível `Início > [Categoria]` (PRD §6.2 #2) — schema em lib/schema.ts. */
export function Breadcrumb({ nomeCategoria }: { nomeCategoria: string }) {
  return (
    <nav aria-label="Navegação estrutural" className="bg-surface-page py-[var(--space-3)]">
      <Container>
        <ol className="flex flex-wrap items-center gap-[var(--space-2)] font-body text-[length:var(--text-sm)]">
          <li>
            <a href="/" className="text-muted hover:text-link-hover">
              Início
            </a>
          </li>
          <li aria-hidden="true" className="text-muted">
            &gt;
          </li>
          <li aria-current="page" className="font-semibold text-heading">
            {nomeCategoria}
          </li>
        </ol>
      </Container>
    </nav>
  );
}
