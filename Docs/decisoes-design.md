# Log de decisões de design — LP Progresso

Registro exigido pelo PRD §3.1: todo valor não presente no design system
(`Design System da Marca/`) que precisou ser derivado está documentado aqui,
com origem e justificativa. Nenhum valor foi inventado fora da escala existente.

## Decisões do usuário (06/08/2026)

| # | Decisão | Escolha |
|---|---|---|
| 1 | Nome oficial da marca (NAP, titles, schema) | **"Progresso Materiais de Construção"** — mantém PRD e copy; o logo segue como está |
| 2 | Cor do CTA primário de WhatsApp | **Laranja `--accent #E8731B`** (DS vence o "verde" do PRD §11.1, conforme regra de conflito do PRD §3.1) |
| 3 | Foto da fachada | Pasta `Foto Fachada/` segue vazia; nada a fazer na Fase 1 além da estrutura `public/images/fachada/` + TODO. Foto virá do cliente (bloqueia Fase 2 §"Onde estamos"/hero) |
| 4 | `[CONFIRMAR]` da copy | Ficam como comentários TODO no código, sem preenchimento |

## Derivações técnicas (Fase 1)

| # | Item | Decisão | Justificativa |
|---|---|---|---|
| D1 | Breakpoints responsivos | Defaults do Tailwind (sm 640 / md 768 / lg 1024 / xl 1280) | DS não define breakpoints. Defaults são padrão de mercado e não criam valor visual novo — apenas pontos de corte |
| D2 | Escala tipográfica mobile | H1: 32→44→60px · H2: 24→32px · H3: 18→24px (mobile→desktop) | DS não define tamanhos mobile. Todos os degraus usam exclusivamente valores da própria escala de tokens (`--text-*`); a guideline "H1 44–60" já indica range |
| D3 | Config do Tailwind | Tailwind v4 CSS-first: tokens verbatim em `:root` + ponte `@theme inline` no `globals.css` | PRD §3.1 pede "variáveis CSS (`:root`) e/ou `tailwind.config.ts`". v4 elimina o arquivo de config e mantém UMA fonte de verdade (o próprio CSS de tokens) |
| D4 | Fontes | Kanit (500–800 + itálico) e Barlow (400–700) via `next/font/google` — auto-hospedadas no build, `display: swap` | `tokens/fonts.css` usa `@import` do Google Fonts (round-trip externo, proibido pelo PRD §5). `next/font` baixa no build e serve do próprio domínio; mesmos pesos do DS |
| D5 | Escala de z-index | 40 header/barra mobile · 50 flutuante WhatsApp | DS não define z-index. Escala mínima de 2 camadas; dialog/toast ganharão camada própria quando existirem |
| D6 | Logo no header/footer | Wordmark tipográfico (Kanit 800 itálico + barras diagonais), fallback oficial descrito no readme do DS | Único logo existente é JPEG com fundo claro embutido — não funciona sobre navy. TODO: pedir ao cliente PNG transparente + versão para fundo escuro |
| D7 | Área de toque | Botões `lg` e barra mobile com `min-height ≥ 48px` | PRD §11.3 (48×48px). Não é token visual novo — restrição de acessibilidade |
| D8 | Espaçamento de seção | 64px mobile / 96px desktop (space-8 / space-9) | Dentro do range "64–128px" do readme do DS |

## Derivações técnicas (Fase 4)

| # | Item | Decisão | Justificativa |
|---|---|---|---|
| D9 | Envio do formulário | Sem backend disponível: o submit valida (mensagens de erro da copy), dispara `envio_formulario`, abre o WhatsApp da loja com os dados preenchidos e navega para `/obrigado` | Mantém o lead no canal real da loja sem inventar um endpoint. TODO: trocar por e-mail/CRM se o cliente fornecer |
| D10 | robots.txt | Gerado via `app/robots.ts` (não arquivo estático em `public/`) | Lê o domínio de `config.ts` — uma única fonte; conteúdo idêntico ao §8.2 + `Disallow: /preview` (rota temporária) |
| D11 | Z-index do banner LGPD | 60 (acima do flutuante 50) | Banner precisa ser clicável sobre qualquer elemento |
| D12 | GTM | Carregado apenas se `NEXT_PUBLIC_GTM_ID` estiver definido; consent default `denied` em `beforeInteractive`, GTM em `afterInteractive` | TODO [CONFIRMAR]: criar container GTM e definir o ID no deploy |
| D13 | Contraste WCAG AA (PRD §12) | Textos pequenos em laranja sobre fundo claro usam `--accent-press #B75A0E` (4.9:1) em vez de `--accent #E8731B` (3.0:1, reprova); placeholders usam `gray-700` em vez de `text-muted` sobre `surface-sunken` | Valores da própria escala do DS, sem cor nova. **PENDENTE decisão do usuário:** texto branco sobre botões laranja `--accent` tem 2.8:1 e reprova AA — corrigir exigiria escurecer o fundo dos CTAs para orange-700 ou usar texto navy, mudando a cara da marca. Mantido branco-sobre-laranja (padrão do kit do DS) até decisão |

## Derivações técnicas (otimização mobile — 10/08/2026)

| # | Item | Decisão | Justificativa |
|---|---|---|---|
| D14 | Variantes de fonte | Kanit dividida em display (700/800 itálico, únicos pesos de título do DS) e ui (600 normal, botões, `preload: false`); variantes não usadas (500, 600i, 700n, 800n) removidas | Cada variante é um woff2 pré-carregado antes do LCP. TBT caiu de ~800ms para 30–80ms em medição limpa |
| D15 | Logo do header | `logo-simbolo.png` reduzido de 512px/80KB para 128px/12KB, sem `priority` | Estava no preload competindo com fontes/CSS no caminho crítico do LCP para exibir 40px |
| D16 | Rota /preview | Removida (e retirada do robots.txt) | Era ferramenta de revisão da Fase 1; código morto em produção |
| D17 | Seção "Peça seu orçamento" na home | Adicionada entre "Onde estamos" e FAQ, reutilizando OrcamentoSection (slug "home" nos eventos) | Pedido do usuário (10/08) + PRD §11.1 lista o formulário como conversor terciário e a home não o tinha; copy 100% dos Elementos Globais |

## TODOs abertos (bloqueiam fases seguintes)

- **Foto da fachada** — `Foto Fachada/` vazia. Quando chegar: mover para
  `public/images/fachada/`, exportar AVIF+WebP com srcset 400/800/1200/1600w
  (PRD §3.2). Bloqueia o hero e a seção "Onde estamos" da Fase 2.
- **Logo PNG transparente + versão para fundo escuro** — pedir ao cliente.
- **26 `[CONFIRMAR]` da copy** — mapeados como TODO em `src/content/categorias.ts`,
  `src/lib/nap.ts` e `src/components/layout/Footer.tsx`.
- **Pendências PRD §15** — domínio, coordenadas do GBP ({LAT}/{LNG}),
  WhatsApp ativo no número, orçamento de Ads, ferragens×ferramentas
  (10 vs 9 páginas).
