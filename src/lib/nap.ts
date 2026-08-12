/**
 * NAP (Nome, Endereço, Telefone) — fonte única. Usar SEMPRE estes valores,
 * idênticos caractere por caractere (COPY-Progresso.md "Dados fixos").
 * Nome oficial confirmado pelo usuário em 06/08/2026:
 * "Progresso Materiais de Construção" (não "Progresso Distribuidora").
 */
export const NAP = {
  nome: "Progresso Materiais de Construção",
  // Endereço e telefone CONFIRMADOS pelo usuário em 12/08/2026, nesta forma
  // exata (sem número, hífen simples — igual à listagem pública da loja).
  endereco: "Av. Graça Aranha - Jardim Nova Era, Aparecida de Goiânia - GO, 74916-379",
  logradouro: "Av. Graça Aranha",
  bairro: "Jardim Nova Era",
  cidade: "Aparecida de Goiânia",
  uf: "GO",
  cep: "74916-379",
  telefoneDisplay: "(62) 98517-2398",
  telefoneE164: "+5562985172398",
  whatsappNumero: "5562985172398",
  /** Confirmado pelo usuário em 12/08/2026 */
  instagram: "https://www.instagram.com/progressomateriais10/",
  instagramHandle: "@progressomateriais10",
} as const;

export const HORARIOS = {
  semana: "Segunda a sexta: 7h30 às 18h",
  sabado: "Sábado: 7h30 às 13h",
  domingo: "Domingo: 7h30 às 12h",
  /** Frase para CTAs e anúncios (COPY-Progresso.md) */
  fraseCta: "Aberto todos os dias, inclusive domingo.",
} as const;

// TODO [CONFIRMAR]: razão social e CNPJ (rodapé, política de privacidade, schema)
// TODO [CONFIRMAR]: domínio do site ({DOMINIO} no schema, sitemap e robots.txt)
// Coordenadas do pino: confirmadas pelo usuário em 12/08/2026 → config.ts (SITE.geo)
