import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

interface ISliderNavigation {
  currentSlide: number;
  totalSlides: number;
  prevRef: React.RefObject<HTMLDivElement>;
  nextRef: React.RefObject<HTMLDivElement>;
}

const SliderNavigation = ({
  currentSlide,
  totalSlides,
  prevRef,
  nextRef,
}: ISliderNavigation) => {
  return (
    <div className={styles["slider-navigation"]}>
      <p className={styles["slider-navigation__count"]}>
        {currentSlide < 10 ? `0${currentSlide}` : currentSlide}{" "}
        <span>of {totalSlides < 10 ? `0${totalSlides}` : totalSlides}</span>
      </p>
      <div className={styles["slider-navigation__buttons"]}>
        <div ref={prevRef} className="swiper-button-prev">
          <Image
            className={styles["slider-navigation__button-icon"]}
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
            priority
          />
        </div>
        <div ref={nextRef} className="swiper-button-next">
          <Image
            className={styles["slider-navigation__button-icon"]}
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SliderNavigation;
