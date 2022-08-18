const navContainer = document.querySelector('.nav');
const burgerButton = document.querySelector('.burger');
const burger = burgerButton.querySelector('.burger__inner');

const onButtonClick = (evt) => {
  evt.preventDefault();
  burger.classList.toggle('active');
  // document.querySelector('.animate').style.display = 'block';
  navContainer.classList.toggle('animate');
  document.body.classList.toggle('hidden');
};

burgerButton.addEventListener('click', onButtonClick);
