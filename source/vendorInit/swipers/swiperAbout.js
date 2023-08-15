const swiperAboutEl = document.getElementById('swiper-about');

let galleryThumbs = new Swiper(".swiper-aboutThumbs", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

const swiperAbout = new Swiper(swiperAboutEl, {
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
	multipleActiveThumbs: false,
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
		slideChange() {},
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
const swiperAboutTh = new Swiper(".swiper-aboutThumbs", {
	spaceBetween: 10,
	slidesPerView: 4,
	thumbs: {
		swiper: swiperAbout,
	},
});

swiperAbout.on("slideChange", () => {
	swiperAboutTh.slideTo(swiperAbout.activeIndex);
});


export default {swiperAbout};
