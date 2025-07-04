const maxScroll = 200;
const heroEl = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const ratio = Math.min(y / maxScroll, 1);

  // ヒーロー演出調整
  document.documentElement.style.setProperty('--hero-opacity', 1 - ratio);
  document.documentElement.style.setProperty('--hero-scale', 1 - ratio * 0.015);
  document.documentElement.style.setProperty('--hero-blur', `${ratio * 10}px`);
  document.documentElement.style.setProperty('--hero-clip', `circle(${100 - ratio * 80}% at 50% 50%)`);
  document.documentElement.style.setProperty('--header-opacity', ratio);

  heroEl.classList.toggle('hidden', ratio >= 1);
  document.body.classList.toggle('scrolled', ratio >= 1);

  // 粒子演出（煙のように分散）
  if (ratio >= 0.4 && ratio < 0.9) {
    for (let i = 0; i < 6; i++) {
      const p = document.createElement('div');
      p.className = 'hero-particle';
      const dx = `${(Math.random() - 0.5) * 200}px`;
      const dy = `${(Math.random() - 0.5) * -200}px`;
      p.style.setProperty('--dx', dx);
      p.style.setProperty('--dy', dy);
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      heroEl.appendChild(p);
      setTimeout(() => p.remove(), 2000);
    }
  }
});