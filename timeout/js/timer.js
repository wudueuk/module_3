import createTimer from './createElements.js';
import setElements from './setElements.js';
import {parseDays, parseHours, parseMinutes} from './parse.js';

const timer = timerBody => {
  // Создаем тело таймера
  createTimer(timerBody);

  // Получаем элементы таймера
  const elements = setElements(timerBody);

  // Время окончания акции по локальному времени
  const deadline = new Date(timerBody.dataset.timerDeadline).getTime();
  // Корректируем время окончания акции UTC+3
  const deadlineCorrectly = deadline +
    (new Date().getTimezoneOffset() * 60 * 1000) + (3 * 3600 * 1000);

  const getTimeRemaining = () => {
    const dateNow = Date.now();
    const timeRemaining = deadlineCorrectly - dateNow;
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);

    return {timeRemaining, days, hours, minutes};
  };

  const startTimer = () => {
    const timer = getTimeRemaining();

    elements.timerCountDays.textContent = timer.days;
    elements.timerUnitsDays.textContent = parseDays(+timer.days);
    elements.timerCountHours.textContent = timer.hours;
    elements.timerUnitsHours.textContent = parseHours(+timer.hours);
    elements.timerCountMinutes.textContent = timer.minutes;
    elements.timerUnitsMinutes.textContent = parseMinutes(+timer.minutes);

    const timerId = setTimeout(startTimer, 30000);

    if (timer.days === 0) {
      timerBody.style.backgroundColor = 'green';
    } else {
      timerBody.style.backgroundColor = 'red';
    }

    if (timer.timeRemaining < 0) {
      elements.heroText.remove();
      timerBody.remove();
      clearTimeout(timerId);
    }
  };

  startTimer();
};

export default timer;
