import timer from './timer.js';

const timerPlugin = () => {
  const allDiv = document.querySelectorAll('div');

  let timerDiv;

  for (let i = 0; i < allDiv.length; i++) {
    if (allDiv[i].dataset.timerDeadline) {
      timerDiv = allDiv[i];
      timer(timerDiv);
    }
  }
};

timerPlugin();
