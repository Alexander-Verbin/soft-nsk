export const _rangeOutputValue = () => {
	const range = document.querySelectorAll(".range");

	if (range.length > 0) {
		range.forEach((item) => {
			const input = item.querySelector(".range__input");
			const output = item.querySelector(".range__output");

			if (input) {
				input.addEventListener("input", function (e) {
					const value = e.target.value;
					if (output) {
						output.textContent = `${value}%`;
					}
				});
			}
		});
	}
};
