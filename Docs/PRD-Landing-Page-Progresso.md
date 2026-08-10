# PRD — Landing Page Progresso Materiais de Construção

**Versão:** 1.0
**Data:** 05/08/2026
**Cliente:** Progresso Materiais de Construção
**Objetivo primário:** gerar orçamentos qualificados via WhatsApp e ligações a partir de tráfego pago do Google Ads
**Executor:** Claude Code (VS Code)

---

## 1. Contexto e diagnóstico

A Progresso é uma loja física completa de materiais de construção na Av. Graça Aranha, Jardim Nova Era, Aparecida de Goiânia. Hoje a empresa **não possui presença digital indexável** — não há site, nem fichas consistentes em diretórios locais. Toda a autoridade será construída do zero.

Isso tem duas implicações diretas no projeto:

1. **Vantagem:** o NAP (Nome, Endereço, Telefone) pode ser padronizado desde o primeiro dia, sem conflitos de dados legados espalhados pela web. Consistência de NAP é um dos fatores mais fortes de ranqueamento local.
2. **Restrição:** sem autoridade de domínio, o SEO orgânico levará de 4 a 8 meses para produzir volume relevante. **O Google Ads é o canal de aquisição no curto prazo** e o site precisa ser construído para ele primeiro, com SEO orgânico como camada de composto de longo prazo. Toda decisão técnica deste PRD respeita essa ordem de prioridade.

### 1.1 Geografia de captação

O Jardim Nova Era fica na divisa Aparecida de Goiânia / Goiânia, fazendo limite com o Parque Amazônia (Goiânia). Bairros no raio natural de atendimento:

- **Aparecida de Goiânia:** Jardim Nova Era, Vila Mariana, Cidade Vera Cruz, Cidade Satélite São Luiz, Conjunto Cruzeiro do Sul, Jardim Maria Inês, Jardim Luz, Vila São Tomaz, Setor dos Afonsos, Jardim Atlântico
- **Goiânia:** Parque Amazônia, Jardim Atlântico, e adjacências ao sul da capital

Referências geográficas úteis para copy e SEO: **Avenida Rio Verde** (via principal de acesso) e **Buriti Shopping** (âncora de referência da região).

> **Consequência prática:** a segmentação do Google Ads NÃO deve ser limitada ao município de Aparecida de Goiânia. Deve ser um raio geográfico centrado na loja. Ver seção 9.3.

---

## 2. Objetivos e métricas de sucesso

| Objetivo | Métrica | Meta (90 dias) |
|---|---|---|
| Gerar contatos qualificados | Conversões/mês (WhatsApp + ligação + formulário) | 120+ |
| Eficiência de mídia | CPA (custo por conversão) | < R$ 25 |
| Qualidade da LP no Ads | Índice de Qualidade médio | ≥ 7/10 |
| Experiência técnica | Core Web Vitals (campo, mobile) | 100% "Bom" |
| Taxa de conversão | Visita → contato | ≥ 8% |
| Base para SEO orgânico | Páginas indexadas | 11/11 |

**Conversão primária:** clique no WhatsApp.
**Conversões secundárias:** clique para ligar, envio de formulário, clique em "Como chegar".

> Os benchmarks acima são estimativas de projeto. Calibrar após 30 dias com dados reais.

---

## 3. Ativos existentes no repositório

O projeto já contém dois diretórios que **devem ser usados como fonte da verdade** — não recrie o que já existe:

```
progresso-lp/
├── design-system/          ← JÁ EXISTE. Tokens, paleta, tipografia, componentes.
│                             É a autoridade visual do projeto.
└── [pasta da fachada]/     ← JÁ EXISTE. Foto(s) da fachada da loja.
```

### 3.1 Regras de uso do `design-system/`

- **Antes de escrever qualquer componente**, leia todo o conteúdo de `design-system/`. Extraia os tokens reais (cores, escalas tipográficas, espaçamentos, raios, sombras).
- **Nenhuma cor, fonte ou espaçamento pode ser inventado.** Se um valor necessário não existir no design system, derive-o da escala existente e documente a decisão em `docs/decisoes-design.md`.
- Converta os tokens em variáveis CSS (`:root`) e/ou `tailwind.config.ts` para que exista uma única fonte de verdade no código.
- Se houver conflito entre este PRD e o design system em questões visuais, **o design system vence**.

### 3.2 Regras de uso da foto da fachada

A foto da fachada é o ativo de confiança mais importante da página. Loja física real e visível reduz atrito de forma que nenhum stock consegue.

