export interface TabsProps {
  /** rótulos das abas */
  tabs: string[];
  /** aba ativa (rótulo) */
  value: string;
  onChange?: (tab: string) => void;
}
