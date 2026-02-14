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



const nextBtn3 = document.querySelector('#screen3 .timeline-footer .btn');
const screen4 = document.getElementById('screen4');

nextBtn3.addEventListener('click', () => {
  screen3.classList.remove('screen--active');

  setTimeout(() => {
    screen4.classList.add('screen--active');
  }, 800);
});






const nextBtn4 = document.querySelector('#screen4 .music-buttons .btn:last-child');
const screen5 = document.getElementById('screen5');
const lines = document.querySelectorAll('#screen5 .line');

nextBtn4.addEventListener('click', () => {
  screen4.classList.remove('screen--active');

  setTimeout(() => {
    screen5.classList.add('screen--active');

    // поочерёдное появление строк
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('visible');
      }, index * 2000);
    });

  }, 800);
});



const finalBtn = document.getElementById('toFinalScreen');
const screen6 = document.getElementById('screen6');
const ultimateLines = document.querySelectorAll('#screen6 .ultimate-line');
const restartBtn = document.getElementById('restart');

finalBtn.addEventListener('click', () => {
  screen5.classList.remove('screen--active');

  setTimeout(() => {
    screen6.classList.add('screen--active');

    ultimateLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('visible');
      }, index * 2000);
    });

  }, 800);
});

/* Возврат к началу */
restartBtn.addEventListener('click', () => {
  screen6.classList.remove('screen--active');

  // сброс анимаций
  document.querySelectorAll('.visible').forEach(el => {
    el.classList.remove('visible');
  });

  setTimeout(() => {
    document.getElementById('screen1').classList.add('screen--active');
  }, 800);
});
