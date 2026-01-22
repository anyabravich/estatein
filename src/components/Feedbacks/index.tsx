"use client";

import { useRef, useState } from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Heading from "../Heading";
import SliderNavigation from "../SliderNavigation";
import Feedback from "../Feedback";
import { FeedbacksData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Feedbacks = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <section className={styles.feedbacks}>
      <Container className={styles.container}>
        <Heading
          title="What Our Clients Say"
          description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          buttonText="View All Testimonials"
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
          {FeedbacksData.map((feedback, index) => (
            <SwiperSlide key={index}>
              <Feedback
                stars={feedback.stars}
                title={feedback.title}
                text={feedback.text}
                author={feedback.author}
              />
            </SwiperSlide>
          ))}
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

export default Feedbacks;
