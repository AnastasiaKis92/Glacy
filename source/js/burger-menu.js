const className = 'main-nav';
const container = document.querySelector(`.${className}`);
const toggleButton = container.querySelector('.main-nav__toggle');

container.classList.remove('main-nav--nojs');

const onButtonClick = (evt) => {
  evt.preventDefault();

  if (container.classList.contains(`${className}--closed`)) {
    container.classList.remove(`${className}--closed`);
    container.classList.add(`${className}--opened`);
  } else {
    container.classList.remove(`${className}--opened`);
    container.classList.add(`${className}--closed`);
  }
};

toggleButton.addEventListener('click', onButtonClick);
