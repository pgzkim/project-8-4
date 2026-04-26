const swiper = new Swiper('.swiper', {
// Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.4,
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


})


const btn = document.querySelector('.show-all');
const text = btn.querySelector('span');
const allSlides = document.querySelectorAll('.swiper-slide');
const tabletHiddenSlides = Array.from(allSlides).filter((slide) =>
  slide.classList.contains('hiddenacer') || slide.classList.contains('hiddensony'),
);
const extraSlides = Array.from(allSlides).filter((slide) =>
  slide.classList.contains('hidden'),
);


let opened = false;

function setSlidesVisibility(slides, isVisible) {
  slides.forEach((slide) => {
    slide.style.display = isVisible ? '' : 'none';
  });
}

function updateSlides() {
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isDesktopOrTablet = window.innerWidth >= 768;

  if (!isDesktopOrTablet) {
    setSlidesVisibility(allSlides, true);
    return;
  }

  setSlidesVisibility(allSlides, true);

  if (!opened) {
    setSlidesVisibility(extraSlides, false);

    if (isTablet) {
      setSlidesVisibility(tabletHiddenSlides, false);
    }
  }
}

function setVisibilityForTablet() {
  swiperSliders.forEach((slide, index) => {
    if (index > 5) slide.classList.add("hidden");
  });
}

function setVisibilityForPc() {
  swiperSliders.forEach((slide, index) => {
    if (index < 8) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
}

btn.addEventListener('click', () => {
  opened = !opened;
  text.textContent = opened ? 'Скрыть' : 'Показать все';
  updateSlides();
});


window.addEventListener('resize', updateSlides);

updateSlides();

