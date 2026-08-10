/**
 * NAP (Nome, Endereço, Telefone) — fonte única. Usar SEMPRE estes valores,
 * idênticos caractere por caractere (COPY-Progresso.md "Dados fixos").
 * Nome oficial confirmado pelo usuário em 06/08/2026:
 * "Progresso Materiais de Construção" (não "Progresso Distribuidora").
 */
export const NAP = {
  nome: "Progresso Materiais de Construção",
  // TODO [CONFIRMAR]: número/quadra/lote para completar o endereço
  endereco: "Av. Graça Aranha — Jardim Nova Era, Aparecida de Goiânia - GO, 74916-379",
  logradouro: "Av. Graça Aranha",
  bairro: "Jardim Nova Era",
  cidade: "Aparecida de Goiânia",
  uf: "GO",
  cep: "74916-379",
  telefoneDisplay: "(62) 98517-2398",
  telefoneE164: "+5562985172398",
  whatsappNumero: "5562985172398",
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
// TODO [CONFIRMAR]: coordenadas {LAT}/{LNG} — extrair do pino do GBP, não estimar
