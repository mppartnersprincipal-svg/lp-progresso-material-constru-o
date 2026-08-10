/**
 * Copy da HOME — transcrita PALAVRA POR PALAVRA de Docs/COPY-Progresso.md §0.
 * NÃO reescrever, NÃO "melhorar". Qualquer mudança de texto acontece primeiro
 * no doc de copy.
 */

export const homeMeta = {
  title: "Progresso Materiais de Construção | Aparecida de Goiânia",
  description:
    "Loja completa de material de construção na Av. Graça Aranha, Aparecida de Goiânia. Elétrica, hidráulica, tintas, ferragens e cimento. Aberto todo dia.",
} as const;

export const hero = {
  h1: "Material de construção em Aparecida de Goiânia",
  subtitulo:
    "Elétrica, hidráulica, tintas, ferragens, cimento e ferramentas no mesmo lugar. Loja física na Av. Graça Aranha, Jardim Nova Era — e aberta também aos domingos.",
  ctaPrimario: "Fazer orçamento no WhatsApp",
  ctaSecundario: "Ligar: (62) 98517-2398",
} as const;

/** Barra de confiança — faixa horizontal, alto contraste (PRD §6.1 #3). */
export const barraConfianca = [
  "Loja física no Jardim Nova Era",
  "Aberto todos os dias",
  "Orçamento pelo WhatsApp",
  "(62) 98517-2398",
] as const;

export const gridCategorias = {
  h2: "O que você encontra na loja",
  apoio:
    "Dez linhas completas para obra nova, reforma e manutenção. Clique na que você precisa.",
} as const;

export const porQue = {
  h2: "Por que comprar aqui",
  blocos: [
    {
      titulo: "Resolve a obra inteira numa parada",
      texto:
        "Da fundação ao acabamento. Você não perde a manhã indo em três lojas para juntar cimento, fio e tinta.",
    },
    {
      titulo: "Aberto quando você tem tempo",
      texto:
        "Segunda a sábado até de tarde e domingo pela manhã. Descobriu no fim de semana que faltou material? A loja está aberta.",
    },
    {
      titulo: "Orçamento pelo WhatsApp",
      texto:
        "Manda a lista, a foto da peça ou o nome do produto. A gente confere o estoque e responde com o preço.",
    },
    // TODO [CONFIRMAR]: 4º bloco "Atendimento de quem conhece obra" — há
    // quantos anos a loja opera? Se houver tempo de casa relevante, usar aqui:
    // "X anos atendendo obras da região" é o argumento de autoridade mais
    // forte disponível. Omitido até confirmação.
  ],
} as const;

export const ondeEstamos = {
  h2: "Onde estamos",
  // TODO [CONFIRMAR]: número/quadra/lote para completar o endereço
  endereco: "Av. Graça Aranha — Jardim Nova Era, Aparecida de Goiânia - GO, 74916-379",
  texto:
    "Estamos na divisa com Goiânia, com acesso fácil pela Avenida Rio Verde e a poucos minutos do Buriti Shopping. Atendemos toda a região do Jardim Nova Era, Parque Amazônia, Vila Mariana, Cidade Vera Cruz, Jardim Luz e bairros vizinhos.",
  horariosTitulo: "Horário de funcionamento",
  cta: "Como chegar",
} as const;

/**
 * FAQ da home — SOMENTE perguntas confirmadas (as mesmas marcadas no schema
 * FAQPage; marcar pergunta invisível viola diretriz do Google — PRD §8.3-C).
 */
export const faqHome = [
  {
    pergunta: "Onde fica a Progresso Materiais de Construção?",
    resposta:
      "Na Av. Graça Aranha, Jardim Nova Era, Aparecida de Goiânia - GO, CEP 74916-379. Ficamos na divisa com Goiânia, com acesso pela Avenida Rio Verde.",
  },
  {
    pergunta: "Qual o horário de funcionamento?",
    resposta:
      "Segunda a sexta das 7h30 às 18h, sábado das 7h30 às 13h e domingo das 7h30 às 12h.",
  },
  {
    pergunta: "A Progresso abre aos domingos?",
    resposta: "Sim. Aos domingos atendemos das 7h30 às 12h.",
  },
  {
    pergunta: "Como faço um orçamento?",
    resposta:
      "Chame no WhatsApp (62) 98517-2398 com a lista de materiais ou uma foto do produto. Respondemos com preço e disponibilidade.",
  },
  // TODO [CONFIRMAR]: "Quais formas de pagamento vocês aceitam?" — Pix,
  // dinheiro, cartão de débito/crédito, parcelamento, faturado para
  // construtora. Omitida até confirmação.
  // TODO [CONFIRMAR]: "Vocês entregam?" — faz entrega? Qual raio? Frete
  // grátis acima de qual valor? Se não houver entrega, remover esta pergunta
  // em vez de dar resposta evasiva. Omitida até confirmação.
] as const;

export const ctaFinal = {
  h2: "Precisa de material hoje?",
  texto: "Manda a lista no WhatsApp que a gente confere o estoque e passa o preço.",
  botao: "Fazer orçamento no WhatsApp",
} as const;
