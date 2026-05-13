
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});
//pour le bouton de retour en haut
let bouton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        bouton.style.display = "block";
    } else {
        bouton.style.display = "none";
    }
});

bouton.addEventListener("click", function () {
    window.scrollTo(0, 0);
});