- **Uso obrigatório na seção "Onde estamos"** da home, em tamanho generoso, adjacente ao mapa e ao endereço.
- **Uso recomendado no hero da home**, como imagem de fundo ou lateral, se a resolução e o enquadramento permitirem.
- Tratamento: exportar em AVIF + WebP, com `srcset` responsivo (400w / 800w / 1200w / 1600w).
- `alt` obrigatório e descritivo com sinal geográfico: `"Fachada da Progresso Materiais de Construção na Av. Graça Aranha, Jardim Nova Era, Aparecida de Goiânia"`.
- Se houver mais de uma foto, use a de melhor enquadramento no hero e as demais na seção "Onde estamos".
- **Não aplicar filtros pesados nem overlays escuros que descaracterizem a loja.** O objetivo é reconhecimento — o cliente precisa identificar o lugar ao chegar.

### 3.3 Estrutura de pastas a criar

```
progresso-lp/
├── design-system/               (existente)
├── docs/
│   ├── PRD-Landing-Page-Progresso.md
│   ├── COPY-Progresso.md
│   └── decisoes-design.md       (criar — log de decisões)
├── public/
│   ├── images/
│   │   ├── fachada/             (mover/referenciar ativo existente)
│   │   └── categorias/          (criar — 1 imagem por categoria)
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── app/
    ├── components/
    ├── lib/
    └── content/
        └── categorias.ts        (fonte única de dados das categorias)
```

---

## 4. Arquitetura de informação

11 páginas indexáveis + 2 utilitárias.

| # | Página | Slug | Papel |
|---|---|---|---|
| 0 | Home | `/` | Hub. Recebe tráfego de marca e termos genéricos |
| 1 | Material Elétrico | `/material-eletrico` | LP do grupo de anúncios "Elétrica" |
| 2 | Material Hidráulico | `/material-hidraulico` | LP do grupo "Hidráulica" |
| 3 | Tintas e Pintura | `/tintas-e-pintura` | LP do grupo "Tintas" |
| 4 | Impermeabilizantes | `/impermeabilizantes` | LP do grupo "Impermeabilização" |
| 5 | Metais e Louças Sanitárias | `/metais-e-loucas-sanitarias` | LP do grupo "Metais e Louças" |
| 6 | Ferramentas | `/ferramentas` | LP do grupo "Ferramentas" |
| 7 | Ferragens | `/ferragens` | LP do grupo "Ferragista" |
| 8 | Areia e Brita Ensacada | `/areia-e-brita-ensacada` | LP do grupo "Agregados" |
| 9 | Cimento e Argamassas | `/cimento-e-argamassa` | LP do grupo "Cimento" |
| 10 | Portas e Janelas | `/portas-e-janelas` | LP do grupo "Esquadrias" |
| — | Política de Privacidade | `/politica-de-privacidade` | Exigência LGPD + política do Google Ads |
| — | Obrigado | `/obrigado` | Confirmação de formulário. `noindex` |

### 4.1 Nota sobre a lista de categorias original

A lista fornecida pelo cliente tinha 14 itens com **4 duplicatas semânticas** que foram consolidadas:

| Original | Consolidado em |
|---|---|
| "materiais elétricos em geral" + "materiais elétricos" | Material Elétrico |
| "materiais hidráulicos em geral" + "hidráulico" | Material Hidráulico |
| "tintas e acessórios para pintura" + "pintura" | Tintas e Pintura |
| "ferramentas em geral" + "ferramentas" | Ferramentas |

**Isso não é detalhe editorial — é decisão de SEO.** Duas páginas cobrindo a mesma intenção de busca competem entre si (canibalização), dividem sinais de link e confundem o Google sobre qual ranquear. No Google Ads, o efeito é pior: dois grupos de anúncios com as mesmas palavras-chave disputam o mesmo leilão, inflando o CPC contra a própria conta.

> **Ação requerida:** confirmar com o cliente que "ferragista completa" e "ferramentas" são de fato linhas distintas na loja (ferragens/fixação vs. ferramentas manuais e elétricas). Se na prática forem o mesmo balcão, consolidar em 9 páginas.

### 4.2 Linkagem interna (hub-and-spoke)

- Home → linka para as 10 categorias (grid de categorias + menu + rodapé)
- Cada categoria → linka de volta para a home (breadcrumb + logo)
- Cada categoria → linka para **2 a 3 categorias correlatas** em bloco "Também temos"

Pares correlatos sugeridos:

