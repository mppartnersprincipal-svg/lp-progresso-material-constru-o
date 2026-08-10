import { faqHome } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * FAQ da home (PRD §6.1 #7). <details> nativo — zero JS, INP intacto.
 * As perguntas aqui são EXATAMENTE as marcadas no schema FAQPage
 * (fonte única: content/home.ts).
 */
export function FaqHome() {
  return (
    <Section tone="light" id="faq">
      <Container className="max-w-[820px]">
        <Heading level={2}>Perguntas frequentes</Heading>
        <div className="mt-[var(--space-6)] flex flex-col gap-[var(--space-3)]">
          {faqHome.map((f) => (
            <details
              key={f.pergunta}
              className="group rounded-[var(--radius-lg)] border border-border-token bg-surface-card shadow-sm-brand"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[var(--space-4)] p-[var(--space-5)] font-body text-[length:var(--text-md)] font-semibold text-heading [&::-webkit-details-marker]:hidden">
                {f.pergunta}
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform duration-[var(--dur-fast)] ease-[var(--ease-brand)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-[var(--space-5)] pb-[var(--space-5)] font-body text-[length:var(--text-md)] leading-[var(--leading-normal)] text-body">
                {f.resposta}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
