"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "../Button";
import { ICard } from "./types";

const Card = ({ image, title, description, list, price }: ICard) => {
  const [showMore, setShowMore] = useState(false);

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
      <p className={styles["card__description"]}>
        <span
          className={`${styles["card__description-text"]} ${
            showMore && styles["showed"]
          }`}
        >
          {description}
        </span>
        <button
          className={styles["card__read-more"]}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </p>
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
        <Button styled="primary" isFulled={true}>
          View Property Details
        </Button>
      </footer>
    </article>
  );
};

export default Card;
