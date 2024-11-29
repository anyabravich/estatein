import React from "react";
import styles from "./page.module.scss";
import Button from "../Button";
import Image from "next/image";

interface IHeading {
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
}

const Heading = ({ title, description, buttonText, className }: IHeading) => {
  return (
    <header className={`${styles["heading"]} ${className}`}>
      <i className={styles["heading__stars"]}>
        <Image src="/icons/stars.svg" alt="stars" width={69} height={30} />
      </i>
      <div className={styles["heading__content"]}>
        <div className={styles["heading__text-content"]}>
          <h2 className={`${styles["heading__title"]} h2`}>{title}</h2>
          <p className={styles["heading__description"]}>{description}</p>
        </div>
        <Button className="secondary">{buttonText}</Button>
      </div>
    </header>
  );
};

export default Heading;
