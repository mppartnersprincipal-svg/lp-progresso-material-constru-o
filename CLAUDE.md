# CLAUDE.md — LP Progresso Materiais de Construção

Landing page para gerar orçamentos via WhatsApp/ligação a partir de Google Ads.
Docs de referência: `Docs/PRD-Landing-Page-Progresso.md` e `Docs/COPY-Progresso.md`.

## Regras permanentes (definidas pelo usuário)

1. **Nenhuma cor, fonte ou espaçamento fora do design system.** Se um valor necessário não existir, derivar da escala existente e documentar em `docs/decisoes-design.md` — nunca inventar.
2. **Nenhum `[CONFIRMAR]` pode ser preenchido por suposição.** Manter visível no código como comentário `// TODO [CONFIRMAR]: ...` até o usuário confirmar.
3. **Não avançar de fase (PRD §14) sem o usuário aprovar a anterior.**
4. Em conflito visual entre PRD e design system, **o design system vence** (PRD §3.1).

## Caminhos dos ativos (nomes reais das pastas)

- `Design System da Marca/` — autoridade visual do projeto (tokens em `tokens/*.css`, guidelines, componentes React de referência, kit de landing em `ui_kits/landing/`, readme com regras da marca).
- `Foto Fachada/` — reservada para foto(s) da fachada. **Atualmente vazia** (verificado em 06/08/2026). Única imagem do repo é o logotipo (`Design System da Marca/assets/logo-progresso.jpg` e cópia em `uploads/`), JPEG 1536×1024 com fundo cinza embutido — não é fachada. Usar placeholder até a foto chegar.

## Tokens do design system (fonte: `Design System da Marca/tokens/`)

### Cores

- Navy: 950 `#0F1A2B` · 900 `#152238` · 800 `#1C2C47` (principal) · 700 `#27395A` · 600 `#33486F`
- Laranja: 700 `#B75A0E` (press) · 600 `#D2670F` (hover) · 500 `#E8731B` (acento/CTA) · 400 `#F08A3F` · 100 `#FBE4CE` · 50 `#FDF3E9`
- Neutros quentes: 0 `#FFFFFF` · 50 `#F6F5F3` (fundo de página) · 100 `#EDECE9` · 200 `#DDDBD6` (borda) · 300 `#C4C1BA` · 500 `#8B8880` · 700 `#55534E`
- Semânticas: success `#2E7D4F` · warning `#D99A11` · danger `#C23B22` · info `#2B6CB0`
- Texto: heading `#1C2C47` · body `#3D4658` · muted `#6B7284` · on-dark `#F4F6FA` · muted-on-dark `#9DA9BF`
- Focus ring: `rgba(232,115,27,.35)` · Overlay sobre foto: `rgba(21,34,56,.72)` · Seleção: orange-100

Regras: máx. 2 fundos por página (claro + navy); laranja nunca como fundo de seção inteira; cores chapadas, sem gradientes.

### Tipografia

- Display: **Kanit** 500–800, itálico + uppercase em títulos (H1/H2 curtos, caixa alta)
- Corpo/UI: **Barlow** 400–700, nunca itálico
- Escala: 12 / 14 / 16 / 18 / 24 / 32 / 44 / 60 px → H1 44–60 · H2 32 · H3 24 · subtítulo 18 (Barlow 600) · corpo 16 · legenda 14 · nota/eyebrow 12
- Leading: tight 1.05 (display) · snug 1.25 · normal 1.55 (corpo)
- Tracking: eyebrow `.18em` (caixa alta espaçada) · caps `.04em` (botões)

### Espaçamento

- Escala 4px: space-1 a 10 = `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`
- Container `1140px` · seções com respiro vertical 64–128px

### Raios

- sm `3px` · md `6px` · lg `10px` · pill `999px`
- Cards: cantos firmes (3–10px), nunca pill. Pill só em badges/tags e **botões** (`--radius-button: 999px`).

### Sombras e efeitos

- shadow-sm `0 1px 2px rgba(21,34,56,.08)` · shadow-md `0 4px 12px rgba(21,34,56,.10)` · shadow-lg `0 12px 32px rgba(21,34,56,.16)`
- Motivo da marca: `--skew: -8deg` (barras `///` e banners em paralelogramo, máx. 1–2 por seção)
- Motion: ease `cubic-bezier(.2,.8,.2,1)` · fast `120ms` · med `220ms` · hover escurece 1 passo, sem bounces
- Ícones: Lucide, traço 2px, sem emoji

