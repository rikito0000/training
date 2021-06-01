var $window = $(window);
import { smoothScroll } from "./modules/_smoothScroll";
import { swiperSlider } from "./modules/_swiperSlider";
import { wowEffects } from "./modules/_wowEffects";
import { scrollFixedBnrVisible } from "./modules/_scrollFixedBnrVisible";
import { parallax } from "./modules/_parallax";

$(function () {
  smoothScroll();
  wowEffects();
  swiperSlider();
  parallax();
});

// load scroll
$(window).on('load scroll', e => {
  scrollFixedBnrVisible();
});