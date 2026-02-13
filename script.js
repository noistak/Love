const timelineData = [
  {
    date: "30 декабря",
    title: "Интересное знакомство",
    description: "Сообщение, с которого все сдвинулось",
  },
  {
    date: "15 января",
    title: "Первое свидание",
    description: "Тот самый ресторан с видом на город",
  },
  {
    date: "28 января",
    title: "Ночной разговор",
    description: "Когда мы говорили до 4 утра",
  },
  {
    date: "5 февраля",
    title: "Сюрприз",
    description: "Цветы и шоколад в офисе",
  },
  {
    date: "10 февраля",
    title: "Прогулка",
    description: "По набережной под звездами",
  },
  {
    date: "12 февраля",
    title: "Подарок",
    description: "Который ты так хотела",
  },
  {
    date: "13 февраля",
    title: "Подготовка",
    description: "Секретный проект для тебя",
  },
  {
    date: "14 февраля",
    title: "Сегодня",
    description: "Особенный день для нас",
  },
  {
    date: "Скоро",
    title: "Будущее",
    description: "Которое мы создадим вместе",
  },
];

function nextScreen(currentScreen) {
  const current = document.getElementById(`screen${currentScreen}`);

  // Плавное исчезновение текущего экрана
  current.style.opacity = "0";

  setTimeout(() => {
    current.classList.remove("active");
    current.classList.add("hidden");
    current.style.opacity = ""; // Сброс инлайн-стиля

    if (currentScreen === 1) {
      showScreen2();
    } else if (currentScreen === 2) {
      showScreen3();
    } else if (currentScreen === 3) {
      showScreen4();
    } else if (currentScreen === 4) {
      showScreen5();
    } else if (currentScreen === 5) {
      showScreen6();
    }

    // Прокрутка вверх при смене экрана
    window.scrollTo(0, 0);
  }, 600);
}

function showScreen2() {
  const screen2 = document.getElementById("screen2");
  screen2.classList.remove("hidden");

  // Ждём, пока экран станет видимым
  setTimeout(() => {
    screen2.classList.add("active");

    // Появление элементов поэтапно
    setTimeout(() => {
      const subtitle = screen2.querySelector(".subtitle");
      subtitle.style.opacity = "1";
      subtitle.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
      const subtext = screen2.querySelector(".subtext");
      subtext.style.opacity = "1";
      subtext.style.transform = "translateY(0)";
    }, 600);

    setTimeout(() => {
      const btn = screen2.querySelector(".btn");
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 900);
  }, 50);
}

function showScreen3() {
  const screen3 = document.getElementById("screen3");
  screen3.classList.remove("hidden");

  setTimeout(() => {
    screen3.classList.add("active");

    // Появление текста "То, что стало важным"
    setTimeout(() => {
      const importantText = document.getElementById("importantText");
      importantText.classList.add("visible");

      // Через 3 секунды перемещаем текст наверх
      setTimeout(() => {
        importantText.classList.remove("visible");
        importantText.classList.add("moved");

        // После перемещения показываем хронологию
        setTimeout(() => {
          const container = document.getElementById("timelineContainer");
          container.style.display = "flex";
          container.style.opacity = "1";
          container.style.transform = "translateY(0)";
          createTimeline();

          // Через 2 секунды после появления последнего элемента хронологии показываем кнопку
          setTimeout(
            () => {
              const afterTimeline = document.getElementById("afterTimeline");
              afterTimeline.style.display = "block";
              setTimeout(() => {
                afterTimeline.classList.add("visible");
              }, 100);
            },
            timelineData.length * 250 + 1000,
          );
        }, 300);
      }, 3000);
    }, 300);
  }, 50);
}

function showScreen4() {
  const screen4 = document.getElementById("screen4");
  screen4.classList.remove("hidden");

  setTimeout(() => {
    screen4.classList.add("active");
  }, 50);
}

function showScreen5() {
  const screen5 = document.getElementById("screen5");
  screen5.classList.remove("hidden");

  setTimeout(() => {
    screen5.classList.add("active");

    // Появление текста постепенно
    setTimeout(() => {
      document.getElementById("line1").classList.add("visible");
    }, 300);

    setTimeout(() => {
      document.getElementById("line2").classList.add("visible");
    }, 1300);

    setTimeout(() => {
      document.getElementById("line3").classList.add("visible");
    }, 2300);

    setTimeout(() => {
      document.getElementById("line4").classList.add("visible");
    }, 3300);

    setTimeout(() => {
      document.getElementById("line5").classList.add("visible");
    }, 4300);

    setTimeout(() => {
      document.getElementById("finalBtn").classList.add("visible");
    }, 5300);
  }, 50);
}

function showScreen6() {
  const screen6 = document.getElementById("screen6");
  screen6.classList.remove("hidden");

  setTimeout(() => {
    screen6.classList.add("active");

    // Появление финального текста
    setTimeout(() => {
      document.getElementById("finalLine1").classList.add("visible");
    }, 500);

    setTimeout(() => {
      document.getElementById("finalLine2").classList.add("visible");
    }, 2500);
  }, 50);
}

function restart() {
  // Скрываем все экраны
  for (let i = 1; i <= 6; i++) {
    const screen = document.getElementById(`screen${i}`);
    screen.classList.remove("active");
    screen.classList.add("hidden");
  }

  // Сбрасываем все анимации
  document.getElementById("line1").classList.remove("visible");
  document.getElementById("line2").classList.remove("visible");
  document.getElementById("line3").classList.remove("visible");
  document.getElementById("line4").classList.remove("visible");
  document.getElementById("line5").classList.remove("visible");
  document.getElementById("finalBtn").classList.remove("visible");
  document.getElementById("finalLine1").classList.remove("visible");
  document.getElementById("finalLine2").classList.remove("visible");

  // Показываем первый экран
  setTimeout(() => {
    document.getElementById("screen1").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("screen1").classList.add("active");
    }, 50);
  }, 300);
}

function createTimeline() {
  const container = document.getElementById("timelineContainer");
  container.innerHTML = "";

  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    const img = document.createElement("div");
    img.className = "timeline-img";
    img.textContent = item.date;

    const text = document.createElement("div");
    text.className = "timeline-text";

    const date = document.createElement("div");
    date.className = "timeline-date";
    date.textContent = item.date;

    const title = document.createElement("div");
    title.className = "timeline-title";
    title.textContent = item.title;

    const desc = document.createElement("div");
    desc.className = "timeline-desc";
    desc.textContent = item.description;

    text.appendChild(date);
    text.appendChild(title);
    text.appendChild(desc);

    timelineItem.appendChild(img);
    timelineItem.appendChild(text);

    container.appendChild(timelineItem);

    setTimeout(() => {
      timelineItem.classList.add("visible");
    }, index * 250);
  });
}
