export const parseDays = days => {
  if (days === 1) {
    return 'день';
  } else if (days > 1 && days < 5) {
    return 'дня';
  } else return 'дней';
};

export const parseHours = hour => {
  if (hour === 1) {
    return 'час';
  } else if (hour > 1 && hour < 5) {
    return 'часа';
  } else return 'часов';
};

export const parseMinutes = minutes => {
  if (minutes === 1 || minutes === 21 || minutes === 31 ||
    minutes === 41 || minutes === 51) {
    return 'минута';
  } else if (minutes > 1 && minutes < 5 || minutes > 21 && minutes < 25 ||
    minutes > 31 && minutes < 35 || minutes > 41 && minutes < 45 ||
    minutes > 51 && minutes < 55) {
    return 'минуты';
  } else return 'минут';
};
