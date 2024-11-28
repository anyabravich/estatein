import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";
import Button from "../Button";
import Info from "../Info";
import { InfoHeroData } from "./data";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <Container className={styles["hero__container"]}>
        <div className={styles["hero__text-content"]}>
          <h1 className={`${styles["hero__title"]} h1`}>
            Discover Your Dream Property with Estatein
          </h1>
          <p className={styles["hero__description"]}>
            Your journey to&nbsp;finding the perfect property begins here.
            Explore our listings to&nbsp;find the home that matches your dreams.
          </p>
          <div className={styles["hero__buttons"]}>
            <Button styled="outline">Learn More</Button>
            <Button styled="primary">Browse Properties</Button>
          </div>
          <ul className={styles["hero__info"]}>
            {InfoHeroData.map(({ value, text }, index) => (
              <Info key={index} value={value} text={text} />
            ))}
          </ul>
        </div>
        <div className={styles["hero__image"]}>
          <Image
            src="/images/hero.jpg"
            alt="hero"
            style={{ objectPosition: "top", objectFit: "cover" }}
            sizes="100%"
            fill
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
