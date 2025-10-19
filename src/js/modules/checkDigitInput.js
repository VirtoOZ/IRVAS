const checkDigitsInput = (elemSelector) => {
	const digitInput = document.querySelectorAll(elemSelector);
	digitInput.forEach((item) => {
		item.addEventListener("input", () => {
			item.value = item.value.replace(/\D/, '');
		});
	})
};

export default checkDigitsInput;