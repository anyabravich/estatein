import { ReactNode } from "react";
export interface IButton {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  isFulled?: boolean;
  size?: "small" | "medium" | "big";
  styled?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}