| Categoria | Correlatas |
|---|---|
| Material Elétrico | Ferramentas, Ferragens |
| Material Hidráulico | Metais e Louças, Ferramentas |
| Tintas e Pintura | Impermeabilizantes, Ferramentas |
| Impermeabilizantes | Tintas e Pintura, Cimento e Argamassas |
| Metais e Louças | Material Hidráulico, Portas e Janelas |
| Ferramentas | Ferragens, Material Elétrico |
| Ferragens | Ferramentas, Portas e Janelas |
| Areia e Brita | Cimento e Argamassas, Ferramentas |
| Cimento e Argamassas | Areia e Brita, Impermeabilizantes |
| Portas e Janelas | Ferragens, Tintas e Pintura |

Isso distribui autoridade, aumenta páginas/sessão e cria caminhos naturais de upsell.

---

## 5. Stack técnica

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Next.js 15+ (App Router)** | SSG por padrão. Renderização estática = melhor LCP possível, e o Índice de Qualidade do Google Ads pondera velocidade de página de destino. |
| Linguagem | TypeScript (strict) | Segurança nas 10 páginas geradas por template |
| Estilo | Tailwind CSS + tokens do `design-system/` | Tokens do DS mapeados no `tailwind.config.ts` |
| Renderização | **`generateStaticParams` + SSG** para todas as páginas | Zero tempo de servidor. Nada aqui exige SSR ou dados dinâmicos. |
| Imagens | `next/image` | AVIF/WebP automático, `srcset`, lazy nativo |
| Fontes | `next/font/local` (auto-hospedadas) | Elimina round-trip a servidor externo e o CLS de troca de fonte |
| Hospedagem | Vercel (ou similar com CDN + Brotli + HTTP/2) | Edge caching |
| Analytics | GA4 + Google Ads Tag (via GTM) | Ver seção 10 |

### 5.1 As 10 páginas de categoria são geradas por template

Não escreva 10 páginas à mão. Crie **uma** rota dinâmica `src/app/[categoria]/page.tsx` alimentada por `src/content/categorias.ts`.

Cada objeto de categoria carrega:

```typescript
type Categoria = {
  slug: string;
  nome: string;              // "Material Elétrico"
  h1: string;                // com sinal geográfico
  metaTitle: string;         // ≤ 60 caracteres
  metaDescription: string;   // ≤ 155 caracteres
  heroSubtitulo: string;
  introducao: string;        // 80-120 palavras, texto único
  imagem: {
    src: string;
    alt: string;
    creditoObrigatorio?: string;
  };
  produtos: string[];        // lista de itens da linha
  diferenciais: { titulo: string; texto: string }[];
  faq: { pergunta: string; resposta: string }[];
  correlatas: string[];      // slugs
  keywordPrincipal: string;  // usada no H1 e no title
  mensagemWhatsApp: string;  // texto pré-preenchido do link wa.me
};
```

Um erro de template se propaga por 10 páginas — trate `categorias.ts` como código de produção, não como conteúdo.

---

## 6. Estrutura das páginas

### 6.1 Home (`/`)

| # | Seção | Conteúdo |
|---|---|---|
| 1 | Header fixo | Logo, telefone clicável, botão "Orçamento no WhatsApp". Em mobile: barra compacta com ícone de ligar + WhatsApp |
| 2 | Hero | H1 com marca + cidade. Subtítulo com proposta de valor. 2 CTAs. **Foto da fachada.** |
| 3 | Barra de confiança | Loja física • Horário • Endereço • Telefone. Faixa horizontal, alto contraste |
| 4 | Grid de categorias | 10 cards com imagem, nome e link. **Seção mais importante da home.** |
| 5 | Por que a Progresso | 3 a 4 blocos de diferencial |
| 6 | Onde estamos | Foto da fachada + Google Maps incorporado + endereço + horários + botão "Como chegar" |
| 7 | FAQ | 5 a 6 perguntas com schema `FAQPage` |
| 8 | CTA final | Bloco de conversão |
| 9 | Rodapé | NAP completo, links para as 10 categorias, política de privacidade, horários |
| — | Flutuante | Botão WhatsApp fixo (mobile e desktop) |

### 6.2 Página de categoria (template)

