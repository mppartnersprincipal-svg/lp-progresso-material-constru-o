import type { Metadata } from "next";
import { homeMeta } from "@/content/home";
import { faqPageSchema, hardwareStoreSchema, webSiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoriasGrid } from "@/components/home/CategoriasGrid";
import { PorQue } from "@/components/home/PorQue";
import { OndeEstamos } from "@/components/home/OndeEstamos";
import { FaqHome } from "@/components/home/FaqHome";
import { CtaFinal } from "@/components/home/CtaFinal";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeMeta.title,
    description: homeMeta.description,
    url: "/",
    siteName: "Progresso Materiais de Construção",
    locale: "pt_BR",
    type: "website",
    // TODO: imagem OG 1200×630 da home — usar a foto da fachada quando chegar
    images: [{ url: "/images/fachada/fachada.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

// TODO: foto da fachada pendente — quando o cliente enviar, salvar em
// public/images/fachada/fachada.jpg e definir aqui:
// const FACHADA_SRC = "/images/fachada/fachada.jpg";
const FACHADA_SRC = undefined;

/**
 * Home (PRD §6.1) — 9 seções + flutuante:
 * 1 Header · 2 Hero · 3 Barra de confiança · 4 Grid de categorias ·
 * 5 Por que a Progresso · 6 Onde estamos · 7 FAQ · 8 CTA final · 9 Rodapé
 */
export default function Home() {
  return (
    <>
      <JsonLd data={hardwareStoreSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={faqPageSchema()} />
      <Header />
      <main className="pb-14 md:pb-0">
        <Hero fachadaSrc={FACHADA_SRC} />
        <TrustBar />
        <CategoriasGrid />
        <PorQue />
        <OndeEstamos fachadaSrc={FACHADA_SRC} />
        <FaqHome />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
