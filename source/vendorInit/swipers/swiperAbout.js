const swiperAboutEl = document.getElementById('#swiper-about');
// const aboutInner = swiperAboutEl.querySelector(".about-section__inner");
// const allAboutDesc = document.querySelectorAll("[data-sliderdesc]");
let allAboutDesc = document.querySelectorAll('.about-section__description');
let swiperSlide = document.querySelectorAll(".swiper-slide");
let swiperDesc = [];
let aboutDesc = [];

const swiperAbout = new Swiper('.swiper-about', {
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
});

export let galleryThumbs = new Swiper(".gallery-thumbs", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	touchRatio: 0.2,
	slideToClickedSlide: true,
});

export let galleryTop = new Swiper(".gallery-top", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});

swiperSlide.forEach(el => {

	if (el.dataset.desc) {
		swiperDesc.push(el);
	}
})

allAboutDesc.forEach(el => {
	if (el.dataset.sliderdesc) {
		aboutDesc.push(el);
	}
});

if (swiperSlide) {

	for (let i = 0; i <= swiperSlide.length; i++) {

			if (swiperSlide[i] === aboutDesc[i]) {
				swiperSlide[i].dataset.desc
				console.log('123123')
			}

		}

}





export default {swiperAbout, galleryTop, galleryThumbs};

