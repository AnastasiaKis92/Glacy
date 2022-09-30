import noUiSlider from 'nouislider';

const rangeElement = document.querySelector('.filter__range');
const rangePrices = document.querySelectorAll('.filter__price');
const catalogPrices = document.querySelectorAll('.catalog__price');

// Инициализация слайдера
if (rangeElement) {
  noUiSlider.create(rangeElement, {
    range: {
      min: 0,
      max: 800,
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

  // Получение данных слайдера
  rangeElement.noUiSlider.on('update', () => {
    // Отображение цены в блоке сортировка
    const rangeValues = rangeElement.noUiSlider.get();
    for (let i = 0; i < rangePrices.length; i++) {
      rangePrices[i].innerHTML = `${rangeValues[i]} ₽`;
    }

    filter(rangeValues[0], rangeValues[1]);
  });
}

// Отображение товара по фильтру по цене
function filter (min, max) {
  for (let i = 0; i < catalogPrices.length; i++) {
    if (min <= catalogPrices[i].innerHTML.replace(/[ ₽/A-zА-я]+/g, '') && catalogPrices[i].innerHTML.replace(/[ ₽/A-zА-я]+/g, '') <= max) {
      catalogPrices[i].closest('article').style.display = 'grid';
    } else {
      catalogPrices[i].closest('article').style.display = 'none';
    }
  }
}

