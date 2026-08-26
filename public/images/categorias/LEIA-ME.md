# Imagens das categorias

1 imagem por categoria, nomeada `{slug}.jpg` (ex.: `material-eletrico.jpg`).
Fotos extras da seção opcional "Na loja" (campo `galeria` em
`categorias.ts`) seguem `{slug}-{assunto}.jpg`, retrato 3:4 (ex.:
`material-eletrico-iluminacao.jpg`).
Prioridade de origem (PRD §7.1): 1º fotos reais da loja; 2º Pexels/Pixabay.

**12/08/2026 — 8 de 10 categorias usam fotos reais da loja** (originais em
`Fotos Loja/Fotos/` na raiz), recortadas em 16:9 e otimizadas. Detalhes e
mapeamento em `docs/creditos-imagens.md`.

Ainda em banco de imagens (Pexels), aguardando foto real:

- `impermeabilizantes.jpg`
- `portas-e-janelas.jpg`
- `tintas-e-pintura-latas.jpg` e `tintas-e-pintura-pinceis.jpg` (galeria
  "Na loja", 26/08 — latas de tinta ilustrativas)

Spec (PRD §7.2): 16:9, ~120 KB otimizada (o `next/image` converte para
AVIF/WebP no serve).

Regras por origem:

- **Banco de imagens** (as 2 acima): mín. 1600×900; **sem marca de
  fabricante em destaque**; nunca Google Imagens, concorrentes ou site de
  fabricante (PRD §7.1).
- **Foto real da loja**: marca visível no estoque é aceitável (D22), mas
  **sem preço legível** — etiqueta/cartaz de preço envelhece e vira risco
  em landing page de Ads (D24). Resolução do WhatsApp aceita sem upscale
  (D20).
