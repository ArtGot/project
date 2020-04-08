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

		const overlayContent = document.querySelector(".content-over");

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
const overlayRevElement = document.querySelector(".overlay-reviews");


for (let i = 0; i < btnReview.length; i++) {

	btnReview[i].addEventListener("click", (e) => {
		e.preventDefault();

		const overlayRevContent = document.querySelector(".content-reviews");
		const reviewContent = document.querySelectorAll(".review__content");

		overlayRevContent.textContent = reviewContent[i].textContent;

		overlayRevElement.style.display = "flex";

		document.body.style.overflow = "hidden";

		const closeRevElement = overlayRevElement.querySelector(".close-reviews");

		closeRevElement.addEventListener("click", function (e) {
			e.preventDefault();
			overlayRevElement.style.display = "none";
			document.body.style.overflow = "auto";
		});

		overlayRevElement.addEventListener("click", function (e) {
			if (e.target === overlayRevElement) {
				closeRevElement.click();
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

// Подключение карты

let myMap;

const init =() => {
	myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 15,
        	controls: ['zoomControl']
	});

const coords = [
	[55.762308, 37.639010],
	[55.760495, 37.646399],
	[55.765273, 37.639293],
	[55.759561, 37.638925]
];

const myCollection = new ymaps.GeoObjectCollection({}, {
	draggable: false,
	iconLayout: 'default#image',
	iconImageHref: './img/icon/map-marker.png',
	iconImageSize: [46, 57],
	iconImageOffset: [-35, -52]
});

coords.forEach(coord => {
	myCollection.add(new ymaps.Placemark(coord));
});

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');

};

ymaps.ready(init);

// One Pages Scroll

const sections = $(".section");
const display = $(".maincontent");

let inScroll = false;

// const md = new MobileDetect(window.navigator.userAgent);
// const isMobile = md.mobile();

const countSectionPosition = (sectionEq) => {

  const position = sectionEq * -100;
  if (isNaN(position))
    console.error("передано не верное значение в countSectionPositon");

  return position;
};

const resetActiveClass = (item, eq) => {
  item.eq(eq).addClass("active").siblings().removeClass("active");
};

const performTransition = (sectionEq) => {
  if (inScroll) return;

  inScroll = true;

  const position = countSectionPosition(sectionEq);
  const trasitionOver = 1000;
  const mouseInertionOver = 300;

  resetActiveClass(sections, sectionEq);

  display.css({
    transform: `translateY(${position}%)`,
  });

  setTimeout(() => {
    resetActiveClass($(".fixed-menu__item"), sectionEq);
    inScroll = false;
  }, trasitionOver + mouseInertionOver);
};

const scroller = () => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    next() {
      if (nextSection.length) {
        performTransition(nextSection.index());
      }
    },
    prev() {
      if (prevSection.length) {
        performTransition(prevSection.index());
      }
    },
  };
};

$(window).on("wheel", (e) => {
  const deltaY = e.originalEvent.deltaY;
  const windowScroller = scroller();

  if (deltaY > 0) {
    windowScroller.next();
  }

  if (deltaY < 0) {
    windowScroller.prev();
  }
});

$(document).on("keydown", (e) => {
  const tagName = e.target.tagName.toLowerCase();
  const windowScroller = scroller();
  const userTypingInInputs = tagName === "input" || tagName === "textarea";

  if (userTypingInInputs) return;

  switch (e.keyCode) {
    case 38:
      windowScroller.prev();
      break;
    case 40:
      windowScroller.next();
      break;
  }
});

$("[data-scroll-to]").on("click", (e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");

  performTransition(target);
});

// if (isMobile) {
//   $("body").swipe({
//     swipe: (event, direction) => {
//       let scrollDirection;
//       const windowScroller = scroller();

//       if (direction === "up") scrollDirection = "next";
//       if (direction === "down") scrollDirection = "prev";

//       windowScroller[scrollDirection]();
//     },
//   });
// }
