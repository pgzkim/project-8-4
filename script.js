const swiper = new Swiper('.swiper', {
// Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.3,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
},
})