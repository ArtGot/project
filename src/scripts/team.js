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