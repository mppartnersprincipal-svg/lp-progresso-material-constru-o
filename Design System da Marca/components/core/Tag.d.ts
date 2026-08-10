export interface TagProps {
  selected?: boolean;
  /** mostra o × de remover */
  onRemove?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
}
