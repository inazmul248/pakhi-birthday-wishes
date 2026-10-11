const floatingHearts = document.querySelector('.floating-hearts');

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';

  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 12;
  const size = 12 + Math.random() * 20;

  heart.style.left = left + '%';
  heart.style.bottom = '-20px';
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.setProperty('--drift-x', (Math.random() * 120 - 60) + 'px');
  heart.style.animationDuration = duration + 's';
  heart.style.animationDelay = (Math.random() * 8) + 's';

  floatingHearts.appendChild(heart);

  setTimeout(() => heart.remove(), (duration + 2) * 1000);
}

for (let i = 0; i < 18; i++) {
  setTimeout(createHeart, i * 380);
}

setInterval(createHeart, 1200);

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));
