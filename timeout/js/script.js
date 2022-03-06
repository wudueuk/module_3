import timer from './timer.js';

const timerPlugin = () => {
  const allDiv = document.querySelectorAll('div');

  for (let i = 0; i < allDiv.length; i++) {
    if (allDiv[i].dataset.timerDeadline) {
      timer(allDiv[i]);
    }
  }
};

timerPlugin();
