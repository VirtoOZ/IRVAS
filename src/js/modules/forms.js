import modalState from "./modalState.js";
import checkDigitsInput from "./checkDigitInput.js";

const forms = () => {
	const getForms = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('inputs');

	checkDigitsInput('input[name="user_phone"]');

	const messages = {
		loading: 'Отправка...',
		sucсess: 'Отпревлено',
		error: 'Произошла ошибка'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = messages.loading;
		const res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach((item) => {
			item.value = '';
		})
	};

	getForms.forEach((item) => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			// для последней страницы формы калькулятора
			// добавляем стейт к форм дата
			if (item.getAttribute('data-calc') === 'end') {
				for (let key in modalState) {
					formData.append(key, modalState[key]);
				}
			}

			postData('./files/server.php', formData)
				.then((res) => {
					statusMessage.textContent = messages.sucсess;
					console.log(res);
				})
				.catch(() => statusMessage.textContent = messages.error)
				.finally(() => {
					setTimeout(() => {
						clearInputs();
						statusMessage.remove();
					}, 10000);
				});
		})
	})


};

export default forms;