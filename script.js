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

const watchBtn = document.querySelector('#screen2 .btn');
const screen3 = document.getElementById('screen3');
const introText = document.getElementById('introText');
const timelineWrapper = document.getElementById('timelineWrapper');

watchBtn.addEventListener('click', () => {

  // скрываем экран 2
  screen2.classList.remove('screen--active');

  setTimeout(() => {
    screen3.classList.add('screen--active');

    // показываем центральный текст
    setTimeout(() => {
      introText.classList.add('active');
    }, 300);

    // через 2 секунды перенос вверх
    setTimeout(() => {
      introText.classList.add('to-top');

      // показываем таймлайн
      setTimeout(() => {
        timelineWrapper.classList.add('visible');
      }, 800);

    }, 2300);

  }, 1000);

});
