//Инициализируем слайдер

let mql = window.matchMedia('(max-width: 638px)');
window.addEventListener('resize', () => {
  if (mql.matches) {
    const popup = document.querySelectorAll('.card');
popup[3].style.display = 'block'
popup[4].style.display = 'block'
popup[5].style.display = 'block'
    let newSwiper = new Swiper('.swiper-container', {
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
    });
  } else {

  }
})
//Скрытие
  
  
 