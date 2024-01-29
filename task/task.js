const el = document.querySelector('#picture');

console.log('picture width', el.offsetWidth);
console.log('picture height', el.offsetHeight);

console.log('picture no frame width', el.clientWidth);
console.log('picture no frame height', el.clientHeight);

console.log('picture frame width', el.clientLeft);

// лучше использовать el.getBoundingClientRect(), т.к offsetWidth / offsetHeight могут давать разные результаты в зависимости от наличия позиционированного родителя у элемента

const box = el.getBoundingClientRect();
console.log('picture outer bottom right corner', box.right, box.bottom);

// получаем координаты сложением всех метрик слева / сверху
// Ширину рамки слева можем точно определить при помощи clientLeft (ширина рамки справа может отличаться и для нее нет специального свойства)
console.log(
	'picture inner bottom right corner',
	box.left + el.clientLeft + el.clientWidth,
	box.left + el.clientTop + el.clientHeight,
);
