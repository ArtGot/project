// реализация бургер-меню

document.getElementById("hamburger-menu-link").onclick = function () {
	openBurgerMenu()

	document.body.style.overflow = "hidden";
};

document.getElementById("hamburger-menu__img-link").onclick = function () {
	openBurgerMenu()

	document.body.style.overflow = "auto";
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
	} else {
		ev.target.closest(".carte__item").classList.remove("carte__item--activ");
	};
};

// реализация Слайдера

// const left = document.querySelector(".scroll__left-link");
// const right = document.querySelector(".scroll__right-link");
// const items = document.querySelector(".burger__items");

// right.addEventListener("click", function (e) {
// 	loop("right", e);
// });

// left.addEventListener("click", function (e) {
// 	loop("left", e);
// });

// function loop(direction, e) {
// 	e.preventDefault();
// 	if (direction === "right") {
// 		items.appendChild(items.firstElementChild);
// 	} else {
// 		items.insertBefore(items.lastElementChild, items.firstElementChild);
// 	}
// }

$(document).ready(function(){

	let slider = $('.slider').bxSlider();

	$('.scroll__left-link').on('click',function(e){
		e.preventDefault();

		slider.goToPrevSlide();
	});

	$('.scroll__right-link').on('click',function(e){
		e.preventDefault();

		slider.goToNextSlide();
	});

 });


// работа с формами

const order = document.querySelector(".order");
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

	closeElement.addEventListener("click", function (e) {
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

// блок с отзывами

const btnReview = document.querySelectorAll(".btn--review");


for (let i = 0; i < btnReview.length; i++) {

	btnReview[i].addEventListener("click", (e) => {
		e.preventDefault();

		const overlayContent = document.querySelector(".content");
		const reviewContent = document.querySelectorAll(".review__content");

		overlayContent.textContent = reviewContent[i].textContent;

		overlayElement.style.display = "flex";

		document.body.style.overflow = "hidden";

		const closeElement = overlayElement.querySelector(".close");

		closeElement.addEventListener("click", function (e) {
			e.preventDefault();
			overlayElement.style.display = "none";
			document.body.style.overflow = "auto";
		});

		overlayElement.addEventListener("click", function (e) {
			if (e.target === overlayElement) {
				closeElement.click();
			}
		});
	})
};