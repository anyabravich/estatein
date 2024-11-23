import { ReactNode } from "react";
import styles from "./page.module.scss";

interface IButton {
  children: ReactNode;
  className?: string;
}

const Button = ({ children }: IButton) => {
  return (
    <button className={`${styles["button"]}`} type="button">
      {children}
    </button>
  );
};

export default Button;
