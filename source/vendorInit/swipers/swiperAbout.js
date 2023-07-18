const swiperAboutEl = document.getElementById('swiper-about');
// const aboutInner = swiperAboutEl.querySelector(".about-section__inner");
// const allAboutDesc = document.querySelectorAll("[data-sliderdesc]");
let allAboutDesc = document.querySelectorAll('.about-section__description');
let swiperSlide = document.querySelectorAll(".swiper-slide");
let swiperDesc = [];
let aboutDesc = [];

const swiperAbout = new Swiper(swiperAboutEl, {
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
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
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
		slideChange() {
		}
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
// export let galleryThumbs = new Swiper(".gallery-thumbs", {
// 	spaceBetween: 10,
// 	slidesPerView: 4,
// 	freeMode: true,
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
// 	touchRatio: 0.2,
// 	slideToClickedSlide: true,
// });

// export let galleryTop = new Swiper(".gallery-top", {
// 	spaceBetween: 10,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	thumbs: {
// 		swiper: galleryThumbs,
// 	},
// });

// swiperSlide.forEach(el => {

// 	if (el.dataset.desc) {
// 		swiperDesc.push(el);
// 	}
// })

// allAboutDesc.forEach(el => {
// 	if (el.dataset.sliderdesc) {
// 		aboutDesc.push(el);
// 	}
// });

if (swiperAbout) {

}

// swiperAbout.on('slideChange', function () {
// 		console.log("slide changed");

// 		console.log(swiperAbout.activeIndexChange);
// });

// console.log(swiperDesc);

// console.log(aboutDesc)


export default {swiperAbout};

