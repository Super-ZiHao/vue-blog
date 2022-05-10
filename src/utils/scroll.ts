import { gsap } from 'gsap';
import ScrollToPlugin, { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const animation = () => {
  gsap.to('.ba', {
    scrollTrigger: {
      trigger: '.ba',
      scrub: true,
      markers: true,
    },
    x: 200,
    y: 50,
    fontSize: 150,
    ease: 'none',
    duration: 5
  });
};
