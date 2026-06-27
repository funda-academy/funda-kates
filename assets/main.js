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

document.querySelector('form').addEventListener('submit', function(e) {
  if (this.querySelector('[name="website"]').value !== '') {
    e.preventDefault();
    return;
  }
  if (!grecaptcha.getResponse()) {
    e.preventDefault();
    document.getElementById('captcha-error').style.display = 'block';
  }
});
