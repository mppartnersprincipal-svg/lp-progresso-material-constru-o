export interface FieldProps {
  label?: string;
  hint?: string;
  /** mensagem de erro (vermelha, substitui hint) */
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
}
