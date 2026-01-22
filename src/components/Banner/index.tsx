"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import useBanner from "@/hooks/useBanner";

const Banner = () => {
  const { isBannerVisible, handleViewBanner } = useBanner();

  return (
    <div
      className={`${styles["banner"]} ${
        !isBannerVisible ? styles["_hidden"] : ""
      }`}
    >
      <span className={styles["banner__text"]}>
        ✨Discover Your Dream Property with Estatein
      </span>
      <a className={styles["banner__link"]} href="#">
        Learn More
      </a>
      <button
        className={styles["banner__button-close"]}
        type="button"
        onClick={handleViewBanner}
      >
        <Image
          src="/icons/close.svg"
          alt="close"
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
};

export default Banner;
