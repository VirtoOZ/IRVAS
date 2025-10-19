const tabs = (tabHeaderSelector, tabSelector, contentSelector, activeClass, disp = 'block') => {
	const header = document.querySelector(tabHeaderSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	const tabContentHide = () => {
		content.forEach((item) => {
			item.style.display = 'none';
		})
		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	};

	const tabContentShow = (i = 0) => {
		content[i].style.display = disp;
		tab[i].classList.add(activeClass);
	};
	tabContentHide();
	tabContentShow();

	header.addEventListener('click', (e) => {
		const et = e.target;
		e.preventDefault();
		// if (e.target && (e.target.classList.contains(tabSelector.replace(/\./, "")) ||
		// 	e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
		if (et && et.closest(tabSelector)) {
			tab.forEach((item, index) => {
				if (et.closest(tabSelector) === item) {
					tabContentHide();
					tabContentShow(index);
				}
			});
		}
	})
};

export default tabs;