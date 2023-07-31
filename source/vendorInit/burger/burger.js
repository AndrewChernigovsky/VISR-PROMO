let button = document.getElementById('btn-menu');
let burgerNav = document.querySelector('.navigation');

button.addEventListener('click', function () {
	burgerNav.classList.toggle("js-active");
	burgerNav.classList.toggle("no-js");
})
