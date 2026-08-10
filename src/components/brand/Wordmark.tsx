import Image from "next/image";
import { NAP } from "@/lib/nap";
import { DiagonalBars } from "./DiagonalBars";

/**
 * Marca no header/rodapé.
 * - Fundo claro: símbolo real do logo (PNG transparente gerado de
 *   assets/logo-progresso.jpg — remoção de fundo por flood fill) + wordmark
 *   tipográfico do DS. Logo completo em public/images/logo-progresso.png.
 * - Fundo navy: mantém barras + texto (o "P" navy do símbolo desapareceria).
 *   TODO: pedir ao cliente a variante oficial para fundo escuro.
 */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-[10px]">
      {onDark ? (
        <DiagonalBars height={26} count={2} />
      ) : (
        <Image
          src="/images/logo-simbolo.png"
          alt=""
          width={40}
          height={40}
          priority
        />
      )}
      <span
        className={`font-display text-[22px] font-extrabold italic uppercase leading-none ${
          onDark ? "text-on-dark" : "text-heading"
        }`}
      >
        Progresso
      </span>
      <span className="sr-only">{NAP.nome}</span>
    </span>
  );
}
