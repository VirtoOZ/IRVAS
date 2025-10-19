import modalState from "./modalState.js";
import checkDigitsInput from "./checkDigitInput.js";
import modals from "./modals.js";

const chengeModalState = () => {
	const windView = document.querySelectorAll('.balcon_icons_img'),
		windWidth = document.querySelectorAll('#width'),
		windHeight = document.querySelectorAll('#height'),
		windType = document.querySelectorAll('#view_type'),
		windProfile = document.querySelectorAll('.checkbox');

	const setRequire = (index) => {
		console.log(modalState.lockIndex[index]);
		modalState.lockIndex[index] ? null : modalState.lockIndex.push(1);
		if (modalState.lockIndex.length === 2) {
			modalState.lockIndex.every((item) => {
				if (item === 1) {
					modalState.lock = true;
					modals();
				}
			})
		}
	};

	checkDigitsInput('#width');
	checkDigitsInput('#height');

	const bindActionToElem = (elem, event, prop) => {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						modalState[prop] = i;
						setRequire(0);
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? modalState[prop] = 'Холодный' : modalState[prop] = 'Теплый';
							elem.forEach((el, j) => {
								el.checked = false;
								if (i === j) {
									el.checked = true;
								}
							});
							setRequire(3);
						}
						else {
							modalState[prop] = item.value;
							setRequire(1);
						}
						break;
					case 'SELECT':
						modalState[prop] = item.value;
						setRequire(2);
						break;
				}
				console.log(modalState);
			})
		});
	};
	bindActionToElem(windView, 'click', 'view');
	bindActionToElem(windWidth, 'input', 'width');
	bindActionToElem(windHeight, 'input', 'height');
	bindActionToElem(windProfile, 'input', 'profile');
	bindActionToElem(windType, 'change', 'type');
};

export default chengeModalState;