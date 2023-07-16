const swiperMain = new Swiper('.swiper-main', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	speed: 800,
	// centeredSlides: true,
	grab: true,
	grabCursor: true,
	loop: true,
	preloadImages: true,
	autoplay: {
		delay: 3500,
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
	lazyPreloaderClass: '.swiper-lazy-loader',

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

export default swiperMain;