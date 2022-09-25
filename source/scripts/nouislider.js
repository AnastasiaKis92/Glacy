import noUiSlider from 'nouislider';
const rangeElement = document.querySelector('.filter__range');
const rangePrices = document.querySelectorAll('.filter__price');

const addRange = () => {
  if (rangeElement) {
    noUiSlider.create(rangeElement, {
      range: {
        min: 0,
        max: 3000,
      },
      connect: true,
      start: [100, 500],
      step: 10,
      format: {
        to: function (value) { // форматирование значения из слайдера и вывода его где-либо
          return value.toFixed(0); // вернет запись без цифр после запятой
        },
        from: function (value) { // форматирование значения для слайдера. Этот метод должен строго возвращать число, поэтому используем parseFloat()
          return parseFloat(value);
        },
      }
    });

    rangeElement.noUiSlider.on('update', () => {
      const rangeValues = rangeElement.noUiSlider.get();
      for (let i = 0; i < rangePrices.length; i++) {
        rangePrices[i].innerHTML = `${rangeValues[i]} ₽`;
      }
    });
  }
};
addRange();
export {addRange};
