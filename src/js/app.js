// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";
import "./files/sliders.js"
import tabs from "./modules/tabs.js";
import modals from "./modules/modals.js";
import forms from "./modules/forms.js"
import chengeModalState from "./modules/chengeModalState.js";
import checkRequired from "./modules/checkRequired.js";

window.addEventListener("DOMContentLoaded", () => {

	chengeModalState();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	// tabs('.balcon_icons', '.balcon_icons_img', '.big_img > picture > img', 'do_image_more', 'inline-block');
	modals();
	forms();
	checkRequired('.popup_calc', '.popup_calc_profile');
});