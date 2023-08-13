// let body = document.querySelector('body');
let allMainSlidesImages = document.querySelectorAll('.swiper-main .swiper-wrapper .swiper-slide picture');
let allMainSlidesVideos = document.querySelectorAll('.swiper-main .swiper-wrapper .swiper-slide video');
let allSections = document.querySelectorAll('.section');

let srcAllMainSlidersImages = []
let regexp = /A0/gm


export function optimizations() {



	const callbackSections = (entries) => {
		entries.forEach((entry) => {
			const { target, isIntersecting } = entry;

			if (isIntersecting) {
				target.classList.add('view');
			}
		})
	}
	const callbackMainSliderImages = (entries) => {
		entries.forEach((entry) => {
			const { target, isIntersecting } = entry;

			if (isIntersecting) {
				target.classList.add("view");
				console.log("Пересекло image");
				console.log(target, "target");
				let source = target.querySelectorAll("source");
				let datasrc = target.getAttribute("data-src");
				source.forEach((sourceEl) => {
					let src = sourceEl.getAttribute("srcset");
					let reg = src.match(regexp);
					if (reg.length > 0) {
						reg = reg.slice(0, 1).toString();
						console.log(reg, "reg Image");
					}

					sourceEl.setAttribute(
						"srcset",
						src.replaceAll(reg, datasrc)
					);
				});
			}
		});
	};
	const callbackMainSliderVideos = (entries) => {
		entries.forEach((entry) => {
			const { target, isIntersecting } = entry;

			if (isIntersecting) {
				target.classList.add('view');
				console.log('Пересекло video');
				console.log(target, "target");


					let source = target.querySelectorAll("source");
					let datasrc = target.getAttribute("data-src");
					source.forEach((sourceEl) => {
						let src = sourceEl.getAttribute("src");

						let reg = src.match(regexp);
						if (reg.length > 0) {

							reg = reg.slice(0, 1).toString();
						}

						sourceEl.setAttribute(
							"src",
							src.replaceAll(reg, datasrc)
						);

					});
			}
		})
	}


	const optionsSections = {
		rootMargin: "0px 0px 75px 0px",
		threshold: 0.1,
	};
	const optionsMainSliderImages = {
		root: document.querySelector(".swiper-main"),
		rootMargin: "0px 200px 0px 0px",
		threshold: 0.1,
	};
	const optionsMainSliderVideos = {
		root: document.querySelector(".swiper-main"),
		rootMargin: "0px 200px 0px 0px",
		threshold: 0.1,
	};
	const observerSections = new IntersectionObserver(
		callbackSections,
		optionsSections
	);
	const observerMainSliderImages = new IntersectionObserver(
		callbackMainSliderImages,
		optionsMainSliderImages
	);
	const observerMainSliderVideos = new IntersectionObserver(
		callbackMainSliderVideos,
		optionsMainSliderVideos
	);

	allSections.forEach((section) => {
		observerSections.observe(section);
	});

	allMainSlidesImages.forEach((image) => {
		observerMainSliderImages.observe(image);
	});
	allMainSlidesVideos.forEach((video) => {
		observerMainSliderVideos.observe(video);
	});


}
