export interface ISliderNavigation {
  currentSlide: number;
  totalSlides: number;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
}
