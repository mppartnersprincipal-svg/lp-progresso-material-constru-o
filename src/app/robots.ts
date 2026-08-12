import type { MetadataRoute } from "next";
import { DOMINIO } from "@/lib/config";

/**
 * robots.txt (PRD §8.2) — gerado em build para ler o domínio de config.ts
 * (uma fonte única; o PRD §3.3 previa arquivo estático em public/, decisão
 * documentada em docs/decisoes-design.md).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /obrigado sai do índice via meta noindex (obrigado/page.tsx), não
      // por Disallow: bloquear no robots impediria o Google de LER o
      // noindex, e a URL poderia indexar "sem descrição" se ganhasse link.
    },
    sitemap: `${DOMINIO}/sitemap.xml`,
  };
}
