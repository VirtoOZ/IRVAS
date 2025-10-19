
import modalState from "./modalState.js";

const modals = () => {
	const bindModals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			popups = document.querySelectorAll('[data-modal]');
		console.log(trigger);
		const modalsShow = (popup = modal) => {
			popup.style.display = "block";
			document.body.style.overflow = "hidden";
		}

		const modalsHide = () => {
			popups.forEach((elem) => {
				elem.style.display = "none";
				document.body.style.overflow = "";
			})
		}

		trigger.forEach(item => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}
				// закрыть все модалки
				modalsHide();
				modalsShow();
			})
		})
		close.addEventListener("click", () => {
			modalsHide();
		})
		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				modalsHide();
			}
		})
	};

	function showModalByTime(modal, timer) {
		setTimeout(() => {
			const popup = document.querySelector(modal);
			popup.style.display = "block";
			document.body.style.overflow = "hidden";
		}, timer);
	}

	bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModals('.phone_link', '.popup', '.popup .popup_close');
	bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	if (modalState.lock) {
		bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
		bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	}
	// showModalByTime('.popup', 3000);
};
export default modals;