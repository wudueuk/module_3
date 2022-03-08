const body = document.querySelector('body');
const burgerButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

body.addEventListener('click', e => {
  const target = e.target;

  if (target === burgerButton) {
    headerMenu.classList.toggle('header__menu_active');
  } else if (target !== headerMenu || target.closest('.header__link')) {
    headerMenu.classList.remove('header__menu_active');
  }
});
