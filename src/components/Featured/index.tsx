import React from "react";
import styles from "./page.module.scss";
import Heading from "../Heading";
import Container from "../Container";
import Card from "../Card";

const Featured = () => {
  return (
    <section className={styles["featured"]}>
      <Container className={styles["featured__container"]}>
        <Heading
          title="Featured Properties"
          description="Explore our handpicked selection of&nbsp;featured properties. Each listing offers a&nbsp;glimpse into exceptional homes and investments available through Estatein. Click &laquo;View Details&raquo; for more information."
        />
        <ul className={styles["featured__list"]}>
          {Array.from({ length: 10 }).map((_, index) => (
            <li className={styles["featured__item"]}>
              <Card />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Featured;
