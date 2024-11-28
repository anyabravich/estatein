import React from "react";
import styles from "./page.module.scss";
import Button from "../Button";

interface IHeading {
  title: string;
  description: string;
  className?: string;
}

const Heading = ({ title, description, className }: IHeading) => {
  return (
    <header className={`${styles["heading"]} ${className}`}>
      <h2 className={`${styles["heading__title"]} h2`}>{title}</h2>
      <div className={styles["heading__grid"]}>
        <p className={styles["heading__description"]}>{description}</p>
        <Button className="secondary">View All Properties</Button>
      </div>
    </header>
  );
};

export default Heading;
