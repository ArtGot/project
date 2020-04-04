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