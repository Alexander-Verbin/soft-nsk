export const _headerHeight = () => {
	const header = document.querySelector(".header");
	const headerHeight = header.getBoundingClientRect().height;

	document.documentElement.style.setProperty(
		"--header-height",
		`${headerHeight / 16}rem`
	);
};
