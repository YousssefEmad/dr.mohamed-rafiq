$(function(){
   var swiperPartner = new Swiper('.swiper.swiperPartner',{
        autoplay: {
            delay: 3000,
        },
        speed: 2000,
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        hasNavigation: true,
        grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 3
            },
            319: {
                slidesPerView: 2
            }
        },
   });
});
$(function(){
   var swiperPartner = new Swiper('.swiper.swipertestimonial',{
        autoplay: {
            delay: 3000,
        },
        speed: 2000,
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        hasNavigation: true,
        grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            319: {
                slidesPerView: 1
            }
        },
   });
});