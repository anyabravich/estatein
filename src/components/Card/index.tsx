import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "../Button";

const Card = () => {
  return (
    <article className={styles["card"]}>
      <div className={styles["card__image-wrapper"]}>
        <Image
          className={styles["card__image"]}
          src="/images/cards/card-1.jpg"
          alt="card"
          fill
          sizes="100%"
          priority
        />
      </div>
      <h3 className={styles["card__title"]}>Seaside Serenity Villa</h3>
      <p className={styles["card__description"]}>
        A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
        neighborhood... Read More
      </p>
      <ul className={styles["card__components"]}>
        <li className={styles["card__component"]}>
          <Image
            className={styles["card__component-icon"]}
            src="/icons/bed.svg"
            alt="bed"
            width={24}
            height={24}
          />
          4-Bedroom
        </li>
        <li className={styles["card__component"]}>3-Bathroom</li>
        <li className={styles["card__component"]}>Villa</li>
      </ul>
      <footer className={styles["card__footer"]}>
        <p className={styles["card__price"]}>
          <span className={styles["card__price-label"]}>Price</span>
          <span className={styles["card__price-value"]}>$550,000</span>
        </p>
        <Button className="primary">View Property Details</Button>
      </footer>
    </article>
  );
};

export default Card;
