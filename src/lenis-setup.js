import Lenis from 'lenis';

const lenis = new Lenis({ autoRaf: true });

lenis.on('scroll', (e) => {
  // Optional scroll handler
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
