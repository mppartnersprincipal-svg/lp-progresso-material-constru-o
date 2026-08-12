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

## Decisões do usuário (12/08/2026)

| # | Decisão | Escolha |
|---|---|---|
| 5 | Endereço oficial | **"Av. Graça Aranha - Jardim Nova Era, Aparecida de Goiânia - GO, 74916-379"** — confirmado sem número (igual à listagem pública). Resolve o `[CONFIRMAR]` de número/quadra/lote em `nap.ts`, `config.ts` e `home.ts` |
| 6 | Telefone | **(62) 98517-2398** — confirmado (já era o valor em uso) |
| 7 | Instagram | **instagram.com/progressomateriais10** — adicionado ao NAP, ao rodapé (coluna Contato) e ao schema `HardwareStore.sameAs` |

## Integração das fotos reais da loja (12/08/2026)

| # | Item | Decisão | Justificativa |
|---|---|---|---|
| D18 | Fachada no hero e "Onde estamos" | `fachada.jpg` (original retrato 1080×1252) via `next/image` `fill`+`object-cover`; recorte 16:9 `fachada-og.jpg` só para Open Graph | Foto chegou do cliente em 12/08. AVIF/WebP + srcset ficam por conta do `next/image` (mesmo efeito do "exportar AVIF+WebP" do PRD §3.2, sem arquivos duplicados) |
| D19 | Imagens de categoria: 8 de 10 trocadas por fotos reais | Recorte 16:9 manual (faixa vertical escolhida por foto) + reencode JPEG; mapeamento em `docs/creditos-imagens.md`. `impermeabilizantes` e `portas-e-janelas` seguem Pexels — nenhuma foto enviada corresponde | PRD §7.1: foto real da loja é prioridade nº 1 sobre banco de imagens |
| D20 | Resolução abaixo do spec §7.2 (mín. 1600×900) | Aceita: fotos de WhatsApp têm 899–1600px de largura; recortes ficam entre 899×506 e 1280×720. Sem upscale | Autenticidade vence resolução (espírito do §7.1); maior superfície de render é ~570px (50vw no container 1140). Se o cliente enviar originais em alta, retrocar |
| D21 | Peso: `material-eletrico.jpg` 123 KB e `tintas-e-pintura.jpg` 135 KB (alvo era <120 KB) | Aceito — são fotos de prateleira com alta entropia; comprimir mais degradava visivelmente | O peso servido é menor: `next/image` entrega AVIF/WebP redimensionado, não o JPEG do disco |
| D22 | Marcas de fabricantes visíveis nas fotos (Tramontina, Votomassa, Tocantins etc.) | Aceitas | A restrição "sem marca de terceiro em destaque" do §7 vale para banco de imagens; em foto real do estoque da loja a marca é conteúdo autêntico (a própria fachada estampa Colatex) |

## CTAs adicionais nas páginas de categoria (12/08/2026 — pedido do usuário)

| # | Item | Decisão | Justificativa |
|---|---|---|---|
| D23 | Densidade de CTA nas 10 páginas de categoria | 3 pontos novos, todos com copy já aprovada dos Elementos Globais: (a) botão "Ligar" no hero ao lado do WhatsApp (mesmo par da home); (b) par WhatsApp+Ligar ao fim da lista "O que temos"; (c) banner "CTA final" (o mesmo da home, reutilizado) fechando a página com a mensagem de WhatsApp da categoria | Usuário achou os CTAs escassos entre as dobras. Nenhum texto novo foi inventado — só reuso de CTA primário/secundário e do bloco "CTA final" da copy |

## Correções pós-auditoria (12/08/2026)

| # | Item | Decisão | Justificativa |
|---|---|---|---|
| D24 | Foto de categoria com preço legível | Recorte do `cimento-e-argamassa.jpg` refeito (faixa mais baixa) excluindo o cartaz "23,90" | Preço em foto envelhece e vira alegação enganosa em landing page de Ads. Regra registrada no LEIA-ME das categorias: foto real sem preço legível |
| D25 | og:image das categorias | `width`/`height` reais por categoria em `categorias.ts` (899×506 a 1600×900) em vez do 1600×900 fixo | 8 das 10 imagens têm dimensões menores que o valor declarado — scrapers de rede social reservam a caixa errada |
| D26 | Fachada no hero (LCP) | Hero usa o recorte paisagem `fachada-og.jpg` (1080×607); a original retrato fica na caixa alta do "Onde estamos" | A caixa do hero é paisagem: servir o retrato inteiro baixava ~50% de pixels descartados pelo `object-cover` no elemento LCP (orçamento <2,5s em 4G, PRD §9.6) |
| D27 | Rótulos de CTA | Fonte única `ctaGlobal` em `content/home.ts` + componente `CtaPair` (usado no hero da home, hero de categoria e fim de "O que temos") | O par WhatsApp+Ligar estava triplicado com strings hardcoded — mudança de copy editaria 3 lugares |
| D28 | NAP com hífen simples | `"Av. Graça Aranha - Jardim Nova Era, ..."` em todas as superfícies (era travessão em `nap.ts`/`home.ts`/rodapé) | Consistência caractere por caractere com a forma confirmada pelo usuário e com a listagem pública (SEO local) |

## TODOs abertos (bloqueiam fases seguintes)

- **Logo PNG transparente + versão para fundo escuro** — pedir ao cliente.
- **Fotos reais para `impermeabilizantes` e `portas-e-janelas`** — pedir ao
  cliente; hoje seguem com banco (Pexels).
- **`[CONFIRMAR]` restantes da copy** — como TODOs em
  `src/content/categorias.ts` (~21), `src/content/home.ts` (3),
  `src/lib/nap.ts` (razão social/CNPJ, domínio, LAT/LNG),
  `src/lib/config.ts`, `src/app/politica-de-privacidade/page.tsx`,
  `src/components/analytics/Gtm.tsx` e `src/components/layout/Footer.tsx`.
  Endereço, telefone e Instagram já confirmados (12/08).
- **Pendências PRD §15** — domínio, coordenadas do GBP ({LAT}/{LNG}),
  WhatsApp ativo no número, orçamento de Ads, ferragens×ferramentas
  (10 vs 9 páginas).
- ~~Originais das fotos fora do git~~ — resolvido em 12/08: usuário mandou
  commitar tudo (commit d3335e5), incluindo o webp do ChatGPT.
- **Fachada em versão de qualidade aumentada (decisão do usuário, 12/08/2026)**
  — o usuário aprovou substituir os JPEGs da fachada pela versão com upscale
  de IA (`Foto Fachada/ChatGPT-Image-12-de-ago...webp`, mesma cena da foto
  real, letreiro mais nítido). `fachada.jpg` 1164×1351 e `fachada-og.jpg`
  1164×655, convertidos com sharp (q82, mozjpeg).
