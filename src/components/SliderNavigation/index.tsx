
import styles from "./page.module.scss";
import Image from "next/image";
import { ISliderNavigation } from "./types";

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
        <button ref={prevRef} className="swiper-button-prev" type="button">
          <Image
            className={styles["slider-navigation__button-icon"]}
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
            priority
          />
        </button>
        <button ref={nextRef} className="swiper-button-next" type="button">
          <Image
            className={styles["slider-navigation__button-icon"]}
            src="/icons/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default SliderNavigation;
