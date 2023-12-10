import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


let mm = gsap.matchMedia();

mm.add('(min-width: 769px)', () => {
  const tl = gsap.timeline()

tl.to('.service__container', {x: () => -(document.querySelector('.service__container').scrollWidth - window.innerWidth)})
  ScrollTrigger.create({
    animation: tl,
    trigger: '.service__buttons',
    start: 'top top',
    end: '+=100%',
    scrub: 0.5,
    ease: 'none',
    pin: '.service',
    invalidateOnRefresh: true,
  })
})

