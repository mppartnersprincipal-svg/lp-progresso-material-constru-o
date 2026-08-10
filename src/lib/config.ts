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

export const SITE = {
  dominio: DOMINIO,
  nome: NAP.nome,
  telefoneE164: NAP.telefoneE164,
  priceRange: "$$",
  endereco: {
    // TODO [CONFIRMAR]: número/quadra/lote para completar o endereço
    streetAddress: NAP.logradouro,
    addressLocality: NAP.cidade,
    addressRegion: NAP.uf,
    postalCode: NAP.cep,
    addressCountry: "BR",
  },
  // TODO [CONFIRMAR]: coordenadas {LAT}/{LNG} — extrair do pino do Google
  // Business Profile depois de criado. NÃO estimar (PRD §8.3): o campo "geo"
  // fica FORA do schema até a confirmação.
} as const;

const enderecoCompleto = `${NAP.nome}, ${NAP.logradouro}, ${NAP.bairro}, ${NAP.cidade} - ${NAP.uf}, ${NAP.cep}`;

/** Embed do Google Maps — usar SOMENTE via LazyMap (nunca iframe direto no load). */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  enderecoCompleto,
)}&output=embed`;

/** Link "Como chegar" (abre rota no app de mapas). */
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  enderecoCompleto,
)}`;
