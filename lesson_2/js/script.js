'use strict';

const p = document.createElement('p');
const input = document.createElement('input');

document.body.append(input, p);

input.addEventListener('change', () => {
  setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});