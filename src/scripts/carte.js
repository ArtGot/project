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