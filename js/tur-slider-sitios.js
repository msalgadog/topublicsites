document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".tour-swip-gbm", {
      autoHeight: true,
      grabCursor: true,
      rewind: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 1300,
  
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
  
      keyboard: { enabled: true },
      mousewheel: { enabled: true },
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
document.addEventListener("DOMContentLoaded", function () {
    // Por cada card en la página…
    document.querySelectorAll(".tur-gbm-card").forEach((card) => {
      const mainImg = card.querySelector(".tur-gbm-main-image");
      const thumbs = card.querySelectorAll(".tur-gbm-thumb");

      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          // intercambia src de la thumb y la main
          const tmp = mainImg.src;
          mainImg.src = thumb.src;
          thumb.src = tmp;
        });
      });
    });
  });