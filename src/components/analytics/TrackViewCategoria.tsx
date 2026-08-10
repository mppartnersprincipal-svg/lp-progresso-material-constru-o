"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/analytics";

/** view_categoria (PRD §10.1): dispara uma vez no load da página de categoria. */
export function TrackViewCategoria({ slug }: { slug: string }) {
  useEffect(() => {
    pushEvent("view_categoria", { categoria: slug });
  }, [slug]);
  return null;
}
