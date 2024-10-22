/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
// Массив текстов
const texts = ['Блаженны нищие духом, ибо их есть Царство Небесное (Мф. 5:3)', 'Блаженны плачущие, ибо они утешатся (Мф. 5:4)', 'Блаженны кроткие, ибо они наследуют землю (Мф. 5:5)'];
const textContainer = document.getElementById('text-container');
const renderButton = document.getElementById('render-button');

// Функция для рендеринга случайного текста без повторений
const renderRandomText = () => {
  if (texts.length === 0) {
    // Обновляем страницу, если все тексты были показаны
    location.reload();
    return;
  }
  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomText = texts[randomIndex];

  // Рендерим случайный текст
  textContainer.textContent = randomText;

  // Удаляем использованный текст из массива
  texts.splice(randomIndex, 1);
};
renderButton.addEventListener('click', renderRandomText);
/******/ })()
;
//# sourceMappingURL=bundle.js.map