"use client";

import { useEffect } from "react";
import { categoriaAtual, pushEvent } from "@/lib/analytics";

/**
 * Rastreamento por delegação de eventos (PRD §10.1) — um único listener
 * global, zero conversão de componentes de servidor:
 * - click_whatsapp: qualquer link wa.me (+ slug da categoria + origem)
 * - click_telefone: qualquer link tel: (+ origem)
 * - click_rota: link "Como chegar" (google.com/maps/dir)
 * - scroll_75: 75% de rolagem, uma vez por página
 * "origem" = ancestral [data-cta] mais próximo (hero, lista-produtos,
 * cta-final, header, flutuante, barra-mobile, rodape) — permite comparar a
 * conversão de cada posição de CTA.
 */
export function AnalyticsListener() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const categoria = categoriaAtual();
      const origem =
        a.closest("[data-cta]")?.getAttribute("data-cta") ?? "outro";
      if (href.startsWith("https://wa.me/")) {
        pushEvent("click_whatsapp", { categoria, origem });
      } else if (href.startsWith("tel:")) {
        pushEvent("click_telefone", { categoria, origem });
      } else if (href.startsWith("https://www.google.com/maps/dir")) {
        pushEvent("click_rota", { categoria });
      }
    }

    let scrollFired = false;
    function onScroll() {
      if (scrollFired) return;
      const doc = document.documentElement;
      const progresso = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (progresso >= 0.75) {
        scrollFired = true;
        pushEvent("scroll_75", { categoria: categoriaAtual() });
        window.removeEventListener("scroll", onScroll);
      }
    }

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
