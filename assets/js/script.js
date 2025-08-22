// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

// Ano no footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Smooth scroll para âncoras internas
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        menu?.classList?.remove('open');
      }
    }
  });
}

// Troca de preview na seção de projetos (hover/click)
const cards = document.querySelectorAll('.project-card');
for (const card of cards) {
  const img = card.querySelector('.card-img img');
  const hoverSrc = card.getAttribute('data-hover');
  if (!img || !hoverSrc) continue;
  const originalSrc = img.getAttribute('src');

  card.addEventListener('mouseenter', () => { img.src = hoverSrc; });
  card.addEventListener('mouseleave', () => { img.src = originalSrc; });
  card.addEventListener('click', () => { // para mobile
    img.src = img.src.endsWith(hoverSrc) ? originalSrc : hoverSrc;
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { rootMargin: '0px 0px -10% 0px' });

for (const el of document.querySelectorAll('.reveal')) io.observe(el);