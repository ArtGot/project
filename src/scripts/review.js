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