/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const refs = {
    input : document.querySelector('#name-input'),
    span : document.querySelector('#name-output'),
}
const { input, span } = refs;
const defauitName = 'незнакомец';

input.addEventListener('input', handleChangeInput);

function handleChangeInput({ target }) {
    const value = target.value;
    span.textContent = value ? value : defauitName;

}