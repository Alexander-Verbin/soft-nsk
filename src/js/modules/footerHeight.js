export const _footerHeight = () => {
	const footer = document.querySelector(".footer");
	const footerHeight = footer.getBoundingClientRect().height;

	document.documentElement.style.setProperty(
		"--footer-height",
		`${footerHeight / 16}rem`
	);
};