| # | Seção | Conteúdo |
|---|---|---|
| 1 | Header | Igual à home |
| 2 | Breadcrumb | `Início > [Categoria]` — com schema `BreadcrumbList` |
| 3 | Hero da categoria | H1 = keyword + cidade. **Imagem da categoria.** CTA WhatsApp com mensagem pré-preenchida daquela linha |
| 4 | Introdução | 80–120 palavras únicas. Nunca reaproveitar texto entre categorias |
| 5 | O que temos | Lista de produtos da linha, em colunas |
| 6 | Diferenciais | 3 blocos específicos da categoria |
| 7 | Orçamento | Formulário curto + WhatsApp |
| 8 | Onde estamos | Mapa + endereço + horários |
| 9 | FAQ da categoria | 3 a 4 perguntas com schema `FAQPage` |
| 10 | Também temos | Links para 2–3 categorias correlatas |
| 11 | Rodapé | Igual à home |

**Regra de message match:** a keyword do grupo de anúncios precisa aparecer no H1, no `<title>` e nos primeiros 100 caracteres do corpo. É o fator mais direto sobre "Experiência na página de destino" no Índice de Qualidade. Quem clica em um anúncio de "material hidráulico" e cai numa página genérica de materiais de construção volta — e o Google mede isso.

---

## 7. Imagens das categorias

### 7.1 Prioridade de origem — nesta ordem

**1º — Fotos da própria loja (fortemente recomendado).**
Fotografar os corredores e prateleiras reais de cada seção. Motivos:

- **Conversão:** estoque visível e real converte muito acima de banco de imagens. O cliente vê que a loja tem o produto.
- **SEO:** imagens únicas não existem em nenhum outro site. Stock aparece em centenas de concorrentes e não gera nenhum sinal diferencial.
- **Google Business Profile:** as mesmas fotos alimentam a ficha do GBP, que é o ativo local de maior impacto.
- **Custo:** zero. Um celular moderno com boa luz resolve.

Roteiro para o cliente: 1 foto horizontal por corredor/seção, câmera na altura do peito, luz do dia ou luz da loja acesa, prateleiras cheias e organizadas, sem pessoas identificáveis (ou com autorização de imagem por escrito).

**2º — Banco de imagens livre**, se as fotos próprias não vierem no prazo.

Fontes com licença comercial gratuita e sem exigência de atribuição:

| Fonte | Padrão de busca |
|---|---|
| Pexels | `https://www.pexels.com/search/{termo}/` |
| Pixabay | `https://pixabay.com/pt/photos/search/{termo}/` |

Termos de busca por categoria (buscar em português E inglês — o acervo em inglês é maior):

| Categoria | Termos PT | Termos EN |
|---|---|---|
| Material Elétrico | `fios elétricos`, `disjuntor` | `electrical wiring`, `circuit breaker` |
| Material Hidráulico | `tubos pvc`, `encanamento` | `pvc pipes`, `plumbing fittings` |
| Tintas e Pintura | `latas de tinta`, `rolo de pintura` | `paint cans`, `paint roller` |
| Impermeabilizantes | `impermeabilização laje` | `waterproofing membrane`, `roof sealing` |
| Metais e Louças | `torneira`, `vaso sanitário` | `bathroom faucet`, `sanitary ware` |
| Ferramentas | `ferramentas`, `furadeira` | `hand tools`, `power drill` |
| Ferragens | `parafusos`, `dobradiça` | `screws bolts`, `hardware store shelf` |
| Areia e Brita | `brita`, `areia construção` | `gravel`, `construction sand` |
| Cimento e Argamassas | `saco de cimento`, `argamassa` | `cement bags`, `mortar mix` |
| Portas e Janelas | `porta de madeira`, `janela alumínio` | `wooden door`, `aluminum window` |

> **Nunca** usar imagens do Google Imagens, de sites de concorrentes, de fabricantes ou de marketplaces. Risco jurídico real e desnecessário. **Nunca** usar imagem que exiba marca de fabricante concorrente ou logotipo de terceiros de forma proeminente.

### 7.2 Especificação técnica

| Item | Valor |
|---|---|
| Proporção | 16:9 (hero de categoria) e 4:3 (cards da home) |
| Resolução mínima | 1600×900 px |
| Formatos | AVIF + WebP (via `next/image`), JPEG de fallback |
| Peso alvo | < 120 KB por imagem já otimizada |
| Nomenclatura | `categorias/{slug}.jpg` — ex.: `categorias/material-eletrico.jpg` |
| `alt` | Descritivo + geográfico. Padrão: `"{Categoria} disponível na Progresso Materiais de Construção em Aparecida de Goiânia"` |
| `loading` | `priority` na imagem do hero; `lazy` em todas as demais |
| `width`/`height` | **Sempre explícitos** — previne CLS |

---

## 8. SEO

### 8.1 SEO on-page — mapa completo

Títulos e descrições completos estão em `COPY-Progresso.md`. Regras estruturais:

