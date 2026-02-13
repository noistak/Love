const startBtn = document.getElementById('startBtn');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const steps = document.querySelectorAll('#screen2 .step');

startBtn.addEventListener('click', () => {
  // Плавно скрываем первый экран
  screen1.classList.remove('screen--active');

  setTimeout(() => {
    // Показываем второй экран
    screen2.classList.add('screen--active');

    // Пошаговая анимация
    steps.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('step--visible');
      }, index * 600);
    });

  }, 1000);
});
