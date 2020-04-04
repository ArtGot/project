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