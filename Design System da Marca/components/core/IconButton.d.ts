export interface IconButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  /** lado em px (quadrado). Default 36 */
  size?: number;
  /** rótulo acessível (aria-label) */
  label: string;
  /** o ícone (SVG Lucide) */
  children?: React.ReactNode;
  onClick?: () => void;
}
