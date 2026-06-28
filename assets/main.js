const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.closest('.faq-item').classList.toggle('open'));
});

const faqSection = document.getElementById('faq');
const faqToggle = faqSection.querySelector('.faq-section-toggle');
faqToggle.addEventListener('click', () => faqSection.classList.toggle('faq-section-collapsed'));

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  if (this.querySelector('[name="website"]').value !== '') return;

  if (!grecaptcha.getResponse()) {
    document.getElementById('captcha-error').style.display = 'block';
    return;
  }

  const form = this;
  const btn = form.querySelector('.submit-btn');
  btn.disabled = true;
  btn.textContent = 'Submitting…';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors',
  }).finally(() => {
    form.hidden = true;
    document.getElementById('signup-success').hidden = false;
  });
});
