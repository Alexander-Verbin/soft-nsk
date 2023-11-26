export const _menu = () => {
	const menu = document.querySelector(".header__menu");
	const burger = document.querySelector(".burger");
	const body = document.body;
	const toggleFunc = () => {
		menu.classList.toggle("header__menu--active");
		burger.classList.toggle("burger--active");
		body.classList.toggle("lock");
	};

	if (window.getComputedStyle(burger, null).display === "block") {
		burger.addEventListener("click", toggleFunc, false);
	}
};
