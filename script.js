const header = document.querySelector('#site-header');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const year = document.querySelector('#year');

const setScrolledHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
setScrolledHeader();
window.addEventListener('scroll', setScrolledHeader, { passive: true });

function closeMenu() {
  siteNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

year.textContent = new Date().getFullYear();

const animateCount = (element) => {
  const target = Number(element.dataset.count);
  const duration = 1100;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.firstChild.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const stats = document.querySelectorAll('[data-count]');
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCount(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.45 });
stats.forEach((stat) => statsObserver.observe(stat));

const testimonialTrack = document.querySelector('.testimonial-track');
document.querySelectorAll('.carousel-button').forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.direction === 'next' ? 1 : -1;
    testimonialTrack.scrollBy({ left: direction * (testimonialTrack.clientWidth * 0.72), behavior: 'smooth' });
  });
});
