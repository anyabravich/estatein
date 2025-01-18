import { IInfo } from "./types";

import styles from "./page.module.scss";

const Info = ({ value, text }: IInfo) => {
  return (
    <li className={styles["info"]}>
      <span className={styles["info__value"]}>{value}</span>
      <span className={styles["info__text"]}>{text}</span>
    </li>
  );
};

export default Info;
