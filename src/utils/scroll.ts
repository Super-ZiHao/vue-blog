import { gsap } from 'gsap'
import ScrollToPlugin, { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const animation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.layout-2',
      start: 'top bottom',
      end: 'bottom 0',
      scrub: true,
      markers: true,
    },
  })
  // tl.to('.layout-2',{
    
  // })
}

export const demoAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#container',
      start: 'bottom bottom',
      end: 'bottom 100',
      scrub: true,
      markers: true,
    },
  })
  
}
