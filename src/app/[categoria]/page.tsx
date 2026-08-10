import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categorias, getCategoria } from "@/content/categorias";
import { DOMINIO } from "@/lib/config";
import { breadcrumbSchema, faqPageSchemaFromItems } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrackViewCategoria } from "@/components/analytics/TrackViewCategoria";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Breadcrumb } from "@/components/categoria/Breadcrumb";
import { CategoriaHero } from "@/components/categoria/CategoriaHero";
import { ProdutosLista } from "@/components/categoria/ProdutosLista";
import { DiferenciaisCategoria } from "@/components/categoria/DiferenciaisCategoria";
import { OrcamentoSection } from "@/components/categoria/OrcamentoSection";
import { OndeEstamos } from "@/components/home/OndeEstamos";
import { TambemTemos } from "@/components/categoria/TambemTemos";
import { FaqList } from "@/components/ui/FaqList";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Rota dinâmica das 10 páginas de categoria (PRD §5.1/§6.2).
 * UMA rota + categorias.ts — nunca páginas à mão. SSG puro:
 * generateStaticParams + dynamicParams=false (slug desconhecido → 404).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }));
}

// TODO: foto da fachada pendente — mesmo mecanismo da home (src/app/page.tsx).
const FACHADA_SRC = undefined;

type Props = { params: Promise<{ categoria: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria: slug } = await params;
  const cat = getCategoria(slug);
  if (!cat) return {};
  const url = `${DOMINIO}/${cat.slug}`;
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDescription,
      url,
      siteName: "Progresso Materiais de Construção",
      locale: "pt_BR",
      type: "website",
      // TODO: imagem OG 1200×630 pendente (PRD §8.1) — hoje aponta para a
      // imagem da categoria, que ainda não existe (Fase 3 de imagens).
      images: [{ url: `${DOMINIO}${cat.imagem.src}`, width: 1600, height: 900 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria: slug } = await params;
  const cat = getCategoria(slug);
  if (!cat) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema(cat)} />
      <JsonLd data={faqPageSchemaFromItems(cat.faq)} />
      <TrackViewCategoria slug={cat.slug} />
      <Header />
      <main className="pb-14 md:pb-0">
        <Breadcrumb nomeCategoria={cat.nome} />
        <CategoriaHero categoria={cat} />
        {/* Introdução (PRD §6.2 #4): 80–120 palavras únicas, keyword nos
            primeiros 100 caracteres do corpo (message match, PRD §9.6) */}
        <Section tone="light" className="!py-[var(--space-7)]">
          <Container>
            <p className="max-w-[820px] font-body text-[length:var(--text-lg)] leading-[var(--leading-normal)] text-body">
              {cat.introducao}
            </p>
          </Container>
        </Section>
        <ProdutosLista produtos={cat.produtos} />
        <DiferenciaisCategoria diferenciais={cat.diferenciais} />
        <OrcamentoSection categoria={cat} />
        <OndeEstamos fachadaSrc={FACHADA_SRC} />
        <Section tone="light" id="faq">
          <Container className="max-w-[820px]">
            <Heading level={2}>Perguntas frequentes</Heading>
            <div className="mt-[var(--space-6)]">
              <FaqList items={cat.faq} />
            </div>
          </Container>
        </Section>
        <TambemTemos correlatas={cat.correlatas} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
