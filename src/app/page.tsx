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
import { OrcamentoSection } from "@/components/categoria/OrcamentoSection";
import { FACHADA_PAISAGEM, FACHADA_RETRATO } from "@/components/home/FachadaImage";
import { WHATSAPP_MENSAGEM_PADRAO } from "@/lib/whatsapp";

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
    // Recorte 16:9 da fachada para OG (a foto original é retrato 1080×1252)
    images: [{ url: "/images/fachada/fachada-og.jpg", width: 1080, height: 607 }],
  },
  twitter: { card: "summary_large_image" },
};


/**
 * Home (PRD §6.1) — seções + flutuante:
 * 1 Header · 2 Hero · 3 Barra de confiança · 4 Grid de categorias ·
 * 5 Por que a Progresso · 6 Onde estamos · 7 Peça seu orçamento (formulário,
 * PRD §11.1 — conversor terciário; copy dos Elementos Globais) · 8 FAQ ·
 * 9 CTA final · 10 Rodapé
 */
export default function Home() {
  return (
    <>
      <JsonLd data={hardwareStoreSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={faqPageSchema()} />
      <Header />
      <main className="pb-14 md:pb-0">
        <Hero fachadaSrc={FACHADA_PAISAGEM} />
        <TrustBar />
        <CategoriasGrid />
        <PorQue />
        <OndeEstamos fachadaSrc={FACHADA_RETRATO} />
        <OrcamentoSection
          categoria={{ slug: "home", mensagemWhatsApp: WHATSAPP_MENSAGEM_PADRAO }}
        />
        <FaqHome />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}
