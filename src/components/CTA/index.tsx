import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Button from "../Button";

const CTA = () => {
  return (
    <section className={styles["cta"]}>
      <Container className={styles["cta__container"]}>
        <div className={styles["cta__content"]}>
          <h2 className={`${styles["cta__title"]} h2`}>
            Start Your Real Estate Journey Today
          </h2>
          <p className={styles["cta__text"]}>
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Button styled="primary">Explore Properties</Button>
      </Container>
    </section>
  );
};

export default CTA;
