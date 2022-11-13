new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper__button-next',
		prevEl: '.swiper__button-prew'
	},
	pagination: {
		el: '.customes__pagination',
		clickable: true
	},
	autoplay: true,
	interval: 4000,
	swipe: true
});
