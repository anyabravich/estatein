"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.scss";
import Heading from "../Heading";
import Container from "../Container";
import Card from "../Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FeaturedData } from "./data";

const Featured = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <section className={styles["featured"]}>
      <Container className={styles["featured__container"]}>
        <Heading
          title="Featured Properties"
          buttonText="View All Properties"
          description="Explore our handpicked selection of&nbsp;featured properties. Each listing offers a&nbsp;glimpse into exceptional homes and investments available through Estatein. Click &laquo;View Details&raquo; for more information."
        />
        <Swiper
          className={styles["featured__list"]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTotalSlides(swiper.slides.length);
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex + 1);
          }}
          modules={[Navigation]}
        >
          {FeaturedData.map(
            ({ image, title, description, list, price }, index) => (
              <SwiperSlide key={index}>
                <Card
                  image={image}
                  title={title}
                  description={description}
                  list={list}
                  price={price}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className={styles["featured__navigation"]}>
          <p className={styles["featured__navigation-count"]}>
            {currentSlide < 10 ? `0${currentSlide}` : currentSlide}{" "}
            <span>of {totalSlides < 10 ? `0${totalSlides}` : totalSlides}</span>
          </p>
          <div className={styles["featured__navigation-buttons"]}>
            <div ref={prevRef} className="swiper-button-prev">
              <Image
                className={styles["featured__navigation-button-icon"]}
                src="/icons/arrow.svg"
                alt="arrow"
                width={30}
                height={30}
                priority
              />
            </div>
            <div ref={nextRef} className="swiper-button-next">
              <Image
                className={styles["featured__navigation-button-icon"]}
                src="/icons/arrow.svg"
                alt="arrow"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
