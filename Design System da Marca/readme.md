# Progresso Distribuidora — Design System

Sistema de design criado a partir do logotipo da **Progresso Distribuidora** (materiais para construção). Fonte fornecida: apenas o logo (`assets/logo-progresso.jpg`). Tudo o mais (tipografia, tokens, componentes) foi derivado do logo — trocas e ajustes são bem-vindos.

Uso principal: **landing pages** e materiais de marketing da distribuidora.

## Contexto
Distribuidora de materiais para construção. Público: construtoras, pedreiros/empreiteiros e consumidor final de obra. A marca transmite solidez (navy), energia e ação (laranja) e movimento/progresso (itálico, barras diagonais).

## CONTENT FUNDAMENTALS (tom e escrita)
- Idioma: português (Brasil). Direto, confiante, sem rodeios. Voz de quem entende de obra.
- Tratamento: "você". Frases curtas, verbos de ação: "Peça seu orçamento", "Receba na obra".
- Títulos (H1/H2): CAIXA ALTA, itálico, curtos (2–6 palavras). Ex.: "TUDO PARA SUA OBRA".
- Eyebrows/labels: caixa alta espaçada (tracking .18em). Ex.: "DESDE 1998 · ENTREGA RÁPIDA".
- Sem emoji. Números concretos valem mais que adjetivos ("+ de 5.000 itens", "entrega em 24h").
- CTAs no imperativo: "Fale com um vendedor", "Ver catálogo".

## VISUAL FOUNDATIONS
- **Cores**: Navy `#1C2C47` (autoridade, fundos escuros e títulos) + Laranja `#E8731B` (ação, CTAs, destaques). Neutros quentes off-white (`#F6F5F3`). Máx. 2 fundos por página: claro (padrão) e navy (seções de impacto). Laranja nunca como fundo de seção inteira — só banners/CTAs/detalhes.
- **Tipografia**: Kanit (display; bold/extra-bold, itálico, uppercase — eco do lettering do logo) + Barlow (corpo/UI). Corpo nunca itálico.
- **Motivo da marca**: diagonais. Barras `///` laranja (como no símbolo), banners em parallelogramo (`transform: skewX(var(--skew))`), cortes diagonais entre seções. Usar com moderação: 1–2 por seção.
- **Fundos**: cores chapadas; sem gradientes. Fotos de obra/produto podem ser full-bleed com overlay navy (rgba(21,34,56,.72)).
- **Bordas/raios**: cantos firmes — raio 3–10px, nunca pill em cards. Pill só em badges/tags.
- **Sombras**: suaves e azuladas (tokens \--shadow-sm/md/lg). Cards: fundo branco, borda `--border`, sombra sm; hover eleva p/ md.
- **Hover**: escurece 1 passo (laranja 500→600); links ganham sublinhado. Press: 1 passo mais escuro (600→700). Transições 120–220ms, easing \--ease-brand. Sem bounces.
- **Foco**: anel `0 0 0 3px var(--focus-ring)`.
- **Layout**: container 1140px; seções com respiro generoso (64–128px vertical). Transparência/blur: não usar (exceto overlay sobre foto).
- **Imagens**: fotos reais de obra/materiais, tons quentes; sem ilustração cartoon. (Nenhuma imagem fornecida ainda — usar placeholders e pedir fotos reais.)

## ICONOGRAPHY
- Nenhum ícone fornecido. Padrão adotado: **Lucide** via CDN (traço 2px, cantos retos — combina com o caráter industrial). Cor: herda o texto; destaque em laranja.
  `<script src="https://unpkg.com/lucide@latest"></script>` + `lucide.createIcons()`, ou SVGs copiados.
- Sem emoji, sem icon font própria. Unicode apenas para separadores ("·").

## Logo
- Arquivo único: `assets/logo-progresso.jpg` (JPEG, fundo cinza-claro #EDEDEB embutido — usar apenas sobre fundos claros ou dentro de um cartão branco). **Pedir ao cliente PNG com fundo transparente e versão para fundo escuro.**
- Nunca redesenhar o logo. Em contextos onde o JPEG não serve (fundo navy), escrever "PROGRESSO" em Kanit 800 itálico uppercase navy/branco + "DISTRIBUIDORA" em banner laranja skewado — padrão do componente de wordmark tipográfico (ver ui_kits/landing).

## Intentional additions
- Conjunto padrão de componentes (não havia fonte além do logo): Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip.

## Índice
- `styles.css` — entrada global (importa tokens/).
- `tokens/` — colors, typography, spacing, effects, fonts, base.
- `assets/` — logo.
- `guidelines/` — specimen cards das fundações.
- `components/core|forms|feedback` — primitivas React (.jsx + .d.ts + .prompt.md).
- `ui_kits/landing/` — exemplo de landing page.
- `SKILL.md` — uso como Agent Skill.

## Caveats
- Fontes são substitutas do Google Fonts (Kanit ≈ lettering do logo; Barlow para corpo). Se existir a fonte oficial, enviar os arquivos.
- Logo somente em JPEG com fundo. Pedir PNG transparente + variante para fundo escuro.
