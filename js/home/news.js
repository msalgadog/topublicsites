var swiper = new Swiper(".swiper", {
    spaceBetween: 5,
    autoHeight: true,
    navigation: {
        enabled: true,
        nextEl: ".boton-siguiente",
        prevEl: ".boton-anterior",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        812: {},
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
        1920: { slidesPerView: 5 },
    },
});