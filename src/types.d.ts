export interface Message {
  id: number;
  title: string;
  message: string;
}

export interface Button {
  type: string;
  label: string;
  onClick: () => void;
}