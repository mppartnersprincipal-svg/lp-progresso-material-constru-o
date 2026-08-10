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
      disallow: "/obrigado",
    },
    sitemap: `${DOMINIO}/sitemap.xml`,
  };
}