- **`<title>`:** máximo 60 caracteres, keyword no início, cidade incluída
- **`<meta description>`:** máximo 155 caracteres, com CTA e diferencial
- **`<h1>`:** exatamente um por página, contendo a keyword principal
- **`<h2>`/`<h3>`:** hierarquia lógica, sem pular níveis
- **`<link rel="canonical">`:** autorreferencial em todas as páginas
- **Open Graph + Twitter Card:** em todas as páginas, com imagem 1200×630
- **`lang="pt-BR"`** no `<html>`

### 8.2 Arquivos de rastreamento

**`robots.txt`:**
```
User-agent: *
Allow: /
Disallow: /obrigado

Sitemap: https://{DOMINIO}/sitemap.xml
```

**`sitemap.xml`:** gerado via `app/sitemap.ts` do Next.js. Home com `priority: 1.0`, categorias com `0.8`. `noindex` na página `/obrigado`.

### 8.3 Dados estruturados (JSON-LD)

**A) `HardwareStore` — na home.** Tipo mais específico que `LocalBusiness`, o que ajuda o Google a classificar o negócio corretamente.

```json
{
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": "https://{DOMINIO}/#loja",
  "name": "Progresso Materiais de Construção",
  "image": "https://{DOMINIO}/images/fachada/fachada.jpg",
  "url": "https://{DOMINIO}",
  "telephone": "+5562985172398",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Graça Aranha",
    "addressLocality": "Aparecida de Goiânia",
    "addressRegion": "GO",
    "postalCode": "74916-379",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{LAT}",
    "longitude": "{LNG}"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:30", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday", "opens": "07:30", "closes": "13:00" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday", "opens": "07:30", "closes": "12:00" }
  ],
  "areaServed": [
    { "@type": "City", "name": "Aparecida de Goiânia" },
    { "@type": "City", "name": "Goiânia" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Categorias de produtos",
    "itemListElement": [
      { "@type": "OfferCatalog", "name": "Material Elétrico",
        "url": "https://{DOMINIO}/material-eletrico" }
      /* ... repetir para as 10 categorias ... */
    ]
  }
}
```

> **`{LAT}` e `{LNG}`:** extrair as coordenadas exatas do pino do Google Business Profile depois de criado. **Não estimar.** Coordenada errada em schema local prejudica mais do que ajuda.

**B) `BreadcrumbList`** — em cada página de categoria.

**C) `FAQPage`** — na home e em cada categoria. Só marcar perguntas que estejam visíveis na página; o contrário é violação de diretriz e pode gerar ação manual.

**D) `WebSite`** — na home, com `name` e `url`.

### 8.4 SEO local — ações fora do site

Estas ações estão fora do escopo de desenvolvimento, mas **determinam o resultado** e devem ser executadas em paralelo:

1. **Criar e verificar o Google Business Profile** — maior alavanca isolada de SEO local. Categoria primária: "Loja de materiais de construção". Secundárias: "Loja de ferragens", "Loja de tintas", "Loja de material elétrico", "Loja de material hidráulico".
2. **Padronizar o NAP** exatamente como no site, caractere por caractere, em toda citação.
3. **Cadastrar em diretórios locais:** Apontador, Solutudo, Guia Cidade, Enkontre, Telelistas.
4. **Programa de avaliações:** QR code no balcão, pedido ativo pós-venda. Avaliações são o segundo fator mais forte no pacote local.
5. **Postagens no GBP:** semanais, reaproveitando o conteúdo das páginas de categoria.
6. **Vincular o GBP ao Google Ads** para habilitar o recurso de local e as extensões de localização.

### 8.5 Core Web Vitals — metas obrigatórias

| Métrica | Meta | Como garantir |
|---|---|---|
| **LCP** | < 2,5s | Imagem do hero com `priority` + `preload`, SSG, fonte auto-hospedada, sem JS bloqueante |
| **INP** | < 200ms | JS mínimo, sem bibliotecas de animação pesadas, GTM carregado com `afterInteractive` |
| **CLS** | < 0,1 | `width`/`height` em toda imagem, espaço reservado para o mapa e o banner de cookies, `font-display: swap` com fallback métrico |

Regras rígidas:
- **Google Maps incorporado deve ser lazy** (só carrega o iframe ao entrar no viewport, ou via clique numa imagem estática). Um iframe do Maps carregado de imediato destrói o LCP e o INP em mobile.
- **GTM não pode carregar antes da interatividade.**
- **Sem carrossel na dobra inicial.**
- Auditar com PageSpeed Insights e Lighthouse antes do deploy. Meta: ≥ 90 em Performance no mobile.

