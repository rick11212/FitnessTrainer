
const buttonWhite = document.querySelectorAll('.button--white');
const buttonBlack = document.querySelectorAll('.button--black');

buttonWhite.forEach(function (item) {
	item.addEventListener('mouseover', function () {
		this.nextElementSibling.classList.remove('button--black');
		this.nextElementSibling.classList.add('button--white');

	})
})
buttonWhite.forEach(function (item) {
	item.addEventListener('mouseout', function () {
		this.classList.add('button--black');
	})
})

buttonBlack.forEach(function (item) {
	item.addEventListener('mouseover', function () {
		this.previousElementSibling.classList.remove('button--black');
		this.previousElementSibling.classList.add('button--white');

	})
})

buttonBlack.forEach(function (item) {
	item.addEventListener('mouseout', function () {
		this.classList.add('button--black');
	})
})