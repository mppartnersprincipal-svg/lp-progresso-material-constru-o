import { SITE, DOMINIO } from "./config";
import { NAP } from "./nap";
import { categorias, type Categoria } from "@/content/categorias";
import { faqHome, homeMeta } from "@/content/home";

/**
 * JSON-LD da home (PRD §8.3). Domínio, telefone e endereço vêm de
 * src/lib/config.ts — trocar lá reflete aqui.
 */

/** A) HardwareStore — tipo mais específico que LocalBusiness. */
export function hardwareStoreSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "@id": `${DOMINIO}/#loja`,
    name: SITE.nome,
    // Mesma description da home (copy já aprovada) — não criar texto novo
    description: homeMeta.description,
    image: `${DOMINIO}/images/fachada/fachada.jpg`,
    logo: `${DOMINIO}/images/logo-simbolo.png`,
    url: DOMINIO,
    telephone: SITE.telefoneE164,
    priceRange: SITE.priceRange,
    sameAs: [NAP.instagram],
    address: {
      "@type": "PostalAddress",
      ...SITE.endereco,
    },
    // TODO [CONFIRMAR]: "geo" omitido de propósito — coordenadas {LAT}/{LNG}
    // saem do pino do GBP depois de criado. Não estimar (PRD §8.3).
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:30",
        closes: "12:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Aparecida de Goiânia" },
      { "@type": "City", name: "Goiânia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Categorias de produtos",
      itemListElement: categorias.map((c) => ({
        "@type": "OfferCatalog",
        name: c.nome,
        url: `${DOMINIO}/${c.slug}`,
      })),
    },
  };
}

/** D) WebSite — na home. Ligado à entidade da loja via publisher/@id. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMINIO}/#website`,
    name: SITE.nome,
    url: DOMINIO,
    inLanguage: "pt-BR",
    publisher: { "@id": `${DOMINIO}/#loja` },
  };
}

/**
 * C) FAQPage — SÓ perguntas visíveis na página. Marcar pergunta invisível é
 * violação de diretriz do Google. Usar sempre o MESMO array que a página
 * renderiza (home: content/home.ts · categoria: categorias.ts → faq).
 */
export function faqPageSchemaFromItems(
  items: readonly { pergunta: string; resposta: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.resposta,
      },
    })),
  };
}

/** C) FAQPage da home (perguntas visíveis de content/home.ts). */
export function faqPageSchema() {
  return faqPageSchemaFromItems(faqHome);
}

/** B) BreadcrumbList — em cada página de categoria (PRD §8.3-B). */
export function breadcrumbSchema(categoria: Categoria) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: DOMINIO,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoria.nome,
        item: `${DOMINIO}/${categoria.slug}`,
      },
    ],
  };
}
