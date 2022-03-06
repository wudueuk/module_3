const setElements = body => {
  const heroText = document.querySelector('.hero__text');
  const timerCountDays = body.querySelector('.timer__count_days');
  const timerUnitsDays = body.querySelector('.timer__units_days');
  const timerCountHours = body.querySelector('.timer__count_hours');
  const timerUnitsHours = body.querySelector('.timer__units_hours');
  const timerCountMinutes = body.querySelector('.timer__count_minutes');
  const timerUnitsMinutes = body.querySelector('.timer__units_minutes');

  return {
    heroText,
    timerCountDays,
    timerUnitsDays,
    timerCountHours,
    timerUnitsHours,
    timerCountMinutes,
    timerUnitsMinutes,
  };
};

export default setElements;
