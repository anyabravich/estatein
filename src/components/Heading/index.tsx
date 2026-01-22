import styles from "./page.module.scss";

import Button from "../Button";
import Image from "next/image";
import { IHeading } from "./types";

const Heading = ({ title, description, buttonText, className }: IHeading) => {
  return (
    <header className={`${styles["heading"]} ${className}`}>
      <i className={styles["stars"]}>
        <Image src="/icons/stars.svg" alt="stars" width={69} height={30} />
      </i>
      <div className={styles["content"]}>
        <div className={styles["text-content"]}>
          <h2 className={`${styles["title"]} h2`}>{title}</h2>
          <p className={styles["description"]}>{description}</p>
        </div>
        <Button className={styles["button"]} styled="secondary">
          {buttonText}
        </Button>
      </div>
    </header>
  );
};

export default Heading;
