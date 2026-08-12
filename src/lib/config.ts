import { NAP } from "./nap";

/**
 * Configuração central do site — domínio, telefone e endereço usados pelo
 * schema JSON-LD (PRD §8.3), mapa e URLs absolutos.
 */

// TODO [CONFIRMAR]: domínio definitivo do site (PRD §15, pendência #1).
// Lido de SITE_URL (definir no ambiente de deploy — ver .env.example).
// O fallback é um placeholder proposital e óbvio: se aparecer em produção,
// a variável não foi configurada. Usado em schema, sitemap, robots e
// canonicals — tudo resolvido em build (SSG): mudar a variável exige redeploy.
export const DOMINIO = (
  process.env.SITE_URL ?? "https://DOMINIO-A-CONFIRMAR.com.br"
).replace(/\/$/, "");

// Trava de deploy: sem SITE_URL, o placeholder vazaria silenciosamente para
// schema, sitemap, robots e canonicals de produção. Vercel define VERCEL_ENV;
// NODE_ENV=production também vale para `next build` local de produção real —
// para build local de teste, exportar SITE_URL=http://localhost:3000.
if (process.env.VERCEL_ENV === "production" && !process.env.SITE_URL) {
  throw new Error(
    "SITE_URL não configurada — obrigatória em produção (schema, sitemap, robots, canonicals).",
  );
}

export const SITE = {
  dominio: DOMINIO,
  nome: NAP.nome,
  telefoneE164: NAP.telefoneE164,
  priceRange: "$$",
  endereco: {
    // Endereço confirmado pelo usuário em 12/08/2026 (sem número, como na
    // listagem pública da loja). Bairro no streetAddress: PostalAddress não
    // tem campo próprio de bairro e o sinal hiperlocal importa (SEO local).
    streetAddress: `${NAP.logradouro} - ${NAP.bairro}`,
    addressLocality: NAP.cidade,
    addressRegion: NAP.uf,
    postalCode: NAP.cep,
    addressCountry: "BR",
  },
  // Coordenadas do pino da loja, fornecidas pelo usuário em 12/08/2026
  // (6 casas decimais ≈ precisão de 10cm). Usadas no schema (geo), no embed
  // do mapa e no "Como chegar" — o endereço sem número geocodifica impreciso.
  geo: {
    latitude: -16.752553,
    longitude: -49.281904,
  },
} as const;

const pino = `${SITE.geo.latitude},${SITE.geo.longitude}`;

/** Embed do Google Maps — usar SOMENTE via LazyMap (nunca iframe direto no load). */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(pino)}&output=embed`;

/** Link "Como chegar" (abre rota no app de mapas, direto no pino da loja). */
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(pino)}`;
