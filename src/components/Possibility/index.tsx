import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";
import { IPossibility } from "./types";

const Possibility = ({ image, text }: IPossibility) => {
  return (
    <li className={styles["possibility"]}>
      <Image
        className={styles["possibility__arrow"]}
        src="/images/possibilities/arrow.svg"
        width={32}
        height={32}
        alt="decor"
        priority
      />
      <div className={styles["possibility__image-wrapper"]}>
        <Image
          className={styles["possibility__image"]}
          src={image}
          alt="possibility"
          width={32}
          height={32}
          priority
        />
      </div>
      <span className={styles["possibility__text"]}>{text}</span>
    </li>
  );
};

export default Possibility;
