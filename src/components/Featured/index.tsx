"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.scss";
import Heading from "../Heading";
import Container from "../Container";
import Card from "../Card";
import { FeaturedData } from "./data";
import SliderNavigation from "../SliderNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
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
        <SliderNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </Container>
    </section>
  );
};

export default Featured;
