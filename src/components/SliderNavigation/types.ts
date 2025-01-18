export interface ISliderNavigation {
  currentSlide: number;
  totalSlides: number;
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
}
