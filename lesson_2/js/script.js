import debounce from './debounce.js';

const p = document.createElement('p');
const input = document.createElement('input');

document.body.append(input, p);

const updateParagraf = () => {
  p.textContent = input.value;
};

const debounceUpdateParagraf = debounce(updateParagraf, 1000);

input.addEventListener('keyup', debounceUpdateParagraf);
