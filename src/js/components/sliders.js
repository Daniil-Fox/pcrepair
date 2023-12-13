import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const popularSlider = new Swiper('.popular__slider--pc', {
  slidesPerView: 3,
  spaceBetween: 24,
  slidesPerGroup: 3,
  pagination: {
    el: '.popular-pagination',
    clickable: true
  },
  breakpoints: {
    320 : {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    }
  }
});


const popularSliderLaptop = new Swiper('.popular__slider--laptop', {
  slidesPerView: 3,
  spaceBetween: 24,
  slidesPerGroup: 3,
  pagination: {
    el: '.popular-laptop-pagination',
    clickable: true
  },
  breakpoints: {
    320 : {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    }
  }
});

const casesSlider = new Swiper('.cases__slider', {
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: '.cases-pagination',
    clickable: true
  },
});

const aboutBenSlider = new Swiper('.about-benefits__slider', {
  slidesPerView: "auto",
  pagination: {
    el: '.about-benefits-pagination',
    clickable: true
  },
});

const aboutGalSlider = new Swiper('.about-gallery__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  slidesPerGroup: 3,
  pagination: {
    el: '.about-g-pagination',
    clickable: true
  },
  breakpoints : {
    320 : {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    769 : {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    }
  }
});

const ctaMain = document.querySelector('.cta__slider--main')
const nextCta = document.querySelector('.cta-form-next')
const ctaMainSlider = new Swiper(ctaMain, {
  slidesPerView: 1,
  navigation: {
    nextEl: nextCta
  },
  pagination: {
    el: ".swiper-pagination-progress--main",
    type: "progressbar",
  },
  on: {

    slideChange: () => {


      if(ctaMainSlider.activeIndex == ctaMain.querySelectorAll('.swiper-slide').length - 1){
        nextCta.setAttribute('type', 'submit')
        nextCta.textContent = "Отправить"
      } else {
        nextCta.removeAttribute('type')
        nextCta.textContent = "Далее"
      }

    },
    slideChangeTransitionEnd: () => {
      disBtn(ctaMain)
    }
  }
});

function disBtn(slider){
  const activeSlide = slider.querySelector('.swiper-slide-active')
  const btn = slider.querySelector('.cta-form__btn')
  btn.classList.add('disable')

  const inputs = activeSlide.querySelectorAll('input')
  inputs.forEach(el => {
    if(el.type == "radio" && el.checked){
      btn.classList.remove('disable')
    }
    else if((el.type == "text" || el.type == "tel") && el.value != ""){
      btn.classList.remove('disable')
    }
  })
}
if(ctaMain){
  const inputs = ctaMain.querySelectorAll('input')
  inputs.forEach(el => {
    el.addEventListener('change', () =>  disBtn(ctaMain))
  })

  disBtn(ctaMain)
}





const ctaSec = document.querySelector('.cta__slider--sec')
const nextCtaSec = document.querySelector('.cta-form-sec-next')
const ctaSecSlider = new Swiper(ctaSec, {
  slidesPerView: 1,
  navigation: {
    nextEl: nextCtaSec
  },
  pagination: {
    el: ".swiper-pagination-progress--sec",
    type: "progressbar",
  },
  on: {

    slideChange: () => {


      if(ctaSecSlider.activeIndex == ctaSec.querySelectorAll('.swiper-slide').length - 1){
        nextCtaSec.setAttribute('type', 'submit')
        nextCtaSec.textContent = "Отправить"
      } else {
        nextCtaSec.removeAttribute('type')
        nextCtaSec.textContent = "Далее"
      }

    },
    slideChangeTransitionEnd: () => {
      disBtn(ctaSec)
    }
  }
});
if(ctaSec){
  const inputsSec = ctaSec.querySelectorAll('input')
  inputsSec.forEach(el => {
    el.addEventListener('change', () =>  disBtn(ctaSec))
  })

  disBtn(ctaSec)
}




window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }


  resizableSwiper(
    '(max-width: 768px)',
    '.service__slider',
    {
      slidesPerView: "auto",
      pagination: {
        el: '.service-pagination'
      }
    },

  );

  resizableSwiper(
    '(max-width: 768px)',
    '.steps__slider',
    {
      slidesPerView: "auto",
      pagination: {
        el: '.steps-pagination'
      }
    },

  );
});
