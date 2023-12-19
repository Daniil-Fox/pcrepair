import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import AOS from 'aos';

window.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });
})


const priceMoreBtn = document.querySelectorAll('.price-list__more')

priceMoreBtn.forEach(el => {
  el.addEventListener('click', e => {
    const btn = e.currentTarget
    const parent = btn.closest('.price-list__wrapper')
    const priceList = parent.querySelector('.price-list')
    btn.classList.toggle('active')
    priceList.classList.toggle('active')
    if(btn.classList.contains('active')){
      priceList.style.maxHeight = priceList.scrollHeight + 'px'
    } else {
      priceList.style.maxHeight = null
    }
  })
})



const burgerBtn = document.querySelector('.header__burger')

burgerBtn.addEventListener('click', e => {
  e.preventDefault()

  const menu = document.querySelector('.menu')

  let isActive = menu.classList.toggle('active')
  burgerBtn.classList.toggle('active')
  if(isActive){
    burgerBtn.style.border = 'none'
    document.body.style.overflow = 'hidden'
  } else {
    burgerBtn.style.border = null
    document.body.style.overflow = null
  }


})




const tabsPC = document.querySelectorAll('.popular__btn')

tabsPC.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()

    const container = e.currentTarget.closest('.popular')
    const dataType = e.currentTarget.dataset.type
    container.querySelectorAll('.popular__btn').forEach(btn => {
      btn.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    container.querySelector('.popular__slider.active').classList.remove('active')
    container.querySelector(`.popular__slider[data-type="${dataType}"]`).classList.add('active')

  })
})
