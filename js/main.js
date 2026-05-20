// fonctionnalite de dark/light
const toggleBtn = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
//
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



// COMPTEURS
function compteur(id, fin) {

    let element = document.getElementById(id);

    let debut = 0;

    let increment = Math.ceil(fin / 100);

    let interval = setInterval(function () {

        debut += increment;

        if (debut >= fin) {

            debut = fin;

            clearInterval(interval);

        }

        element.innerText = "+" + debut;

    }, 20);

}

compteur("count1", 2500);

compteur("count2", 800);

compteur("count3", 12000);

// ANIMATIONS AU SCROLL

let elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", afficherElements);

function afficherElements() {

    let hauteurEcran = window.innerHeight;

    elements.forEach(function(element) {

        let position = element.getBoundingClientRect().top;

        if (position < hauteurEcran - 100) {

            element.classList.add("show");

        }

    });

}

afficherElements();