---

## 9. Google Ads

### 9.1 Estrutura de campanha

**Campanha 1 — Search | Categorias** (orçamento principal)

Cada grupo de anúncios aponta para **sua própria página**. Essa é a razão de existir das 10 páginas.

| Grupo de anúncios | URL final | Keywords semente (frase/exata) |
|---|---|---|
| Elétrica | `/material-eletrico` | material elétrico aparecida de goiânia, loja de material elétrico perto de mim, fio elétrico, disjuntor |
| Hidráulica | `/material-hidraulico` | material hidráulico aparecida de goiânia, tubos e conexões pvc, loja de material hidráulico |
| Tintas | `/tintas-e-pintura` | loja de tintas aparecida de goiânia, tinta acrílica, tinta para parede |
| Impermeabilização | `/impermeabilizantes` | impermeabilizante para laje, manta asfáltica, impermeabilizante aparecida de goiânia |
| Metais e Louças | `/metais-e-loucas-sanitarias` | louça sanitária, vaso sanitário, torneira, metais sanitários goiânia |
| Ferramentas | `/ferramentas` | loja de ferramentas aparecida de goiânia, furadeira, ferramentas para construção |
| Ferragista | `/ferragens` | ferragista aparecida de goiânia, parafusos, dobradiças, loja de ferragens |
| Agregados | `/areia-e-brita-ensacada` | areia ensacada, brita ensacada, saco de areia, pedrisco |
| Cimento | `/cimento-e-argamassa` | cimento, saco de cimento, argamassa colante, rejunte, preço do cimento |
| Esquadrias | `/portas-e-janelas` | porta de madeira, janela de alumínio, porta com batente |

**Campanha 2 — Search | Genérico + Marca**

| Grupo | URL final | Keywords |
|---|---|---|
| Marca | `/` | progresso materiais de construção, progresso ferragista |
| Genérico | `/` | material de construção aparecida de goiânia, loja de material de construção perto de mim, depósito de material de construção |

**Campanha 3 — Performance Max** (a partir do 2º mês, com dados de conversão acumulados)

> Não iniciar com PMax. Sem histórico de conversão, o algoritmo não tem sinal para otimizar e o orçamento é queimado em aprendizado.

### 9.2 Palavras-chave negativas (aplicar no nível da conta)

```
grátis, gratis, curso, cursos, apostila, emprego, vaga, vagas, contrata,
salário, concurso, pdf, download, como fazer, tutorial, usado, usados,
segunda mão, doação, aluguel de, atacado direto de fábrica,
leroy merlin, telhanorte, obramax, c&c, sodimac, cassol,
wikipedia, significado, o que é
```

Revisar o **Relatório de termos de pesquisa semanalmente** nos primeiros 60 dias e expandir a lista. Em contas locais novas, é aqui que se recupera a maior parte do orçamento desperdiçado.

### 9.3 Segmentação geográfica

- **Não** segmentar por município. Usar **raio de 8 a 12 km centrado no endereço da loja**, que atravessa a divisa e captura o Parque Amazônia e o sul de Goiânia.
- Tipo de local: **"Presença: pessoas que estão ou frequentam regularmente os locais segmentados"** — nunca "Interesse", que traz cliques de outras cidades.
- Ajuste de lance positivo no raio de 3 km (a conversão cai com a distância nesse tipo de negócio).

### 9.4 Programação de anúncios

Alinhar à operação real da loja. Não há sentido em pagar por cliques quando ninguém pode atender o WhatsApp.

| Dia | Janela ativa |
|---|---|
| Segunda a Sexta | 07:00 – 18:00 |
| Sábado | 07:00 – 13:00 |
| Domingo | 07:00 – 12:00 |

Fora dessas janelas: pausar ou aplicar ajuste de lance de −80%. Se o cliente conseguir responder o WhatsApp fora do horário, manter uma janela reduzida com o formulário como conversão principal.

### 9.5 Recursos / extensões (obrigatórios)

- **Sitelinks:** 1 por categoria — o clique já leva direto à linha desejada, elevando CTR e IQ
- **Frases de destaque:** "Loja física em Aparecida", "Orçamento pelo WhatsApp", "Aberto aos domingos", "Elétrica, hidráulica e ferragens"
- **Snippets estruturados:** cabeçalho "Tipos" → as 10 categorias
- **Recurso de chamada:** (62) 98517-2398, com a mesma programação da seção 9.4
- **Recurso de local:** vinculado ao Google Business Profile
- **Recurso de imagem:** foto da fachada + fotos das categorias
- **Recurso de promoção:** condicional a haver oferta real

