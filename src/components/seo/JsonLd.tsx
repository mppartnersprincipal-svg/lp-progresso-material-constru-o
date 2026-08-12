/**
 * Injeta um bloco JSON-LD no HTML estático (SSG — sem custo de runtime).
 * Escapa todo `<` com a sequência unicode equivalente: impede que um
 * "fecha-script" vindo da copy quebre a tag (padrão recomendado pela doc
 * do Next.js para JSON-LD).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
