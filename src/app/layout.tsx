import type { Metadata } from "next";
import { Barlow, Kanit } from "next/font/google";
import { DOMINIO } from "@/lib/config";
import { Gtm, GtmNoScript } from "@/components/analytics/Gtm";
import { AnalyticsListener } from "@/components/analytics/AnalyticsListener";
import { ConsentBanner } from "@/components/consent/ConsentBanner";
import "./globals.css";

// Fontes auto-hospedadas no build via next/font (PRD §5 — zero round-trip
// externo). Kanit = display do DS (títulos bold/itálico/uppercase);
// Barlow = corpo/UI. Pesos conforme tokens/fonts.css do design system.
// Pesos limitados aos realmente usados (CWV §8.5 — menos arquivos de fonte
// atrasando o LCP): Kanit 600 (botões), 700/800 itálico (títulos);
// Barlow 400 (corpo), 500 (medium), 600 (semibold).
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-kanit",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase resolve os canonicals/OG relativos das páginas
  // (DOMINIO ainda é placeholder — TODO [CONFIRMAR] em src/lib/config.ts)
  metadataBase: new URL(DOMINIO),
  title: "Progresso Materiais de Construção | Aparecida de Goiânia",
  description:
    "Loja completa de material de construção na Av. Graça Aranha, Aparecida de Goiânia. Elétrica, hidráulica, tintas, ferragens e cimento. Aberto todo dia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${kanit.variable} ${barlow.variable}`}>
      <body>
        <GtmNoScript />
        {children}
        <Gtm />
        <AnalyticsListener />
        <ConsentBanner />
      </body>
    </html>
  );
}
