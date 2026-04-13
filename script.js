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


const btn = document.querySelector('.show-all');
const hiddenItems = document.querySelectorAll('.hidden');
const text = btn.querySelector('span');


let opened = false;

btn.addEventListener('click', () => {
  hiddenItems.forEach(item => {
    item.classList.toggle('hidden');
  });

  opened = !opened;
  btn.textContent = opened ? 'Скрыть' : 'Показать все';
});



