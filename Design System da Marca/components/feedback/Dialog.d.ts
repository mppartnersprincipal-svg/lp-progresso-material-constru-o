export interface DialogProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  /** botões do rodapé */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  /** largura px. Default 480 */
  width?: number;
}
