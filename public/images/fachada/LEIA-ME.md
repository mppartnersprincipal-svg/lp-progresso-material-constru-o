# Foto da fachada — integrada em 12/08/2026

Foto real enviada pelo cliente (`Foto Fachada/` na raiz, 12/08/2026).

- `fachada.jpg` — original 1080×1252 (retrato), usada no hero e na seção
  "Onde estamos" via `next/image` (`fill` + `object-cover`; AVIF/WebP e
  `srcset` automáticos).
- `fachada-og.jpg` — recorte 16:9 1080×607 (faixa do letreiro + frente da
  loja) para Open Graph da home.
- `alt` fixo em `src/components/home/FachadaImage.tsx` (`FACHADA_ALT`),
  com sinal geográfico (PRD §3.2).
- Sem filtros nem overlays que descaracterizem a loja.

Se o cliente enviar uma foto em maior resolução/paisagem no futuro,
substituir os dois arquivos mantendo os mesmos nomes.
