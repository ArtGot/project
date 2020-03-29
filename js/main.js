// реализация бургер-меню

document.getElementById("hamburger-menu-link").onclick = function () {
	openBurgerMenu()
};

document.getElementById("hamburger-menu__img-link").onclick = function () {
	openBurgerMenu()
};

function openBurgerMenu() {
	document.getElementById("hamburger-menu").classList.toggle("hamburger-menu--activ");
}

// реализация списка "Команда"

const teamMembers = document.querySelectorAll(".team__item");

for (let i = 0; i < teamMembers.length; i++) {
	teamMembers[i].addEventListener("click", toogleClass);
};

function toogleClass(e) {
	e.preventDefault();

	if (e.target.closest(".team__item").classList.contains("team__item--activ") === false) {
		for (let i = 0; i < teamMembers.length; i++) {
			teamMembers[i].closest(".team__item").classList.remove("team__item--activ");
		}
		e.target.closest(".team__item").classList.add("team__item--activ");
	} else {
		e.target.closest(".team__item").classList.remove("team__item--activ");
	};
};

// реализация списка "Меню"

const carteElem = document.querySelectorAll(".carte__item");

for (let i = 0; i < carteElem.length; i++) {
	carteElem[i].addEventListener("click", toogleClassCarte);
};

function toogleClassCarte(ev) {
	ev.preventDefault();

	if (ev.target.closest(".carte__item").classList.contains("carte__item--activ") === false) {
		for (let i = 0; i < carteElem.length; i++) {
			carteElem[i].closest(".carte__item").classList.remove("carte__item--activ");
		}
		ev.target.closest(".carte__item").classList.add("carte__item--activ");
	} 	else {
		ev.target.closest(".carte__item").classList.remove("carte__item--activ");
	};
};

// реализация Слайдера

const left = document.querySelector(".scroll__left-link");
const right = document.querySelector(".scroll__right-link");
const items = document.querySelector(".burger__items");

right.addEventListener("click", function (e) {
	loop("right", e);
});

left.addEventListener("click", function (e) {
	loop("left", e);
});

function loop(direction, e) {
	e.preventDefault();
	if (direction === "right") {
		items.appendChild(items.firstElementChild);
	} else {
		items.insertBefore(items.lastElementChild, items.firstElementChild);
	}
}

// работа с формами

const order = document.querySelector(".order");
const sentButton = document.querySelector(".btn__submit");

sentButton.addEventListener('click', function (event) {
	event.preventDefault();

	if (validateForm(order)) {
		const data = {
			name: order.elements.name.value,
			phone: order.elements.phone.value,
			comment: order.elements.comment.value,
			to: 'tema131@bk.ru'
		};

		const xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
		xhr.send(JSON.stringify(data));
		xhr.addEventListener('load', function() {
			console.log(xhr.response);
		});
	};
	// 	console.log(order.elements.name.value);
	// 	console.log(order.elements.phone.value);
	// 	console.log(order.elements.comment.value);

	// 	if (order.elements.cash.value == "cash") {
	// 		console.log("Потребуется сдача");
	// 	} else {
	// 		console.log("Оплата по карте");
	// 	}

	// 	if (order.elements.call.checked == true) {
	// 		console.log("Нужно перезвонить");
	// 	};

	// 	if (validateForm(order)) {
	// 		console.log("Всё ок!");
	// 	};
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