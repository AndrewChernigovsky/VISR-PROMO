const regexp = /A0/gm;

const objObservers = {
	mainSliderImages: {
		elements: function () {
			let allMainSlidesImages = document.querySelectorAll(
				".swiper-main .swiper-wrapper .swiper-slide picture"
			);
			return allMainSlidesImages;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					let datasrc = target.getAttribute("data-src");
					if (source.length > 0) {
						source.forEach((sourceEl) => {
							let src = sourceEl.getAttribute("srcset");
							let reg = src.match(regexp);
							if (reg !== null) {
								reg = reg.slice(0, 1).toString();
								sourceEl.setAttribute(
									"srcset",
									src.replaceAll(reg, datasrc)
								);
							}
						});
					}
				}
			});
		},
		options: {
			root: document.querySelector(".swiper-main"),
			rootMargin: "0px 200px 0px 0px",
			threshold: 0.1,
		},
		observerInit: function () {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((image) => {
				this.observerInit().observe(image);
			});
		},
	},
	mainSliderVideos: {
		elements: function () {
			let allMainSlidesVideos = document.querySelectorAll(
				".swiper-main .swiper-wrapper .swiper-slide video"
			);
			return allMainSlidesVideos;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					target.load();

					source.forEach((sourceEl) => {
						let src = sourceEl.getAttribute("data-src");
						sourceEl.setAttribute("src", src);
						sourceEl.setAttribute("autoplay");

					});
					target.unobserve();
					source.forEach((sourceEl) => {
						// let src = sourceEl.getAttribute("data-src");
						// let src = sourceEl.getAttribute("src")
						sourceEl.removeAttribute("autoplay");
						sourceEl.removeAttribute("src");
					});
				}
			});
		},
		options: {
			root: document.querySelector(".swiper-main"),
			rootMargin: "0px 0px 0px 0px",
			threshold: 1,
		},
		observerInit: function () {
			let init = new IntersectionObserver(this.callback, this.options);

			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((video) => {
				this.observerInit().observe(video);
			});
		},
	},
	sections: {
		elements: function () {
			let allSections = document.querySelectorAll(".section");
			return allSections;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;

				if (isIntersecting) {
					target.classList.add("view");
				}
			});
		},
		options: {
			rootMargin: "0px 0px 75px 0px",
			threshold: 0.1,
		},
		observerInit: function () {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((section) => {
				this.observerInit().observe(section);
			});
		},
	},
	aboutSliderVideos: {
		elements: function () {
			let allMainSlidesVideos = document.querySelectorAll(
				".swiper-about .swiper-wrapper .swiper-slide video"
			);
			return allMainSlidesVideos;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					let datasrc = target.getAttribute("data-src");
					source.forEach((sourceEl) => {
						let src = sourceEl.getAttribute("src");
						let reg = src.match(regexp);
						if (reg !== null) {
							reg = reg.slice(0, 1).toString();
							sourceEl.setAttribute(
								"src",
								src.replaceAll(reg, datasrc)
							);
						}
					});
				}
			});
		},
		options: {
			root: document.querySelector(".swiper-about .swiper-wrapper"),
			rootMargin: "0px 0px 0px 0px",
			threshold: 0,
		},
		observerInit: function () {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((video) => {
				this.observerInit().observe(video);
			});
		},
	},
	aboutSliderImages: {
		elements: function () {
			let allMainSlidesImages = document.querySelectorAll(
				".swiper-aboutThumbs .swiper-wrapper .swiper-slide picture"
			);
			return allMainSlidesImages;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				if (isIntersecting) {

					let source = target.querySelectorAll("source");
					let datasrc = target.getAttribute("data-src");
					if (source.length > 0) {
						source.forEach((sourceEl) => {
							let src = sourceEl.getAttribute("srcset");
							let reg = src.match(regexp);
							if (reg !== null) {
								reg = reg.slice(0, 1).toString();
								sourceEl.setAttribute(
									"srcset",
									src.replaceAll(reg, datasrc)
								);
							}
						});
					}
				}
			});
		},
		options: {
			root: document.querySelector(".swiper-aboutThumbs"),
			rootMargin: "0px 200px 0px 0px",
			threshold: 0.1,
		},
		observerInit: function () {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((image) => {
				this.observerInit().observe(image);
			});
		},
	},
};

const {
	mainSliderVideos,
	sections,
	mainSliderImages,
	aboutSliderVideos,
	aboutSliderImages ,
} = objObservers;

export function observe() {
	mainSliderVideos.observerItems();
	sections.observerItems();
	mainSliderImages.observerItems();
	aboutSliderVideos.observerItems();
	aboutSliderImages.observerItems();
}


export default observe;
