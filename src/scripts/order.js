econst order = document.querySelector(".order");
const sentButton = document.querySelector(".btn__submit");

const overlayElement = document.querySelector(".overlay");

sentButton.addEventListener('click', function (event) {
	event.preventDefault();

	if (validateForm(order)) {

		var formData = new FormData(order);
		formData.append("to", "tema131@bk.ru");
		formData.delete("street");
		formData.delete("house");
		formData.delete("housing");
		formData.delete("flat");
		formData.delete("floor");
		formData.delete("cash");

		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
		xhr.send(formData);

		const overlayContent = document.querySelector(".content");

		overlayContent.textContent = "Данные отправлены";
		overlayElement.style.display = "flex";

		document.body.style.overflow = "hidden";
	};

	const closeElement = overlayElement.querySelector(".close");

	closeElment.addEventListener("click", function (e) {
		e.preventDefault();
		overlayElement.style.display = "none";
		document.body.style.overflow = "auto";
	});

	overlayElement.addEventListener("click", function (e) {
		if (e.target === overlayElement) {
			closeElement.click();
		}
	});

});

function validateForm(form) {
	let valid = true;

	if (!validateField(form.elements.name)) {
		valid = false;
	};

	if (!validateField(form.elements.phone)) {
		valid = false;
	};

	if (!validateField(form.elements.comment)) {
		valid = false;
	};

	return valid;
};

function validateField(field) {
	field.nextElementSibling.textContent = field.validationMessage;
	return field.checkValidity();
};