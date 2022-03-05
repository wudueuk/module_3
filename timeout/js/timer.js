import {
  heroText,
  heroTimer,
  timerCountDays,
  timerUnitsDays,
  timerCountHours,
  timerUnitsHours,
  timerCountMinutes,
  timerUnitsMinutes,
} from './setElements.js';

import {parseDays, parseHours, parseMinutes} from './parse.js';

const timer = () => {
  const deadline = new Date(heroTimer.dataset.timerDeadline).getTime();

  const getTimeRemaining = () => {
    const dateNow = Date.now();
    const timeRemaining = deadline - dateNow;
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);

    return {timeRemaining, days, hours, minutes};
  };

  const startTimer = () => {
    const timer = getTimeRemaining();

    timerCountDays.textContent = timer.days;
    timerUnitsDays.textContent = parseDays(+timer.days);
    timerCountHours.textContent = timer.hours;
    timerUnitsHours.textContent = parseHours(+timer.hours);
    timerCountMinutes.textContent = timer.minutes;
    timerUnitsMinutes.textContent = parseMinutes(+timer.minutes);

    const timerId = setTimeout(startTimer, 30000);

    if (timer.timeRemaining < 0) {
      heroText.remove();
      heroTimer.remove();
      clearTimeout(timerId);
    }
  };

  startTimer();
};

export default timer;
