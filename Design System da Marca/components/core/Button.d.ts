/** @startingPoint section="Components" subtitle="Botão da marca — CAIXA ALTA, cantos firmes" viewport="700x220" */
export interface ButtonProps {
  /** 'primary' laranja (CTA) | 'secondary' navy | 'outline' | 'ghost' */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
