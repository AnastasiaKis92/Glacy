const className = 'nav';
const container = document.querySelector(`.${className}`);
const toggleButton = container.querySelector('.nav__toggle');

container.classList.remove('nav--nojs');

if (document.documentElement.clientWidth > 1023) {
  container.classList.remove(`${className}--closed`);
  container.classList.add(`${className}--opened`);
}

const onButtonClick = (evt) => {
  evt.preventDefault();
  container.classList.toggle(`${className}--closed`);
  container.classList.toggle(`${className}--opened`);
};

toggleButton.addEventListener('click', onButtonClick);
