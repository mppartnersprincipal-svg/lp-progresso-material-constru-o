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
// Pesos limitados aos realmente usados (CWV §8.5 — cada variante é um
// arquivo pré-carregado antes do LCP). Kanit em duas instâncias:
// display = 700/800 itálico (títulos, só itálico no DS) e ui = 600 normal
// (botões). Barlow 400/500/600 para corpo.
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
  variable: "--font-kanit",
  display: "swap",
});

const kanitUi = Kanit({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
  variable: "--font-kanit-ui",
  display: "swap",
  // Fonte de botões não entra no preload — fora do caminho crítico do LCP;
  // o swap troca do fallback métrico sem custo visual perceptível.
  preload: false,
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
    <html lang="pt-BR" className={`${kanit.variable} ${kanitUi.variable} ${barlow.variable}`}>
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
