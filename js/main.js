// реализация бургер-меню

document.getElementById("hamburger-menu-link").onclick = function() {
	openBurgerMenu()
};
 
function openBurgerMenu() {
	document.getElementById("hamburger-menu").classList.toggle("hamburger-menu--activ");
}

document.getElementById("hamburger-menu__img-link").onclick = function() {
	open()
};

// реализация списка "Команда"

document.getElementById("team__item--1").onclick = function() {
	openTeam("team__item--1");

};

document.getElementById("team__item--2").onclick = function() {
	openTeam("team__item--2")
};

document.getElementById("team__item--3").onclick = function() {
	openTeam("team__item--3")
};

document.getElementById("team__item--4").onclick = function() {
	openTeam("team__item--4")
};

function openTeam(team) {
	document.getElementById(team).classList.toggle("team__item--activ");
}

// реализация списка "Меню"

document.getElementById("carte__item--1").onclick = function() {
	openCarte("carte__item--1")
};

document.getElementById("carte__item--2").onclick = function() {
	openCarte("carte__item--2")
};

document.getElementById("carte__item--3").onclick = function() {
	openCarte("carte__item--3")
};

function openCarte(carte) {
	document.getElementById(carte).classList.toggle("carte__item--activ");
}