var swiper = new Swiper(".swiper", {
    modules: [SwiperGL],
    grabCursor: true,
    rewind: true,
    effect: "gl",
    gl: { shader: "slices" },
    speed: 900,
    navigation: {
      enabled: true,
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    pagination: {
      enabled: true,
      clickable: true,
      el: ".swiper-pagination",
    },
    watchSlidesProgress: true,
    breakpoints: { 768: {}, 1280: {}, 1920: {} },
  });