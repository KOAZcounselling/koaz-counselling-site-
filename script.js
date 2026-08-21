// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Signature "voice strip": gently cycle which language is highlighted,
// unless the user prefers reduced motion.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const voiceItems = document.querySelectorAll('.voice-list li');

if (!prefersReducedMotion && voiceItems.length) {
  let active = 0;
  setInterval(() => {
    voiceItems.forEach((el, i) => {
      el.style.opacity = i === active ? '1' : '0.55';
      el.style.color = i === active ? '#f6f3ea' : '#d8d3c1';
    });
    active = (active + 1) % voiceItems.length;
  }, 2200);
}

// Team bio dropdowns: click/tap a photo to toggle its bio panel.
// (Hover-open on desktop is handled purely in CSS via :hover.)
document.querySelectorAll('.team-photo-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.team-card');
    const isOpen = card.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

// Clicking outside a card closes any open bio (tidy on touch devices).
document.addEventListener('click', (event) => {
  document.querySelectorAll('.team-card.is-open').forEach((card) => {
    if (!card.contains(event.target)) {
      card.classList.remove('is-open');
      card.querySelector('.team-photo-btn')?.setAttribute('aria-expanded', 'false');
    }
  });
});

