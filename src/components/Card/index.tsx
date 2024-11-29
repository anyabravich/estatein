import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "../Button";

interface ICard {
  image: string;
  title: string;
  description: string;
  list: string[];
  price: string;
}

const Card = ({ image, title, description, list, price }: ICard) => {
  return (
    <article className={styles["card"]}>
      <div className={styles["card__image-wrapper"]}>
        <Image
          className={styles["card__image"]}
          src={image}
          alt="card"
          fill
          sizes="100%"
          priority
        />
      </div>
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__description"]}>{description}</p>
      <ul className={styles["card__components"]}>
        {list.map((item, index) => (
          <li className={styles["card__component"]} key={index}>
            <Image
              className={styles["card__component-icon"]}
              src={`/icons/card/icon-${index + 1}.svg`}
              alt={`${index + 1}-icon`}
              width={24}
              height={24}
            />
            {item}
          </li>
        ))}
      </ul>
      <footer className={styles["card__footer"]}>
        <p className={styles["card__price"]}>
          <span className={styles["card__price-label"]}>Price</span>
          <span className={styles["card__price-value"]}>{price}</span>
        </p>
        <Button className="primary" isFulled={true}>
          View Property Details
        </Button>
      </footer>
    </article>
  );
};

export default Card;
