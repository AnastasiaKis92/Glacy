import IMask from 'imask';
import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';

// Calendar
const addCalendar = () => {
  if (document.getElementById('calendar')) {
    flatpickr(document.getElementById('calendar'), {
      altFormat: 'd.m.Y',
      minDate: 'today',
      maxDate: new Date().fp_incr(14),
      altInput: true,
      locale: Russian,
      disableMobile: 'true',
    });
  }
};

// Telephone
const error = document.querySelector('.delivery-order__input-error');
const inputPhone = document.querySelector('input[type=tel]');
const submitButton = document.querySelector('.delivery-order__button');

const initPhoneMask = () => IMask(inputPhone, {
  mask: '+{7} 000 000-00-00',
  country: 'Russia',
  prepare: function (appended, masked) {
    if (appended === '8' && masked.value === '') {
      return '';
    }
    return appended;
  },

  commit: function(value, masked) {
    if(masked.value.length !== 16 && masked.value.length !== 0) {
      error.style.display = 'block';
      submitButton.disabled = true;
      inputPhone.classList.add('invalid');
    } else {
      error.style.display = 'none';
      submitButton.disabled = false;
      inputPhone.classList.remove('invalid');
    }
  }
});

const addPhone = () => {
  if (inputPhone) {
    inputPhone.addEventListener('keyup', () => {
      initPhoneMask();
    });
  }
};

export {addCalendar, addPhone};
