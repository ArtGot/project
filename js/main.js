// реализация бургер-меню

document.getElementById("hamburger-menu-link").onclick = function() {
	openBurgerMenu()
};

document.getElementById("hamburger-menu__img-link").onclick = function() {
	openBurgerMenu()
};
 
function openBurgerMenu() {
	document.getElementById("hamburger-menu").classList.toggle("hamburger-menu--activ");
}

// реализация списка "Команда"

document.getElementById("team__item--1").onclick = function() {
	openTeam("team__item--1");

	document.getElementById("team__item--2").classList.remove("team__item--activ");
	document.getElementById("team__item--3").classList.remove("team__item--activ");
	document.getElementById("team__item--4").classList.remove("team__item--activ");
};

document.getElementById("team__item--2").onclick = function() {
	openTeam("team__item--2");

	document.getElementById("team__item--1").classList.remove("team__item--activ");
	document.getElementById("team__item--3").classList.remove("team__item--activ");
	document.getElementById("team__item--4").classList.remove("team__item--activ");
};

document.getElementById("team__item--3").onclick = function() {
	openTeam("team__item--3");

	document.getElementById("team__item--1").classList.remove("team__item--activ");
	document.getElementById("team__item--2").classList.remove("team__item--activ");
	document.getElementById("team__item--4").classList.remove("team__item--activ");
};

document.getElementById("team__item--4").onclick = function() {
	openTeam("team__item--4");

	document.getElementById("team__item--1").classList.remove("team__item--activ");
	document.getElementById("team__item--2").classList.remove("team__item--activ");
	document.getElementById("team__item--3").classList.remove("team__item--activ");
};

function openTeam(team) {
	document.getElementById(team).classList.toggle("team__item--activ");
}

// реализация списка "Меню"

document.getElementById("carte__item--1").onclick = function() {
	openCarte("carte__item--1");

	document.getElementById("carte__item--2").classList.remove("carte__item--activ");
	document.getElementById("carte__item--3").classList.remove("carte__item--activ");
};

document.getElementById("carte__item--2").onclick = function() {
	openCarte("carte__item--2");

	document.getElementById("carte__item--1").classList.remove("carte__item--activ");
	document.getElementById("carte__item--3").classList.remove("carte__item--activ");
};

document.getElementById("carte__item--3").onclick = function() {
	openCarte("carte__item--3");

	document.getElementById("carte__item--1").classList.remove("carte__item--activ");
	document.getElementById("carte__item--2").classList.remove("carte__item--activ");
};

function openCarte(carte) {
	document.getElementById(carte).classList.toggle("carte__item--activ");
}