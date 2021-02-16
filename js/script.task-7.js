/*Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/


const inputRangeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

inputRangeRef.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  spanTextRef.style.fontSize = event.currentTarget.value + "px";
}