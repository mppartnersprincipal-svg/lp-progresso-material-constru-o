export interface SelectProps {
  /** strings ou {value,label} */
  options: Array<string | {value: string; label: string}>;
  invalid?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
