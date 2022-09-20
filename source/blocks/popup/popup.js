import {isEscapeKey, closeContainer} from '../../scripts/util.js';

const popupSearchForm = document.querySelector('.popup-search__form');
const popupSearchInput = popupSearchForm.querySelector('.popup-search__input');
const popupSearchButton = popupSearchForm.querySelector('.popup-search__button');
const overlay = document.querySelector('.js-overlay-popup');
const buttonIds = ['search', 'login', 'cart', 'feedback'];

// Очистка инпута поиска по крестику
const onPopupSearchButtonClick = () => {
  popupSearchInput.value = '';
};
popupSearchButton.addEventListener('click', onPopupSearchButtonClick);

// Функция открытия/закрытия модалок
buttonIds.forEach((item) => {
  const popupContainer = document.querySelector(`.popup-${item}__wrapper`);
  const popupForm = document.querySelector(`.popup-${item}__form`);

  // Обработчик закрытия по ESC
  function onPopupEscClose (evt) {
    if (isEscapeKey(evt) && popupContainer.classList.contains('active')) {
      evt.preventDefault();
      document.removeEventListener('keydown', onPopupEscClose);
      overlay.classList.remove('active');
      document.querySelector(`.popup-${item}__wrapper.active`).classList.remove('active');
    }
  }

  // Открытие модального окна
  document.getElementById(item).addEventListener('click', (evt) => {
    evt.preventDefault();
    popupContainer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.addEventListener('keydown', onPopupEscClose);
    if (popupForm) {
      popupForm.reset();
    }
  });

  // Закрытие модального окна по крестику
  const onPopupClose = () => {
    closeContainer(popupContainer, overlay);
  };

  const popupCloseButton = document.querySelectorAll('.popup__close-button');
  popupCloseButton.forEach((button) => {
    button.addEventListener('click', onPopupClose);
  });

  // Закрытие по клику в области вне модального окна
  overlay.addEventListener('click', onPopupClose);
});

// Отменяет закрытие по ESC когда фокус на инпуте
document.querySelectorAll('.input').forEach((input) => {
  input.addEventListener('keydown', onInputStopEsc);
});

function onInputStopEsc (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}
