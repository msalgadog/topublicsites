var swiper = new Swiper(".swiper", {
    spaceBetween: 5,
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