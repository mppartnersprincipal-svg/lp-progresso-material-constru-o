export interface CardProps {
  /** hover eleva a sombra e o card */
  interactive?: boolean;
  /** padding interno em px. Default 24 */
  padding?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}
