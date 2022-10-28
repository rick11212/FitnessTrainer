const title = document.querySelectorAll('.how__title');
const span = document.querySelectorAll('.how__span');

title.forEach(function (item) {
	item.addEventListener('click', function () {
		this.nextElementSibling.classList.toggle('how__hidden');
	})
});

