"use client";
import { ReactNode } from "react";
import styles from "./page.module.scss";

interface IButton {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Button = ({ children, className, isActive, onClick }: IButton) => {
  return (
    <button
      className={`${styles["button"]} ${className && styles[className]} ${
        isActive && styles["_active"]
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
