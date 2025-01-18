import React from "react";
import styles from "./page.module.scss";
import { IContainer } from "./types";

const Container = ({ children, className }: IContainer) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
