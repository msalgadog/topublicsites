// JS: inicializa tu Swiper con el nuevo selector y nombres de elementos
import Swiper, { SwiperGL } from "swiper";

var tourSwiper = new Swiper(".tour-swip-gbm", {
  modules: [SwiperGL],
  grabCursor: true,
  rewind: true,
  effect: "gl",
  gl: { shader: "slices" },
  speed: 900,

  navigation: {
    enabled: true,
    prevEl: ".tour-swip-gbm-button-prev",
    nextEl: ".tour-swip-gbm-button-next",
  },

  pagination: {
    enabled: true,
    clickable: true,
    el: ".tour-swip-gbm-pagination",
  },

  watchSlidesProgress: true,

  breakpoints: {
    768: {},
    1280: {},
    1920: {},
  },
});


   //SWIPER.JS
   const swiperImageNews = new Swiper('.swiper.is-secretaria-programas', {
    speed: 2500,
    spaceBetween: 20,
    slidesPerView: 1,
    rewind: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 620px
        920: {
            slidesPerView: 2,
            spaceBetween: 25
        }
    }
});

$('.gbm-slick__container').slick({
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});