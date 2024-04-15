const swiperBouquet = new Swiper('.bouquet-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    // speed: 500,
});

const swiperOrder = new Swiper('.order-swiper', {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: 1,
    centeredSlides: true,

});