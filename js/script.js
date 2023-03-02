/* Scroll to top script */
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
	// Do something on scroll
	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
	if (rootElement.scrollTop / scrollTotal > 0.15) {
		// Show button
		scrollToTopBtn.classList.add("showBtn");
	} else {
		// Hide button
		scrollToTopBtn.classList.remove("showBtn");
	}
}

function scrollToTop() {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

/* gsap.from("img", {
	opacity: 0,
	duration: 1,
	delay: 0.3,
	stagger: 0.25,
	ease: "expo.out"
}); */
