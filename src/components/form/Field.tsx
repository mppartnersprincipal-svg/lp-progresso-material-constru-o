import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

/**
 * Campos do formulário de orçamento (COPY — Elementos globais; PRD §11.1:
 * máx. 3 campos). Label sempre associado (PRD §12); erro descrito em texto.
 */
const inputBase =
  "w-full rounded-[var(--radius-md)] border border-border-strong bg-surface-card px-[var(--space-4)] py-[var(--space-3)] font-body text-[length:var(--text-md)] text-body placeholder:text-muted min-h-12";

export function TextField({
  id,
  label,
  error,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-[var(--space-2)]">
      <label
        htmlFor={id}
        className="font-body text-[length:var(--text-sm)] font-semibold text-heading"
      >
        {label}
      </label>
      <input
        id={id}
        className={inputBase}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} className="font-body text-[length:var(--text-sm)] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  error,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-[var(--space-2)]">
      <label
        htmlFor={id}
        className="font-body text-[length:var(--text-sm)] font-semibold text-heading"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className={inputBase}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} className="font-body text-[length:var(--text-sm)] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
