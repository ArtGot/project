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

$(document).ready(function () {

	let slider = $('.slider').bxSlider();

	$('.scroll__left-link').on('click', function (e) {
		e.preventDefault();

		slider.goToPrevSlide();
	});

	$('.scroll__right-link').on('click', function (e) {
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

// Реализация видеоплеера

let player;
const playerContainer = $('.player');

let eventsInit = () => {
	$(".player__start").click(e => {
		e.preventDefault();

		if (playerContainer.hasClass('paused')){
			player.pauseVideo();
		} else {
			player.playVideo();
		}
	});

	$(".player__playback").click(e => {
	const bar = $(e.currentTarget);
	const clickedPosition = e.originalEvent.layerX;
	const newButtonPositinPercent = (clickedPosition / bar.width()) * 100;
	const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositinPercent;

	$(".player__playback-button").css({
		left: `${newButtonPositinPercent}%`
	});

	player.seekTo(newPlaybackPositionSec);
	});

	$(".player__splash").click(e => {
	player.playVideo();
	});

	$(".player__volum").click(e => {
		const bar = $(e.currentTarget);
		const clickedPosition = e.originalEvent.layerX;
		const newButtonPositinPercent = (clickedPosition / bar.width()) * 100;
	
		$(".player__volum-button").css({
			left: `${newButtonPositinPercent}%`
		});
	
		player.setVolume(newButtonPositinPercent);
		});
	
};

const onPlayerReady = () => {
	let interval;
	const durationSec = player.getDuration();
	const volum = player.getVolume();


	interval = setInterval(() => {
	const completedSec = player.getCurrentTime();
	const completedPercent = (completedSec / durationSec) * 100;

	$(".player__playback-button").css({
		left: `${completedPercent}%`
	});
	});

	$(".player__volum-button").css({
		left: `${volum}%`
	});
};

const onPlayerStateChange = event => {

	switch (event.data) {
	case 1:
		playerContainer.addClass("active");
		playerContainer.addClass("paused");

		break;

	case 2:
		playerContainer.removeClass("active");
		playerContainer.removeClass("paused");
		break;
	};
};

function onYouTubeIframeAPIReady() {
	player = new YT.Player('yt-player', {
		height: '405',
		width: '660',
		videoId: 'vZ1zOPfEgdg',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: {
			controls: 0,
			disablekb: 0,
			showinfo: 0,
			rel: 0,
			autoplay: 0,
			modestbranding: 0
		}
	});
};

eventsInit();