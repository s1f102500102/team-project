// スクロール量を読んで CSS変数＆表示制御
const maxScroll = 200;
const heroEl   = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const y     = window.scrollY;
  const ratio = Math.min(y / maxScroll, 1);

  // ヒーロー透明度＆縮小
  document.documentElement.style.setProperty('--hero-opacity', 1 - ratio);
  document.documentElement.style.setProperty('--hero-scale', 1 - ratio * 0.012);


  // ヘッダー不透明度
  document.documentElement.style.setProperty('--header-opacity', ratio);

  // ヒーロー要素自体を非表示に
  if (ratio >= 1) heroEl.classList.add('hidden');
  else            heroEl.classList.remove('hidden');

  // ロゴ＆リンク色の切り替え用
  if (ratio >= 1) document.body.classList.add('scrolled');
  else            document.body.classList.remove('scrolled');
});