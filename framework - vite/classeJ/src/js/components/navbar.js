// Logique du composant navbar

window.onload = () => {
	document.querySelectorAll(".navbar__toggle").forEach((elem) => {
		elem.addEventListener("click", (e) => {
			console.log("click");
			// récuperer la navbar, lui ajouter la classe .toggled s'il elle ne l'a pas déjà, sinon l'enlever
			const button = e.target;
			button.classList.toggle("active");
			const navbar = button.closest(".navbar");
			navbar.classList.toggle("toggled");

			// modifier la valeur de la max-height de .navbar__toggle-content à l'aide de .scrollHeight
			const content = navbar.querySelector(".navbar__toggle-content");
			if (navbar.classList.contains("toggled")) {
				content.style.maxHeight = content.scrollHeight + "px";
			} else {
				content.style.maxHeight = "0";
			}
		});
	});
};
