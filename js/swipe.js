const swipe = document.querySelectorAll('.customes__dot');
const row = document.querySelectorAll('.customes__row');

swipe.forEach(function (item) {
	item.addEventListener('click', function () {
		this.previousElementSibling.classList.toggle('customes__dot--white');
		this.classList.toggle('customes__dot--white');
	})
});