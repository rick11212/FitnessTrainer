const menu = document.querySelector('.menu__icon');


menu.addEventListener('click', function () {
	document.querySelector('.menu__body').classList.toggle('_active');
	document.querySelector('.menu__icon').classList.toggle('_active');
})