> **"Aberto aos domingos" é o diferencial competitivo mais forte da Progresso.** Boa parte das lojas de material de construção fecha no domingo, exatamente o dia em que o consumidor final faz reforma própria e descobre que falta material. Isso precisa aparecer no anúncio, no hero da home e no GBP.

### 9.6 Índice de Qualidade — checklist da página de destino

O componente "Experiência na página de destino" é onde a LP influencia diretamente o CPC. Requisitos:

- [ ] Keyword do grupo presente no H1, no `<title>` e nos primeiros 100 caracteres do corpo
- [ ] Correspondência 1:1 entre grupo de anúncios e URL de destino
- [ ] Telefone e endereço visíveis sem rolagem em mobile
- [ ] Link para política de privacidade no rodapé de todas as páginas
- [ ] Nenhum pop-up intersticial que cubra o conteúdo na chegada
- [ ] Sem redirecionamentos entre o clique e o conteúdo
- [ ] HTTPS obrigatório
- [ ] Página carrega em < 2,5s em 4G mobile
- [ ] Conteúdo original e substancial em cada página (não é doorway page)
- [ ] Navegação clara entre categorias

### 9.7 Rastreamento de URL

**Modelo de rastreamento** (nível de conta):

```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}&mt={matchtype}&dev={device}
```

O `gclid` é anexado automaticamente pelo Google. Ativar **marcação automática (auto-tagging)**.

---

## 10. Rastreamento e conversões

### 10.1 Plano de eventos

| Evento (GA4) | Gatilho | Conversão no Ads | Valor |
|---|---|---|---|
| `click_whatsapp` | Clique em qualquer link `wa.me` | **Primária** | R$ 20 |
| `click_telefone` | Clique em qualquer `tel:` | **Primária** | R$ 20 |
| `envio_formulario` | Submit com sucesso → `/obrigado` | **Primária** | R$ 25 |
| `click_rota` | Clique em "Como chegar" | Secundária | R$ 5 |
| `scroll_75` | 75% de rolagem | Secundária (engajamento) | — |
| `view_categoria` | Pageview de categoria | Secundária | — |

Cada botão de WhatsApp deve enviar o **slug da categoria** como parâmetro do evento, para saber qual linha de produto gera mais contato. Esse dado orienta a realocação de orçamento entre grupos de anúncios.

### 10.2 Implementação

- **GTM** como container único. GA4 e Google Ads Tag disparados por ele.
- **Conversões otimizadas (enhanced conversions for leads):** enviar telefone/e-mail do formulário com hash SHA-256. Melhora a atribuição de forma significativa em ambiente com perda de cookies.
- **Consent Mode v2 + banner LGPD:** banner de consentimento com opção real de recusa, política de privacidade acessível, `consent` default como `denied` para armazenamento de anúncios até o aceite. O banner **não pode causar CLS** — reservar espaço ou usar overlay em camada fixa.
- **Links de WhatsApp:** formato `https://wa.me/5562985172398?text={mensagem}` com mensagem pré-preenchida por categoria. Isso qualifica o lead antes da primeira palavra digitada e economiza tempo do atendente.

---

## 11. Conversão (CRO)

### 11.1 Hierarquia de CTAs

1. **Primário:** "Fazer orçamento no WhatsApp" — verde, alto contraste, presente em todas as seções de conversão + botão flutuante fixo
2. **Secundário:** "Ligar agora" — em mobile, na barra fixa inferior
3. **Terciário:** formulário curto (Nome, WhatsApp, O que você precisa) — máximo 3 campos

Cada campo adicional derruba a taxa de envio. Três campos é o teto.

### 11.2 Sinais de confiança na página

- Foto real da fachada (não stock)
- Endereço completo + mapa incorporado
- Telefone clicável visível no topo
- Horários explícitos, com destaque para **"Aberto aos domingos"**
- Google Maps com avaliações (após o GBP estar ativo)
- Formas de pagamento aceitas *(a confirmar com o cliente)*

### 11.3 Mobile-first, sem exceção

O tráfego de busca local para material de construção é majoritariamente mobile, e boa parte da consulta acontece no próprio canteiro de obra, com uma mão só e conexão instável. Consequências de projeto:

- Barra fixa inferior em mobile: **[Ligar]** | **[WhatsApp]**
- Área de toque mínima de 48×48 px
- Sem hover como única forma de revelar informação
- Listas de produtos em acordeão em mobile (evita rolagem infinita)
- Testar em conexão 4G simulada e com throttling de CPU 4x