### Tokens que NÃO existem no DS (não inventar; decisão vai em `docs/decisoes-design.md`)

- Breakpoints responsivos e escala tipográfica mobile
- Verde de CTA WhatsApp (PRD pede verde; DS determina CTA laranja — **aguardando decisão do usuário**)
- Escala de z-index
- Logo utilizável em fundo escuro (só existe JPEG com fundo claro; fallback: wordmark tipográfico Kanit 800 itálico + banner laranja skewado)

## Resumo — PRD §3 (Ativos existentes)

- `Design System da Marca/` e `Foto Fachada/` são **fonte da verdade** — não recriar o que existe.
- Ler todo o design system antes de escrever componentes; converter tokens em variáveis CSS (`:root`) e/ou `tailwind.config.ts` — uma única fonte de verdade no código.
- Foto da fachada: uso **obrigatório** na seção "Onde estamos" (tamanho generoso, junto do mapa/endereço) e **recomendado** no hero. Exportar AVIF + WebP com `srcset` 400/800/1200/1600w. `alt` descritivo com sinal geográfico. Sem filtros pesados ou overlays que descaracterizem a loja.
- Estrutura a criar: `docs/` (com `decisoes-design.md`), `public/images/{fachada,categorias}`, `public/robots.txt`, `public/sitemap.xml`, `src/{app,components,lib,content}` com `content/categorias.ts` como fonte única de dados das categorias.

## Resumo — PRD §5 (Stack técnica)

- **Next.js 15+ (App Router)** · TypeScript strict · Tailwind CSS com tokens do DS
- **SSG para todas as páginas** (`generateStaticParams`) — nada exige SSR
- Imagens via `next/image` (AVIF/WebP, srcset, lazy) · Fontes via `next/font` auto-hospedadas
- Hospedagem: Vercel (ou similar com CDN) · Analytics: GA4 + Google Ads Tag via GTM
- **As 10 páginas de categoria são geradas por UMA rota dinâmica** `src/app/[categoria]/page.tsx` alimentada por `src/content/categorias.ts` (tipo `Categoria` no PRD §5.1: slug, nome, h1, metaTitle ≤60, metaDescription ≤155, heroSubtitulo, introducao 80–120 palavras únicas, imagem, produtos, diferenciais, faq, correlatas, keywordPrincipal, mensagemWhatsApp). Tratar `categorias.ts` como código de produção — um erro se propaga por 10 páginas.

## Resumo — PRD §9.6 (Índice de Qualidade — checklist da página de destino)

- Keyword do grupo de anúncios no H1, no `<title>` e nos primeiros 100 caracteres do corpo
- Correspondência 1:1 entre grupo de anúncios e URL de destino
- Telefone e endereço visíveis sem rolagem em mobile
- Link para política de privacidade no rodapé de todas as páginas
- Nenhum pop-up intersticial cobrindo conteúdo na chegada; sem redirecionamentos
- HTTPS obrigatório · página carrega em < 2,5s em 4G mobile
- Conteúdo original e substancial em cada página (não é doorway page)
- Navegação clara entre categorias

## Decisões já tomadas pelo usuário (06/08/2026)

- **Nome oficial:** "Progresso Materiais de Construção" (PRD/copy mantidos; logo segue como está)
- **CTA WhatsApp:** laranja `--accent #E8731B` (DS vence o "verde" do PRD §11.1)
- **Fase 1 aprovada e executada.** Log completo de decisões e derivações em `docs/decisoes-design.md`

## Pendências abertas (não resolver por conta própria)

- Foto da fachada — `Foto Fachada/` vazia; virá do cliente (bloqueia Fase 2). TODO em `public/images/fachada/LEIA-ME.md`
- 26 `[CONFIRMAR]` da copy — como TODOs em `src/content/categorias.ts`, `src/lib/nap.ts` e `src/components/layout/Footer.tsx`
- Pendências do PRD §15: domínio, `{LAT}`/`{LNG}` do GBP, WhatsApp ativo no número, razão social/CNPJ, orçamento de Ads, ferragens×ferramentas (10 vs 9 páginas)
- Logo PNG transparente + versão para fundo escuro (pedir ao cliente)
