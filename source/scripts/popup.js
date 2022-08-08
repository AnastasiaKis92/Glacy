import {isEscapeKey, openContainer, closeContainer} from './util.js';

const popupSearchForm = document.querySelector('.popup-search__form');
const popupSearchInput = popupSearchForm.querySelector('.popup-search__input');
const popupSearchButton = popupSearchForm.querySelector('.popup-search__button');

const popupLink = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.js-overlay-popup');

// Очистка инпута по крестику
const onPopupSearchButtonClick = () => {
  popupSearchInput.value = '';
};

popupSearchButton.addEventListener('click', onPopupSearchButtonClick);

if (document.documentElement.clientWidth > 1023) {
  // Открытие / закрытие модальных окон
  popupLink.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      const popupName = evt.target.closest('a').id;
      const popupContainer = document.querySelector(`.${popupName}__wrapper`);
      const popupForm = document.querySelector(`.${popupName}__form`);

      if (evt.target.closest('a').id) {

        if (popupContainer.classList.contains(`${popupContainer}.active`)) {
          closeContainer(popupContainer, overlay);
        }
        else {
          openContainer(popupContainer, overlay);
          document.addEventListener('keydown', onPopupEscClose);
          if (popupForm) {
            popupForm.reset();
          }
        }
      }

      // Закрытие overlay по клику
      const onOverlayClickClose = () => {
        closeContainer(popupContainer, overlay);
      };
      overlay.addEventListener('click', onOverlayClickClose);
    });
  });
}

// Обработчик закрытия по Esc
function onPopupEscClose (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlay.classList.remove('active');
    document.querySelector('.popup.active').classList.remove('active');
    document.removeEventListener('keydown', onPopupEscClose);
  }
}

// Отменяет закрытие по ESC когда фокус на инпуте
document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('keydown', onInputStopEsc);
});

function onInputStopEsc (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}

