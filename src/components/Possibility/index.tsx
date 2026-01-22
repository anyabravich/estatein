import Image from "next/image";
import styles from "./page.module.scss";
import { IPossibility } from "./types";

const Possibility = ({ image, text }: IPossibility) => {
  return (
    <li className={styles.possibility}>
      <Image
        className={styles.arrow}
        src="/images/possibilities/arrow.svg"
        width={32}
        height={32}
        alt="decor"
        priority
      />
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={image}
          alt="possibility"
          width={32}
          height={32}
          priority
        />
      </div>
      <span className={styles.text}>{text}</span>
    </li>
  );
};

export default Possibility;
