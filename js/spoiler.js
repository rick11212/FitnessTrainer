const title = document.querySelectorAll('.how__title');

title.forEach(function (item) {
	item.addEventListener('click', function () {
		this.nextElementSibling.classList.toggle('how__hidden');
		this.previousElementSibling.classList.toggle('how__hidden');
		this.classList.toggle('how__box-shadow');
	})
});




