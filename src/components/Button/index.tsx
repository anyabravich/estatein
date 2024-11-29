"use client";
import { ReactNode } from "react";
import styles from "./page.module.scss";

interface IButton {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  isFulled?: boolean;
  size?: "small" | "medium" | "big";
  styled?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  size,
  styled,
  isFulled,
  isActive,
  onClick,
}: IButton) => {
  return (
    <button
      className={`${styles["button"]} ${className && styles[className]} ${
        size && styles[size]
      } ${styled && styles[styled]} ${isActive && styles["active"]} ${
        isFulled && styles["fulled"]
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
