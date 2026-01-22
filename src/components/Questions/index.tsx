'use client';
import { useRef, useState } from 'react';
import styles from './page.module.scss';
import Container from '../Container';
import Heading from '../Heading';
import SliderNavigation from '../SliderNavigation';
import Question from '../Question';
import { QuestionsData } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Questions = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <section className={styles['questions']}>
      <Container className={styles['questions__container']}>
        <Heading
          title="Frequently Asked Questions"
          description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          buttonText="View All FAQ’s"
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
          {QuestionsData.map((question, index) => (
            <SwiperSlide key={index}>
              <Question question={question.question} answer={question.answer} />
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

export default Questions;
