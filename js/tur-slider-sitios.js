document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".tour-swip-gbm", {
    autoHeight: true,
    grabCursor: true,
    rewind: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1300,

    navigation: {
      prevEl: ".tour-swip-gbm-button-prev",
      nextEl: ".tour-swip-gbm-button-next",
    },

    pagination: {
      el: ".tour-swip-gbm-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".tour-swip-gbm-scrollbar",
      draggable: true,
    },

    keyboard: { enabled: true },
    mousewheel: { enabled: false },
    parallax: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,

    breakpoints: {
      768: {},
      1280: {},
      1920: {},
    },
  });
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
const swiperNoticias = new Swiper(".gbm-swiper-noticias", {
  spaceBetween: 20,
  grabCursor: true,
  rewind: true,
  speed: 600,
  navigation: {
    prevEl: ".gbm-swiper-noticias .swiper-button-prev",
    nextEl: ".gbm-swiper-noticias .swiper-button-next",
  },
  pagination: {
    el: ".gbm-swiper-noticias .swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    1280: { slidesPerView: 3 },
    1920: { slidesPerView: 4, freeMode: { enabled: true } },
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.dt-fecha').forEach(el => {
    const rawDate = el.textContent.trim();
    const dateObj = new Date(rawDate);
    if (!isNaN(dateObj.getTime())) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      el.textContent = dateObj.toLocaleDateString('es-MX', opciones);
    }
  });
});
  document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".tur-gbm-gallery").forEach((gallery) => {
      const mainImg = gallery.querySelector(".tur-gbm-main-image");
      const thumbs  = gallery.querySelectorAll(".tur-gbm-thumb");

      thumbs.forEach((thumb) => {

        thumb.style.cursor = "pointer";

        thumb.addEventListener("click", () => {
          const tmpSrc    = mainImg.src;
          const tmpSrcset = mainImg.srcset;
          mainImg.src    = thumb.src;
          mainImg.srcset = thumb.srcset;
          thumb.src    = tmpSrc;
          thumb.srcset = tmpSrcset;
        });
      });
    });
  });

