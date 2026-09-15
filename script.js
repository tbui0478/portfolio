// Active navigation link, smooth scroll, and About card theme toggle
document.addEventListener('DOMContentLoaded', function() {
  // Navigation smooth scroll & active link tracking
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      if (window.pageYOffset >= sectionTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  });

  // Dedicated Light/Dark Mode Toggle ONLY for the About section container
  const aboutToggleBtn = document.getElementById('about-theme-toggle');
  const aboutCard = document.getElementById('about-window-card');

  if (aboutToggleBtn && aboutCard) {
    aboutToggleBtn.addEventListener('click', function () {
      const isLight = aboutCard.classList.toggle('light-mode');
      const icon = aboutToggleBtn.querySelector('i');
      const label = aboutToggleBtn.querySelector('.theme-btn-label');

      if (isLight) {
        if (icon) icon.className = 'fas fa-moon';
        if (label) label.textContent = 'Dark';
        aboutToggleBtn.title = 'Switch About container to Dark mode';
      } else {
        if (icon) icon.className = 'fas fa-sun';
        if (label) label.textContent = 'Light';
        aboutToggleBtn.title = 'Switch About container to Light mode';
      }
    });
  }
});