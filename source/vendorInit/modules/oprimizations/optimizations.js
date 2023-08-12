// let body = document.querySelector('body');
// let allSlides = document.querySelectorAll('');
let allSections = document.querySelectorAll('.section');

export function optimizations() {

	const callback = (entries) => {
		entries.forEach((entry) => {
			const { target, isIntersecting } = entry;
			if (isIntersecting) {
				console.log('12');
				target.classList.add('view');
				observer.unobserve(target);
			}
		})
	}

	const options = {
		// root: document.querySelector(".container"),
		rootMargin: "0px 0px 75px 0px",
		threshold: 0.1,
	};
	const observer = new IntersectionObserver(callback, options)

	allSections.forEach((section) => {
		observer.observe(section)
	});


	
}
