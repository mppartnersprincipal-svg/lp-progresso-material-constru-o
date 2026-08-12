/**
 * FONTE ÚNICA de dados das 10 páginas de categoria (PRD §5.1).
 * Conteúdo transcrito de Docs/COPY-Progresso.md — NÃO editar texto aqui sem
 * refletir no doc de copy (e vice-versa).
 *
 * REGRA DO PROJETO: nenhum TODO [CONFIRMAR] pode ser preenchido por suposição.
 * Itens não confirmados ficam comentados até o cliente responder.
 * Um erro aqui se propaga por 10 páginas — tratar como código de produção.
 */

export type Categoria = {
  slug: string;
  nome: string;
  /** Texto do card no grid da home (COPY §0 — Grid de categorias) */
  cardTexto: string;
  h1: string;
  metaTitle: string; // ≤ 60 caracteres
  metaDescription: string; // ≤ 155 caracteres
  heroSubtitulo: string;
  introducao: string; // 80–120 palavras, texto único por página
  imagem: {
    src: string;
    alt: string;
    /** Dimensões reais do arquivo em px (usadas no og:image) */
    width: number;
    height: number;
    creditoObrigatorio?: string;
  };
  produtos: string[];
  diferenciais: { titulo: string; texto: string }[];
  faq: { pergunta: string; resposta: string }[];
  correlatas: string[]; // slugs
  keywordPrincipal: string;
  mensagemWhatsApp: string;
};

// Padrão de alt (PRD §7.2) — usado nas 2 categorias que ainda estão com
// imagem de banco (Pexels). As demais 8 usam fotos reais da loja (12/08/2026)
// com alt específico do que a foto mostra. Ver docs/creditos-imagens.md.
const alt = (nome: string) =>
  `${nome} disponível na Progresso Materiais de Construção em Aparecida de Goiânia`;

