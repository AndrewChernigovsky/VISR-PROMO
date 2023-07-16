const swiperALL = new Swiper('.swiper-all', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	speed: 800,
	// centeredSlides: true,
	grabCursor: true,
	loop: false,
	preloadImages: true,
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
	// centerInsufficientSlides: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		// 768: {
		// 	spaceBetween: 50,
		// },
		// 1024: {
		// 	spaceBetween: 80,
		// },
		// 1200: {
		// 	spaceBetween: 100,
		// },
	},
});

export default swiperALL;

