import type { MetadataRoute } from "next";
import { categorias } from "@/content/categorias";
import { DOMINIO } from "@/lib/config";

/**
 * Sitemap (PRD §8.2): home 1.0, categorias 0.8. /obrigado fica FORA
 * (noindex). Política de privacidade entra com prioridade baixa.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMINIO,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...categorias.map((c) => ({
      url: `${DOMINIO}/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${DOMINIO}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
