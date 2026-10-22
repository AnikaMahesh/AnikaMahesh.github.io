(() => {
  const image = document.querySelector('.hero-image');
  const hero = document.querySelector('.hero');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!image || !hero || reducedMotion.matches) return;

  let scheduled = false;
  const update = () => {
    const distance = Math.min(Math.max(window.scrollY, 0), hero.offsetHeight);
    image.style.setProperty('--parallax', `${Math.round(distance * 0.18)}px`);
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
})();
