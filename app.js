document.querySelectorAll('.scroll').forEach(el => {
  window.addEventListener('scroll', () => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('ativo');
    }
  });
});

document.querySelectorAll('.scroll').forEach(el => {
  window.addEventListener('scroll', () => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('ativo');
    }
  });
});
