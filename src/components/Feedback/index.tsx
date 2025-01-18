import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { IFeedback } from "./types";

const Feedback = ({
  stars,
  title,
  text,
  author: { name, location, image },
}: IFeedback) => {
  return (
    <article className={styles["feedback"]}>
      <ul className={styles["feedback__stars"]}>
        {[...Array(stars)].map((_, index) => (
          <li key={index}>
            <Image
              className={styles["feedback__star"]}
              src="/icons/star.svg"
              alt="star"
              width={24}
              height={24}
              priority
            />
          </li>
        ))}
      </ul>
      <h3 className={`${styles["feedback__title"]} h3`}>{title}</h3>
      <p className={styles["feedback__text"]}>{text}</p>
      <div className={styles["feedback__author"]}>
        <div className={styles["feedback__author-image-wrapper"]}>
          <Image
            className={styles["feedback__author-image"]}
            src={image}
            alt="author"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div className={styles["feedback__author-info"]}>
          <p className={styles["feedback__author-name"]}>{name}</p>
          <p className={styles["feedback__author-location"]}>{location}</p>
        </div>
      </div>
    </article>
  );
};

export default Feedback;
