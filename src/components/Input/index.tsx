import { IInput } from "./types";

import Image from "next/image";

import styles from "./page.module.scss";

const Input = ({ type, className, name }: IInput) => {
  return (
    <label className={`${styles["input"]} ${className && styles[className]}`}>
      <Image
        className={styles["input__icon"]}
        src="/icons/email.svg"
        alt="icon"
        width={24}
        height={24}
        priority
      />
      <input
        className={styles["input__input"]}
        type={type}
        name={name}
        placeholder="Enter Your Email"
      />
      <button className={styles["input__button"]}>
        <Image
          className={styles["input__button-icon"]}
          src="/icons/submit.svg"
          alt="arrow"
          width={30}
          height={30}
          priority
        />
      </button>
    </label>
  );
};

export default Input;
