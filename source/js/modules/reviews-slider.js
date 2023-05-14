import Swiper from '../vendor/swiper';

const getReviewsSlider = () => {
  if (document.querySelector('.reviews__swiper')) {
    const reviewsSwiper = document.querySelector('.reviews__swiper');
    const reviewsSwiperWrapper = document.querySelector('.reviews__swiper-wrapper');
    const reviewsButtons = document.querySelectorAll('.reviews__button');

    reviewsSwiper.classList.remove('reviews__swiper--nojs');
    reviewsSwiperWrapper.classList.remove('reviews__swiper-wrapper--nojs');
    reviewsButtons.forEach((feedbackButtons) => {
      feedbackButtons.classList.remove('reviews__button--nojs');
    });
    // eslint-disable-next-line no-unused-vars,no-undef
    const swiper = new Swiper('.reviews__swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 1000,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
};

export {getReviewsSlider};
