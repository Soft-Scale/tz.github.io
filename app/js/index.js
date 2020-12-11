var swiper1 = new Swiper('.swiper1', {
    // cssMode: true,
    effect: 'fade',
    keyboard: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      840: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
});
var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      840: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
});
$(".icon-click").click(function(){
  $(".search").toggleClass("search-toogle");
});
