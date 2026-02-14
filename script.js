// Данные для хронологии
const timelineData = [
  {
    date: "30 декабря",
    img: "img/1.png",
    text: "Интересное знакомство. Сообщение, с которого все сдвинулось",
  },
  {
    date: "2 января",
    img: "img/2.png",
    text: "Первая встреча. Прогулка. Кино. Реальность оказалась лучше переписки",
  },
  {
    date: "7 января",
    img: "img/3.png",
    text: "Рождество. Первый подарок - маленький, но важный",
  },
  {
    date: "8 января",
    img: "img/4.png",
    text: "Впервые проводил тебя до дома. Не хотелось, чтобы вечер заканчивался...",
  },
  {
    date: "10 января",
    img: "img/5.png",
    text: "Первый кружок от тебя. Поймал себя на том, что пересматриваю",
  },
  {
    date: "22 января",
    img: "img/6.png",
    text: "Первый совместный просмотр фильма у меня",
  },
  {
    date: "28 января",
    img: "img/7.png",
    text: "Первый поцелуй. Точка, после которой все стало иначе",
  },
  {
    date: "14 февраля",
    img: "img/8.png",
    text: "Первый мой интерактивный подарок",
  },
];

// Навигация
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach((screen) => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

// Экран 1 -> 2
const startBtn = document.getElementById("startBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const steps = document.querySelectorAll("#screen2 .step");

startBtn.addEventListener("click", () => {
  screen1.classList.remove("active");

  setTimeout(() => {
    showScreen("screen2");

    steps.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("step--visible");
      }, index * 600);
    });
  }, 1000);
});

// Экран 2 -> 3
const watchBtn = document.querySelector("#screen2 .btn");
const screen3 = document.getElementById("screen3");
const introText = document.getElementById("introText");
const timelineWrapper = document.getElementById("timelineWrapper");
const timelineContainer = document.getElementById("timelineContainer");

watchBtn.addEventListener("click", () => {
  screen2.classList.remove("active");

  setTimeout(() => {
    showScreen("screen3");

    // Показываем центральный текст
    setTimeout(() => {
      introText.classList.add("active");
    }, 300);

    // Перемещаем текст вверх и показываем таймлайн
    setTimeout(() => {
      introText.classList.add("to-top");

      setTimeout(() => {
        timelineWrapper.classList.add("visible");
        createTimeline();
      }, 800);
    }, 2300);
  }, 1000);
});

// Создание элементов хронологии
function createTimeline() {
  timelineContainer.innerHTML = "";

  timelineData.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `timeline-item ${index % 2 === 1 ? "right" : "left"}`;

    const photoBlock = document.createElement("div");
    photoBlock.className = "photo-block";

    const dateDiv = document.createElement("div");
    dateDiv.className = "date";
    dateDiv.textContent = item.date;

    const img = document.createElement("img");
    img.src = item.img;
    img.width = 161;
    img.height = 161;
    img.alt = "";
    img.onerror = () => {
      img.style.background = "#333";
      img.style.display = "block";
    };

    photoBlock.appendChild(dateDiv);
    photoBlock.appendChild(img);

    const eventText = document.createElement("div");
    eventText.className = "event-text";
    eventText.textContent = item.text;

    itemDiv.appendChild(photoBlock);
    itemDiv.appendChild(eventText);
    timelineContainer.appendChild(itemDiv);

    // Анимация появления элементов
    setTimeout(
      () => {
        itemDiv.classList.add("visible");
      },
      100 + index * 250,
    );
  });
}

// Экран 3 -> 4
const nextBtn3 = document.querySelector("#screen3 .timeline-footer .btn");
const screen4 = document.getElementById("screen4");

nextBtn3.addEventListener("click", () => {
  screen3.classList.remove("active");

  setTimeout(() => {
    showScreen("screen4");
  }, 800);
});

// Экран 4 -> 5
const nextBtn4 = document.querySelector(
  "#screen4 .music-buttons .btn:last-child",
);
const screen5 = document.getElementById("screen5");
const lines = document.querySelectorAll("#screen5 .line");

nextBtn4.addEventListener("click", () => {
  screen4.classList.remove("active");

  setTimeout(() => {
    showScreen("screen5");

    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("visible");
      }, index * 2000);
    });

    // Показываем кнопку после появления последней строки
    const totalLines = lines.length;
    const lastLineDelay = (totalLines - 1) * 2000; // когда появится последняя строка
    // Добавляем 300 мс, чтобы анимация строки точно завершилась
    setTimeout(() => {
      document.querySelector('.final-button').classList.add('visible');
    }, lastLineDelay + 300);
  }, 800);
});

// Экран 5 -> 6
const finalBtn = document.getElementById("toFinalScreen");
const screen6 = document.getElementById("screen6");
const ultimateLines = document.querySelectorAll("#screen6 .ultimate-line");

finalBtn.addEventListener("click", () => {
  screen5.classList.remove("active");

  setTimeout(() => {
    showScreen("screen6");

    ultimateLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("visible");
      }, index * 2000);
    });
  }, 800);
});

// Возврат к началу
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", () => {
  screen6.classList.remove("active");

  // Сброс всех анимаций
  document
    .querySelectorAll(".step--visible, .visible, .active, .to-top")
    .forEach((el) => {
      el.classList.remove("step--visible", "visible", "active", "to-top");
    });

  setTimeout(() => {
    showScreen("screen1");
  }, 800);
});
