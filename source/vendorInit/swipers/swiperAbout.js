const swiper_about = document.querySelector(".swiper-about");
if (swiper_about) {
	const swiperAbout = new Swiper(".swiper-about", {
		slidesPerView: "auto",
		spaceBetween: 0,
		speed: 800,
		grabCursor: true,
		loop: true,
		preloadImages: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-about-button-next",
			prevEl: ".swiper-about-button-prev",
		},
		// multipleActiveThumbs: false,
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
		on: {
			slideChange() { },
		},
		// thumbs: {
		// 	swiper: galleryThumbs,
		// },
	});

	let allTHumbs = document.querySelectorAll('.swiper-aboutThumbs .swiper-wrapper .swiper-slide')



	allTHumbs.forEach((el) => {
		el.classList.toggle('.swiper-slide-thumb-active')
	})

	swiperAbout.on("slideChange", () => {
	});

}
