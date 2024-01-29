document.addEventListener('click', function(e) {
	document.querySelector('#coordinatesDisplay').innerHTML = `
	X: ${e.clientX} <br>
	Y: ${e.clientY}
	`;
});