export const categorias: Categoria[] = [
  {
    slug: "material-eletrico",
    nome: "Material Elétrico",
    cardTexto: "Fios, disjuntores, quadros, tomadas e iluminação",
    h1: "Material elétrico em Aparecida de Goiânia",
    metaTitle: "Material Elétrico em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Fios, cabos, disjuntores, quadros, tomadas e iluminação em Aparecida de Goiânia. Loja física no Jardim Nova Era. Orçamento rápido no WhatsApp.",
    heroSubtitulo:
      "Do fio ao quadro de distribuição. Linha elétrica completa para obra nova, reforma e manutenção, com estoque na loja.",
    introducao:
      "Material elétrico não admite improviso: bitola errada esquenta, disjuntor mal dimensionado desarma e instalação fora de norma vira problema caro depois. Na Progresso você encontra a linha elétrica completa em Aparecida de Goiânia — de fio flexível e cabo PP a quadros de distribuição, DR e DPS —, com atendimento de quem sabe o que cada obra pede. Se você tem a lista do eletricista, manda no WhatsApp que conferimos item por item.",
    imagem: {
      src: "/images/categorias/material-eletrico.jpg",
      alt: "Parede de tomadas, interruptores e módulos elétricos na loja da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 1280,
      height: 720,
    },
    produtos: [
      "Fios e cabos flexíveis (1,5mm · 2,5mm · 4mm · 6mm · 10mm)",
      "Cabos PP e cabos para instalação externa",
      "Disjuntores monopolares, bipolares e tripolares",
      "Dispositivos DR e DPS",
      "Quadros de distribuição e caixas de passagem",
      "Tomadas, interruptores e espelhos",
      "Eletrodutos, conduletes, curvas e luvas",
      "Lâmpadas LED, plafons e luminárias",
      "Refletores e iluminação externa",
      "Fitas isolantes, terminais e conectores",
      "Sensores de presença e campainhas",
    ],
    diferenciais: [
      {
        titulo: "Bitola certa para cada circuito",
        texto:
          "Diga a carga ou o cômodo e ajudamos a escolher o fio e o disjuntor adequados.",
      },
      {
        titulo: "Estoque de reposição",
        texto: "Item que queimou no fim de semana você resolve no domingo de manhã.",
      },
      {
        titulo: "Elétrica e ferramenta no mesmo balcão",
        texto: "Alicate, fita, furadeira e broca você leva junto.",
      },
    ],
    faq: [
      // TODO [CONFIRMAR]: "Vocês vendem fio elétrico por metro?" — vende cortado
      // por metro ou só rolo fechado de 100m? FAQ omitida até confirmação.
      {
        pergunta: "Tem quadro de distribuição montado?",
        resposta:
          "Trabalhamos com quadros de distribuição em diferentes capacidades, além de disjuntores, DR e DPS para montagem. Consulte a disponibilidade pelo WhatsApp.",
      },
      {
        pergunta: "Qual a diferença entre disjuntor DR e DPS?",
        resposta:
          "O DR protege pessoas contra choque elétrico, desarmando quando detecta fuga de corrente. O DPS protege os equipamentos contra surtos de tensão, como os causados por raios. São complementares — a norma exige os dois em instalações residenciais novas.",
      },
      {
        pergunta: "Vocês abrem no domingo?",
        resposta: "Sim, das 7h30 às 12h.",
      },
    ],
    correlatas: ["ferramentas", "ferragens"],
    keywordPrincipal: "material elétrico aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de material elétrico. Vocês têm:",
  },
  {
    slug: "material-hidraulico",
    nome: "Material Hidráulico",
    cardTexto: "Tubos, conexões, registros e caixas d'água",
    h1: "Material hidráulico em Aparecida de Goiânia",
    metaTitle: "Material Hidráulico em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Tubos e conexões PVC, registros, caixas d'água e vedantes em Aparecida de Goiânia. Loja física no Jardim Nova Era, aberta inclusive aos domingos.",
    heroSubtitulo:
      "Tubos, conexões, registros e caixas d'água para água fria, esgoto e reparo emergencial.",
    introducao:
      "Vazamento não espera horário comercial. A Progresso mantém a linha hidráulica completa em Aparecida de Goiânia — tubos e conexões de PVC soldável, roscável e de esgoto, registros, caixas d'água, engates e vedantes — para quem está tocando a obra e para quem só precisa resolver o cano que estourou. Estamos abertos de segunda a domingo, e no sábado e no domingo pela manhã, quando quase toda loja da região já fechou.",
    imagem: {
      src: "/images/categorias/material-hidraulico.jpg",
      alt: "Expositor de itens hidráulicos — torneiras, sifões e engates flexíveis — na loja da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 899,
      height: 506,
    },
    produtos: [
      "Tubos e conexões PVC soldável (água fria)",
      "Tubos e conexões PVC roscável",
      "Tubos e conexões PVC para esgoto",
      "Joelhos, tês, luvas, buchas de redução e adaptadores",
      "Registros de gaveta, de pressão e esfera",
      "Caixas d'água e tampas",
      "Torneiras boia e válvulas",
      "Caixas sifonadas, ralos e grelhas",
      "Sifões e engates flexíveis",
      "Adesivo plástico, fita veda-rosca e solução limpadora",
      // TODO [CONFIRMAR]: trabalha com CPVC / PPR para água quente?
      // TODO [CONFIRMAR]: vende bombas d'água e pressurizadores?
    ],
    diferenciais: [
      {
        titulo: "Aberto no fim de semana",
        texto: "Vazamento no domingo de manhã tem solução a poucos minutos.",
      },
      {
        titulo: "Conexão certa na primeira viagem",
        texto: "Traga a peça velha ou mande a foto: identificamos a bitola e o tipo.",
      },
      {
        titulo: "Hidráulica e acabamento juntos",
        texto: "Do tubo dentro da parede ao metal do banheiro, tudo na mesma loja.",
      },
    ],
    faq: [
      {
        pergunta: "Qual a diferença entre PVC soldável e roscável?",
        resposta:
          "O soldável é unido com adesivo plástico e forma uma peça única — é o padrão para água fria embutida na parede. O roscável é unido por rosca com fita veda-rosca e permite desmontagem, sendo usado onde é preciso acesso, como em ligações de bombas e registros aparentes.",
      },
      {
        pergunta: "Vocês têm peça para reparo de vazamento?",
        resposta:
          "Sim. Trabalhamos com a linha de conexões, registros, sifões, engates e vedantes para reparo. Chame no WhatsApp com a foto da peça que identificamos o modelo.",
      },
      {
        pergunta: "Que tamanho de caixa d'água eu preciso?",
        resposta:
          "A referência usual é de cerca de 150 a 200 litros por morador, considerando reserva para um dia de consumo. Para uma família de quatro pessoas, caixas de 500 a 1.000 litros costumam atender. Consulte-nos para o seu caso.",
      },
    ],
    correlatas: ["metais-e-loucas-sanitarias", "ferramentas"],
    keywordPrincipal: "material hidráulico aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de material hidráulico. Vocês têm:",
  },
  {
    slug: "tintas-e-pintura",
    nome: "Tintas e Pintura",
    cardTexto: "Tintas, massas, texturas, rolos e pincéis",
    h1: "Tintas e material de pintura em Aparecida de Goiânia",
    metaTitle: "Loja de Tintas em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Tinta acrílica, látex, esmalte, massa corrida, textura, rolos e pincéis em Aparecida de Goiânia. Loja física no Jardim Nova Era. Orçamento no WhatsApp.",
    heroSubtitulo:
      "Tinta, massa, textura e todo o acessório para pintar parede, teto, ferro e madeira.",
    introducao:
      "Pintura é a etapa que aparece — e a que mais decepciona quando o material é errado. Tinta de fachada aplicada em área interna desperdiça dinheiro; tinta interna na fachada descasca em um ano. Na Progresso você encontra tintas acrílicas, látex PVA, esmaltes sintéticos, massas, texturas e todo o material de preparo em Aparecida de Goiânia, com orientação sobre qual linha usar em cada superfície e quanto comprar para a metragem da sua obra.",
    imagem: {
      src: "/images/categorias/tintas-e-pintura.jpg",
      alt: "Expositor de pincéis, rolos, fitas e acessórios de pintura na loja da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 1200,
      height: 675,
    },
    produtos: [
      "Tinta acrílica para interior e exterior (fosca, acetinada e semibrilho)",
      "Tinta látex PVA",
      "Esmalte sintético para ferro e madeira",
      "Tinta para piso e demarcação",
      "Massa corrida e massa acrílica",
      "Selador acrílico e fundo preparador",
      "Textura e grafiato",
      "Rolos de lã, espuma e texturizados",
      "Pincéis, trinchas e broxas",
      "Bandejas, extensores e cabos",
      "Lixas, espátulas e desempenadeiras",
      "Fita crepe e lona plástica",
      "Aguarrás, thinner e removedores",
      // TODO [CONFIRMAR]: quais marcas de tinta a loja trabalha? Marca é
      // keyword de alto volume — vale página ou seção própria.
      // TODO [CONFIRMAR]: a loja faz máquina de tingimento / cores sob encomenda?
    ],
    diferenciais: [
      {
        titulo: "Cálculo de quantidade",
        texto:
          "Diga a metragem e quantas demãos: ajudamos a estimar quantos galões ou latas comprar.",
      },
      {
        titulo: "Do preparo ao acabamento",
        texto: "Massa, selador, lixa, tinta e rolo na mesma compra.",
      },
      {
        titulo: "Aberto no fim de semana",
        texto: "O momento em que a maioria das pessoas realmente pinta a casa.",
      },
    ],
    faq: [
      {
        pergunta: "Quanto rende uma lata de tinta de 18 litros?",
        resposta:
          "O rendimento varia por marca e tipo, mas tintas acrílicas costumam render entre 250 e 350 m² por demão em superfície já preparada. Como regra prática para orçar, considere duas demãos e verifique o rendimento informado na embalagem do produto escolhido.",
      },
      {
        pergunta: "Qual a diferença entre massa corrida e massa acrílica?",
        resposta:
          "A massa corrida é à base de PVA e serve apenas para áreas internas protegidas da umidade. A massa acrílica resiste à água e é a indicada para áreas externas, fachadas e ambientes úmidos como banheiros e áreas de serviço.",
      },
      {
        pergunta: "Preciso passar selador antes da tinta?",
        resposta:
          "Em parede nova de reboco ou massa, sim — o selador uniformiza a absorção e reduz o consumo de tinta, o que costuma compensar o custo. Em repintura sobre pintura firme e em bom estado, geralmente não é necessário.",
      },
    ],
    correlatas: ["impermeabilizantes", "ferramentas"],
    keywordPrincipal: "loja de tintas aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de tinta. Vou pintar:",
  },
  {
    slug: "impermeabilizantes",
    nome: "Impermeabilizantes",
    cardTexto: "Mantas, argamassas poliméricas e selantes",
    h1: "Impermeabilizantes em Aparecida de Goiânia",
    metaTitle: "Impermeabilizantes em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Manta asfáltica, argamassa polimérica, impermeabilizante acrílico e selantes em Aparecida de Goiânia. Loja física no Jardim Nova Era.",
    heroSubtitulo:
      "Manta, argamassa polimérica, aditivo e selante para laje, box, caixa d'água e fundação.",
    introducao:
      "Infiltração é o defeito mais caro de corrigir depois de pronto: quase sempre significa quebrar acabamento novo para resolver um problema de estrutura. A Progresso trabalha com a linha completa de impermeabilizantes em Aparecida de Goiânia — manta asfáltica, argamassa polimérica, impermeabilizante acrílico, aditivo para concreto e selantes —, com orientação sobre qual produto usar em cada aplicação. Laje exposta, box de banheiro, caixa d'água e baldrame pedem soluções diferentes.",
    imagem: {
      src: "/images/categorias/impermeabilizantes.jpg",
      alt: alt("Impermeabilizantes"),
      width: 1600,
      height: 900,
    },
    produtos: [
      "Manta asfáltica aluminizada e manta líquida",
      "Impermeabilizante acrílico para laje e telhado",
      "Argamassa polimérica flexível (box, piscina, caixa d'água)",
      "Aditivo impermeabilizante para concreto e argamassa",
      "Impermeabilizante para fundação e baldrame",
      "Primer e emulsão asfáltica",
      "Hidrofugante para fachada e pedra",
      "Selante de poliuretano e silicone",
      "Veda-calha e veda-telha",
      "Tela de reforço para impermeabilização",
    ],
    diferenciais: [
      {
        titulo: "Produto certo para cada aplicação",
        texto:
          "Laje, box, piscina e fundação não usam o mesmo material. Explicamos a diferença antes da compra.",
      },
      {
        titulo: "Sistema completo",
        texto: "Primer, impermeabilizante, tela e proteção mecânica na mesma lista.",
      },
      {
        titulo: "Clima de Goiás no cálculo",
        texto:
          "Laje exposta a sol forte e chuva concentrada exige produto com resistência a variação térmica.",
      },
    ],
    faq: [
      {
        pergunta: "Qual impermeabilizante usar em laje exposta?",
        resposta:
          "Para laje exposta ao sol e à chuva, as opções mais usadas são a manta asfáltica com proteção mecânica e o impermeabilizante acrílico com tela de reforço. A manta tem maior durabilidade e o acrílico é mais simples de aplicar. Consulte-nos com a metragem e o uso da laje.",
      },
      {
        pergunta: "Argamassa polimérica serve para box de banheiro?",
        resposta:
          "Sim. A argamassa polimérica flexível é o produto mais indicado para box, áreas molhadas internas, caixas d'água e piscinas, por aderir bem à alvenaria e acompanhar pequenas movimentações da estrutura.",
      },
      {
        pergunta: "Quanto tempo antes do revestimento posso aplicar?",
        resposta:
          "Cada produto tem seu tempo de cura, geralmente informado na embalagem e variando de alguns dias a uma semana. Aplicar revestimento antes da cura completa compromete todo o serviço.",
      },
    ],
    correlatas: ["tintas-e-pintura", "cimento-e-argamassa"],
    keywordPrincipal: "impermeabilizante aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de impermeabilizante para:",
  },
  {
    slug: "metais-e-loucas-sanitarias",
    nome: "Metais e Louças Sanitárias",
    cardTexto: "Vasos, cubas, torneiras, chuveiros e acabamentos",
    h1: "Metais e louças sanitárias em Aparecida de Goiânia",
    metaTitle: "Metais e Louças em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Vaso sanitário, cuba, torneira, chuveiro e acabamentos em Aparecida de Goiânia. Loja física no Jardim Nova Era, aberta inclusive aos domingos.",
    heroSubtitulo:
      "Vasos, cubas, tanques, torneiras, chuveiros e acabamentos para banheiro e cozinha.",
    introducao:
      "O banheiro e a cozinha são onde o acabamento fica à vista todo dia — e onde a peça de qualidade duvidosa aparece rápido, em forma de gotejamento e mancha. Na Progresso você encontra louças e metais sanitários em Aparecida de Goiânia: vasos com caixa acoplada, lavatórios, cubas, tanques, torneiras, misturadores, chuveiros e todo o acabamento de registro. E, como também temos a linha hidráulica completa, a instalação sai da loja com tudo que precisa — inclusive o sifão e o engate que sempre faltam.",
    imagem: {
      src: "/images/categorias/metais-e-loucas-sanitarias.jpg",
      alt: "Parede de torneiras, registros e acabamentos da linha de metais na loja da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 899,
      height: 506,
    },
    produtos: [
      "Vasos sanitários com caixa acoplada e convencionais",
      "Assentos sanitários",
      "Lavatórios, cubas de apoio e de embutir",
      "Tanques e cubas de cozinha",
      "Torneiras de banheiro, cozinha e tanque",
      "Misturadores e monocomandos",
      "Chuveiros, duchas e chuveiros elétricos",
      "Acabamentos de registro",
      "Válvulas de descarga e reparos",
      "Sifões cromados e flexíveis",
      "Papeleiras, saboneteiras e cabides",
      "Válvulas de escoamento",
    ],
    diferenciais: [
      {
        titulo: "Louça e hidráulica na mesma compra",
        texto: "O engate, o sifão e a válvula saem junto com a peça.",
      },
      {
        titulo: "Peça de reposição",
        texto: "Reparo de descarga, vedação e acabamento você resolve no balcão.",
      },
      {
        titulo: "Aberto todos os dias",
        texto: "Inclusive domingo pela manhã.",
      },
    ],
    faq: [
      {
        pergunta: "Vocês vendem vaso sanitário com caixa acoplada?",
        resposta:
          "Sim, trabalhamos com vasos com caixa acoplada e modelos convencionais. Consulte cores e modelos disponíveis pelo WhatsApp.",
      },
      {
        pergunta: "Tem peça de reposição para descarga?",
        resposta:
          "Sim. Trabalhamos com reparos de válvula de descarga, mecanismos de caixa acoplada, vedações e acabamentos. Mande a foto da peça pelo WhatsApp para identificarmos o modelo.",
      },
      {
        pergunta: "A loja tem acabamento de registro avulso?",
        resposta:
          "Sim, trabalhamos com acabamentos de registro avulsos em diferentes padrões e acabamentos.",
        // TODO [CONFIRMAR]: quais marcas/linhas de acabamento de registro —
        // complementar a resposta acima quando o cliente confirmar.
      },
    ],
    correlatas: ["material-hidraulico", "portas-e-janelas"],
    keywordPrincipal: "metais e louças sanitárias aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de metais/louças. Estou procurando:",
  },
  {
    slug: "ferramentas",
    nome: "Ferramentas",
    cardTexto: "Manuais, elétricas e equipamentos de proteção",
    h1: "Ferramentas em Aparecida de Goiânia",
    metaTitle: "Loja de Ferramentas em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Furadeira, esmerilhadeira, martelo, alicate, trena e EPI em Aparecida de Goiânia. Ferramentas manuais e elétricas no Jardim Nova Era.",
    heroSubtitulo:
      "Ferramentas manuais, elétricas e equipamentos de proteção para obra e manutenção.",
    introducao:
      "Ferramenta boa não é gasto, é o que faz o serviço sair no prazo e sem retrabalho. Na Progresso você encontra ferramentas em Aparecida de Goiânia para o profissional que trabalha todo dia e para quem só precisa resolver o conserto do fim de semana: furadeiras, esmerilhadeiras, martelos, alicates, chaves, trenas, níveis e equipamento de proteção. E, como aqui você também compra o material, sai da loja com a broca, o parafuso e a bucha certos para o serviço.",
    imagem: {
      src: "/images/categorias/ferramentas.jpg",
      alt: "Parede de ferramentas manuais — serrotes, chaves de fenda, alicates e pistolas — no balcão da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 899,
      height: 506,
    },
    produtos: [
      "Furadeiras, parafusadeiras e marteletes",
      "Esmerilhadeiras, serras e discos de corte",
      "Brocas para concreto, madeira e metal",
      "Martelos, marretas e talhadeiras",
      "Alicates universais, de corte e de bico",
      "Chaves de fenda, Philips e jogos de chaves",
      "Chave inglesa, grifo e de boca",
      "Trenas, níveis, esquadros e prumos",
      "Colheres de pedreiro, desempenadeiras e réguas",
      "Enxadas, pás, picaretas e carrinhos de mão",
      "Escadas e cavaletes",
      "EPI: luvas, óculos, capacete, máscara e botina",
      "Caixas e organizadores de ferramentas",
    ],
    diferenciais: [
      {
        titulo: "Ferramenta e material juntos",
        texto: "Broca, parafuso e bucha na medida certa, na mesma compra.",
      },
      {
        titulo: "Linha profissional e doméstica",
        texto: "Do uso diário em obra ao reparo de fim de semana.",
      },
      {
        titulo: "Aberto no fim de semana",
        texto: "Sábado e domingo de manhã, quando o serviço em casa acontece.",
      },
    ],
    faq: [
      {
        pergunta: "Vocês vendem ferramentas elétricas?",
        resposta:
          "Sim, trabalhamos com furadeiras, parafusadeiras, esmerilhadeiras, serras e martelete.",
        // TODO [CONFIRMAR]: marcas de ferramentas elétricas trabalhadas —
        // complementar a resposta acima quando o cliente confirmar.
      },
      {
        pergunta: "Tem EPI para obra?",
        resposta:
          "Sim. Trabalhamos com luvas, óculos de proteção, capacete, máscara, protetor auricular e botina de segurança.",
      },
      // TODO [CONFIRMAR]: "Vocês alugam ferramentas?" — a loja faz locação?
      // Se sim, é diferencial forte e merece destaque no hero. Se não,
      // a pergunta sai. FAQ omitida até confirmação.
    ],
    correlatas: ["ferragens", "material-eletrico"],
    keywordPrincipal: "loja de ferramentas aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de ferramenta. Estou procurando:",
  },
  {
    slug: "ferragens",
    nome: "Ferragens",
    cardTexto: "Parafusos, buchas, dobradiças, fechaduras e cadeados",
    h1: "Ferragista completa em Aparecida de Goiânia",
    metaTitle: "Ferragista em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Parafusos, buchas, pregos, dobradiças, fechaduras e cadeados em Aparecida de Goiânia. Ferragista completa no Jardim Nova Era, aberta todo dia.",
    heroSubtitulo:
      "Parafuso, bucha, dobradiça, fechadura e cadeado. A peça pequena que trava a obra inteira.",
    introducao:
      "É sempre a peça de dois reais que para o serviço: o parafuso de medida esquisita, a bucha que não segura, a dobradiça que não é a mesma da porta. A ferragista da Progresso, em Aparecida de Goiânia, existe para isso — parafusos, buchas, pregos, arruelas, dobradiças, fechaduras, cadeados, abraçadeiras e fixação em geral, com variedade de medidas. Traga a peça velha ou mande a foto pelo WhatsApp: identificamos a bitola e o modelo antes de você sair de casa.",
    imagem: {
      src: "/images/categorias/ferragens.jpg",
      alt: "Gaveteiros com parafusos, buchas, porcas e fixadores avulsos na loja da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 899,
      height: 506,
    },
    produtos: [
      "Parafusos para madeira, metal, drywall e concreto",
      "Buchas plásticas, de nylon e químicas",
      "Pregos, arruelas, porcas e rebites",
      "Dobradiças, trincos e ferrolhos",
      "Fechaduras de porta interna, externa e de banheiro",
      "Cadeados e correntes",
      "Puxadores e maçanetas",
      "Abraçadeiras, cintas e grampos",
      "Cantoneiras, suportes e mão-francesa",
      "Cabos de aço, roldanas e esticadores",
      "Silicone, colas e fitas adesivas",
      // TODO [CONFIRMAR]: telas, arames e alambrados — a loja tem?
    ],
    diferenciais: [
      {
        titulo: "Variedade de medidas",
        texto: "A bitola exata que a peça pede, não a aproximada.",
      },
      {
        titulo: "Identificação pela foto",
        texto:
          "Mande a imagem do parafuso ou da dobradiça no WhatsApp que localizamos o item.",
      },
      {
        titulo: "Ferragem e ferramenta juntas",
        texto: "Sai com o parafuso, a bucha e a broca do diâmetro certo.",
      },
    ],
    faq: [
      // TODO [CONFIRMAR]: "Vocês vendem parafuso avulso ou só em caixa?" —
      // por unidade, por quilo ou só embalagem fechada? Uma das perguntas mais
      // frequentes em ferragista. FAQ omitida até confirmação.
      {
        pergunta: "Como sei qual bucha usar?",
        resposta:
          "A bucha depende do tipo de parede e do peso a sustentar. Alvenaria, concreto, drywall e gesso pedem buchas diferentes. Diga onde vai fixar e o que vai pendurar que indicamos o conjunto de bucha e parafuso adequado.",
      },
      {
        pergunta: "Tem fechadura para porta de banheiro?",
        resposta:
          "Sim. Trabalhamos com fechaduras internas, externas, de banheiro e de correr, além de maçanetas e acabamentos.",
      },
    ],
    correlatas: ["ferramentas", "portas-e-janelas"],
    keywordPrincipal: "ferragista aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de ferragens. Estou procurando:",
  },
  {
    slug: "areia-e-brita-ensacada",
    nome: "Areia e Brita Ensacada",
    cardTexto: "Areia, brita, pedrisco e pó de pedra em sacos",
    h1: "Areia e brita ensacada em Aparecida de Goiânia",
    metaTitle: "Areia e Brita Ensacada em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Areia, brita, pedrisco e pó de pedra ensacados em Aparecida de Goiânia. Compre a quantidade que a obra precisa, no Jardim Nova Era.",
    heroSubtitulo:
      "Agregados em saco, para quem precisa da quantidade certa sem caçamba na porta de casa.",
    introducao:
      "Nem toda obra comporta uma caçamba de areia parada na calçada por três dias. Para reforma, reparo e serviço pequeno, o agregado ensacado resolve: você compra a quantidade exata, transporta no porta-malas, armazena sem sujeira e não paga por sobra. Na Progresso você encontra areia, brita, pedrisco e pó de pedra ensacados em Aparecida de Goiânia — e, na mesma compra, o cimento e a argamassa que completam o traço.",
    imagem: {
      src: "/images/categorias/areia-e-brita-ensacada.jpg",
      alt: "Sacos de areia e brita ensacadas empilhados em palete no depósito da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 1200,
      height: 675,
    },
    produtos: [
      "Areia fina ensacada (reboco e assentamento)",
      "Areia média ensacada (concreto e argamassa)",
      "Areia grossa ensacada",
      "Brita 0, brita 1 e brita 2",
      "Pedrisco",
      "Pó de pedra",
      // TODO [CONFIRMAR]: peso dos sacos — 20kg? 25kg? Essencial para o
      // cliente calcular quantos sacos comprar.
      // TODO [CONFIRMAR]: a loja também vende a granel / faz entrega de
      // caçamba? Se sim, merece seção própria.
    ],
    diferenciais: [
      {
        titulo: "Compre só o que vai usar",
        texto: "Sem sobra na calçada, sem desperdício, sem caçamba.",
      },
      {
        titulo: "Leva no carro",
        texto: "Saco fechado transporta limpo, sem sujar o porta-malas.",
      },
      {
        titulo: "Traço completo na mesma compra",
        texto: "Areia, brita, cimento e argamassa saem juntos.",
      },
    ],
    faq: [
      // TODO [CONFIRMAR]: "Quantos sacos de areia preciso para 1 m³?" —
      // depende do peso do saco. Pergunta de altíssimo volume de busca;
      // resposta correta pode render posição zero. Omitida até confirmação.
      {
        pergunta: "Qual a diferença entre areia fina, média e grossa?",
        resposta:
          "A areia fina é usada em reboco e acabamento, por deixar a superfície mais lisa. A média é a mais versátil, empregada em argamassa de assentamento e concreto. A grossa é usada em concreto estrutural e serviços que exigem maior resistência.",
      },
      {
        pergunta: "Qual brita usar no concreto?",
        resposta:
          "A brita 1 é a mais usada em concreto de uso geral, como pisos, vigas e lajes residenciais. A brita 0 e o pedrisco são empregados em peças menores e concreto mais fino, e a brita 2 em peças de maior volume.",
      },
      // TODO [CONFIRMAR]: "Vocês entregam?" — entrega, raio e valor do frete.
      // Para agregados é a pergunta decisiva de compra. Omitida até confirmação.
    ],
    correlatas: ["cimento-e-argamassa", "ferramentas"],
    keywordPrincipal: "areia e brita ensacada aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de areia/brita ensacada. Quantidade:",
  },
  {
    slug: "cimento-e-argamassa",
    nome: "Cimento e Argamassas",
    cardTexto: "Cimento, argamassa colante, rejunte e cal",
    h1: "Cimento e argamassas em Aparecida de Goiânia",
    metaTitle: "Cimento e Argamassa em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Cimento, argamassa colante AC-I, AC-II e AC-III, rejunte e cal em Aparecida de Goiânia. Loja física no Jardim Nova Era. Consulte o preço no WhatsApp.",
    heroSubtitulo:
      "Cimento, argamassa colante, rejunte, cal e gesso para toda etapa da obra.",
    introducao:
      "Cimento e argamassa são o item que mais pesa no orçamento de obra por volume comprado, e onde a escolha errada custa caro depois: argamassa AC-I aplicada em fachada solta, porcelanato assentado com colante inadequado descola. Na Progresso você encontra cimento e argamassas em Aparecida de Goiânia — do saco de cimento à argamassa colante AC-III, rejunte, cal e gesso —, com orientação sobre qual tipo usar em cada aplicação. Para quantidade maior, chame no WhatsApp e consulte a condição.",
    imagem: {
      src: "/images/categorias/cimento-e-argamassa.jpg",
      alt: "Sacos de cimento empilhados ao lado de tijolos e argamassas no depósito da Progresso Materiais de Construção em Aparecida de Goiânia",
      width: 899,
      height: 506,
    },
    produtos: [
      // TODO [CONFIRMAR]: além do CP II, quais tipos de cimento (CP ...)?
      // E quais marcas — marca é keyword de alto volume de busca.
      "Cimento CP II, saco de 50kg",
      "Argamassa colante AC-I (interna, cerâmica em parede e piso)",
      "Argamassa colante AC-II (áreas externas e piso sobre piso)",
      "Argamassa colante AC-III (porcelanato e fachada)",
      "Argamassa de assentamento e reboco pronto",
      "Rejunte em diversas cores",
      "Cal hidratada",
      "Gesso e massa única",
      "Aditivos plastificantes e adesivos para argamassa",
    ],
    diferenciais: [
      {
        titulo: "Argamassa certa para cada revestimento",
        texto:
          "Cerâmica, porcelanato e fachada pedem AC diferente. Orientamos antes da compra.",
      },
      {
        titulo: "Consulta de preço rápida",
        texto:
          "Cimento é compra por preço. Mande a quantidade no WhatsApp e receba o valor.",
      },
      {
        titulo: "Agregado no mesmo lugar",
        texto: "Areia e brita ensacada saem junto para fechar o traço.",
      },
    ],
    faq: [
      {
        pergunta: "Qual a diferença entre argamassa AC-I, AC-II e AC-III?",
        resposta:
          "A AC-I é para áreas internas, em cerâmica de parede e piso sem grande exigência. A AC-II resiste a variações de temperatura e umidade, servindo para áreas externas e piso sobre piso. A AC-III tem maior aderência e é a indicada para porcelanato, peças grandes e fachadas.",
      },
      {
        pergunta: "Quanto rende um saco de argamassa colante de 20kg?",
        resposta:
          "O rendimento gira em torno de 4 a 5 m² por saco de 20kg, variando conforme o tamanho da peça e o tipo de desempenadeira usada. Peças maiores consomem mais.",
      },
      {
        pergunta: "Qual o preço do saco de cimento?",
        resposta:
          "O preço do cimento varia conforme a marca e a quantidade comprada. Chame no WhatsApp (62) 98517-2398 informando quantos sacos você precisa e passamos o valor atualizado.",
      },
      // TODO [CONFIRMAR]: "Vocês vendem para construtora, em volume maior?" —
      // atende obra/construtora? Condição por volume? Faturado?
      // FAQ omitida até confirmação.
    ],
    correlatas: ["areia-e-brita-ensacada", "impermeabilizantes"],
    keywordPrincipal: "cimento aparecida de goiânia",
    mensagemWhatsApp: "Olá! Quero saber o preço do cimento/argamassa. Preciso de:",
  },
  {
    slug: "portas-e-janelas",
    nome: "Portas e Janelas",
    cardTexto: "Portas, batentes, janelas e guarnições",
    h1: "Portas e janelas em Aparecida de Goiânia",
    metaTitle: "Portas e Janelas em Aparecida de Goiânia | Progresso",
    metaDescription:
      "Portas de madeira, batentes, janelas de alumínio e guarnições em Aparecida de Goiânia. Loja física no Jardim Nova Era, aberta inclusive aos domingos.",
    heroSubtitulo:
      "Portas, batentes, janelas e todas as ferragens de instalação, na mesma loja.",
    introducao:
      "Porta e janela são compra de medida — errar o vão significa devolver a peça ou quebrar alvenaria. Na Progresso você encontra portas e janelas em Aparecida de Goiânia, com batentes, guarnições, fechaduras e dobradiças para fechar a instalação completa. Antes de comprar, meça o vão de alvenaria (largura e altura) e mande no WhatsApp: conferimos se a medida padrão atende ou se o caso pede peça sob encomenda.",
    imagem: {
      src: "/images/categorias/portas-e-janelas.jpg",
      alt: alt("Portas e janelas"),
      width: 1600,
      height: 900,
    },
    produtos: [
      "Portas de madeira semi-ocas e maciças",
      "Portas prontas com batente e fechadura",
      "Batentes, guarnições e alizares",
      "Portas de banheiro e portas sanfonadas",
      "Janelas de alumínio de correr, maxim-ar e basculante",
      "Vitrôs e janelas para banheiro",
      // TODO [CONFIRMAR]: portas de alumínio — a loja tem?
      "Fechaduras, dobradiças e puxadores",
      "Contramarcos e acessórios de instalação",
      // TODO [CONFIRMAR]: trabalha com esquadrias de PVC? De aço?
      // Faz sob medida ou encomenda?
    ],
    diferenciais: [
      {
        titulo: "Porta e ferragem no mesmo lugar",
        texto: "Fechadura, dobradiça e batente saem junto com a folha.",
      },
      {
        titulo: "Conferência de medida antes da compra",
        texto: "Mande a medida do vão pelo WhatsApp e evite a viagem perdida.",
      },
      {
        titulo: "Acabamento completo",
        texto: "Guarnição, massa e tinta para finalizar o serviço.",
      },
    ],
    faq: [
      {
        pergunta: "Como meço o vão para comprar uma porta?",
        resposta:
          "Meça a largura e a altura do vão de alvenaria, de lado a lado e do piso ao topo, e também a espessura da parede — é ela que determina o batente. Mande as três medidas no WhatsApp que indicamos a peça compatível.",
      },
      // TODO [CONFIRMAR]: "Vocês vendem porta com batente e fechadura já
      // montados?" — trabalha com kit porta pronta? Item de alta procura.
      // FAQ omitida até confirmação.
      // TODO [CONFIRMAR]: "Fazem porta ou janela sob medida?" — aceita
      // encomenda fora do padrão? Qual prazo? FAQ omitida até confirmação.
    ],
    correlatas: ["ferragens", "tintas-e-pintura"],
    keywordPrincipal: "portas e janelas aparecida de goiânia",
    mensagemWhatsApp: "Olá! Preciso de porta/janela. Medida e tipo:",
  },
];

export function getCategoria(slug: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}
