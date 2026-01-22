import React from "react";
import styles from "./page.module.scss";
import { PossibilitiesData } from "./data";
import Possibility from "../Possibility";
import Link from "next/link";

const Possibilities = () => {
  return (
    <ul className={styles["possibilities"]}>
      {PossibilitiesData.map(({ image, text }, index) => (
        <Link href="/" key={index}>
          <Possibility key={index} image={image} text={text} />
        </Link>
      ))}
    </ul>
  );
};

export default Possibilities;
