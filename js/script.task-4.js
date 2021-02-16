/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

const resultRef = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

decrementBtnEl.addEventListener('click',decrement);
incrementBtnEl.addEventListener('click',increment);

function decrement() {
  const currentValue = Number(resultRef.textContent);
  resultRef.textContent = currentValue - 1;
}

function increment() {
  const currentValue = Number(resultRef.textContent);
  resultRef.textContent = currentValue + 1;
}