---

## 12. Acessibilidade

- Contraste mínimo WCAG AA (4.5:1 em texto normal, 3:1 em texto grande)
- Foco de teclado visível em todos os elementos interativos
- HTML semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- `alt` em todas as imagens; `alt=""` em decorativas
- `aria-label` em botões só com ícone
- `prefers-reduced-motion` respeitado
- Formulário com `<label>` associado a cada campo, e erros descritos em texto (não só por cor)

---

## 13. Checklist de lançamento

**Conteúdo**
- [ ] 11 páginas com título, descrição e H1 únicos
- [ ] 10 imagens de categoria otimizadas com `alt` descritivo
- [ ] Foto da fachada aplicada no hero e em "Onde estamos"
- [ ] Todos os `[CONFIRMAR]` da copy resolvidos com o cliente
- [ ] Política de privacidade publicada

**Técnico**
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade, SEO
- [ ] Core Web Vitals dentro das metas
- [ ] `sitemap.xml` e `robots.txt` no ar
- [ ] Todo JSON-LD validado no Rich Results Test
- [ ] Canonical autorreferencial em todas as páginas
- [ ] `/obrigado` com `noindex`
- [ ] HTTPS + redirect 301 de http e de www (ou vice-versa)
- [ ] Página 404 personalizada com links para as categorias

**Rastreamento**
- [ ] GTM instalado e em modo de visualização testado
- [ ] GA4 recebendo todos os eventos da seção 10.1
- [ ] Conversões do Google Ads importadas e marcadas como primárias
- [ ] Consent Mode v2 configurado
- [ ] Search Console verificado e sitemap enviado
- [ ] Todos os links `wa.me` testados em dispositivo real

**Google Ads**
- [ ] GBP criado, verificado e vinculado ao Ads
- [ ] Campanhas com correspondência 1:1 entre grupo e URL
- [ ] Negativadas de conta aplicadas
- [ ] Segmentação por raio + "Presença"
- [ ] Programação de anúncios espelhando o horário da loja
- [ ] Todos os recursos/extensões configurados

---

## 14. Fases de entrega

| Fase | Escopo | Saída |
|---|---|---|
| **1 — Fundação** | Setup do Next.js, tokens do `design-system/` mapeados, componentes base, `categorias.ts` populado | Ambiente funcional |
| **2 — Home** | Todas as seções da home + schema + fachada | Home revisável |
| **3 — Categorias** | Template dinâmico + 10 páginas + imagens | 11 páginas no ar |
| **4 — Técnico** | Rastreamento, consentimento, sitemap, otimização de CWV | Aprovado no checklist |
| **5 — Ads** | Campanhas, conversões, GBP | Campanhas ativas |
| **6 — Otimização** | Revisão de termos de pesquisa, testes de CTA, ajustes de lance | Contínuo |

---

## 15. Pendências de informação

Itens que precisam de resposta do cliente antes ou durante a fase 1. Estão marcados como `[CONFIRMAR]` na copy — **nenhum deles foi inventado no texto**.

| # | Pendência | Impacta |
|---|---|---|
| 1 | Domínio a ser usado | Todo o SEO, schema, sitemap |
| 2 | O telefone (62) 98517-2398 tem WhatsApp ativo? É WhatsApp Business? | Conversão primária |
| 3 | Razão social e CNPJ | Rodapé, política de privacidade, schema |
| 4 | Há entrega? Qual raio e condição de frete? | Copy, diferenciais, FAQ |
| 5 | Formas de pagamento (Pix, cartão, parcelamento, prazo/faturado) | Sinal de confiança, FAQ |
| 6 | Há quantos anos a loja opera? | Autoridade na copy |
| 7 | Atende construtoras/obras (volume) ou só varejo? | Segmentação e copy |
| 8 | Marcas de tinta e cimento trabalhadas | Copy e keywords de marca |
| 9 | Trabalha com esquadrias de alumínio, madeira, PVC ou aço? | Página `/portas-e-janelas` |
| 10 | "Ferragista completa" e "ferramentas" são seções distintas na loja? | Consolidação de páginas (ver 4.1) |
| 11 | Faz corte/entrega de areia e brita a granel, ou só ensacado? | Página `/areia-e-brita-ensacada` |
| 12 | Nomes exatos das pastas `design-system/` e da fachada no repositório | Caminhos no código |
| 13 | Orçamento mensal previsto para o Google Ads | Estrutura de campanha e metas |
