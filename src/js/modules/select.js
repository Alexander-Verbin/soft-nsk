export const _customSelectFn = () => {
	const selects = document.querySelectorAll(".select");

	if (selects.length) {
		selects.forEach((select) => {
			const head = select.querySelector(".select__control");
			const arrow = select.querySelector(".select__arrow");
			const items = select.querySelectorAll(".select__dropdown-item");
			const dropdown = select.querySelector(".select__dropdown");

			head.addEventListener(
				"click",
				() => {
					arrow.classList.toggle("select__arrow--active");
					dropdown.classList.toggle("select__dropdown--active");
					head.classList.toggle("select__control--active");

					items.forEach((item) => {
						const input = item.querySelector(".select__input");
						const itemValue = item.querySelector(".select__value");
						itemValue.textContent = input.value;
						const onClickItem = (e) => {
							if (input.checked) {
								e.stopPropagation();
								arrow.classList.remove("select__arrow--active");
								dropdown.classList.remove("select__dropdown--active");
								head.classList.remove("select__control--active");
								item.removeEventListener("click", onClickItem, false);
							}
						};
						const onOutsideClick = (e) => {
							if (!select.contains(e.target)) {
								arrow.classList.remove("select__arrow--active");
								dropdown.classList.remove("select__dropdown--active");
								head.classList.remove("select__control--active");
								document.removeEventListener("click", onOutsideClick, false);
							}
						};

						item.addEventListener("click", onClickItem, false);

						document.addEventListener("click", onOutsideClick, false);
					});
				},
				false
			);
		});
	}
};
