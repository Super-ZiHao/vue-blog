import { gsap } from 'gsap';
import ScrollToPlugin, { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const animation = () => {
  gsap.to('.layout-1-1', {
    scrollTrigger: {
      trigger: '.layout-1-1',
      scrub: true
    },
    x: 1000,
    ease: 'none',
    duration: 1
  });
};
