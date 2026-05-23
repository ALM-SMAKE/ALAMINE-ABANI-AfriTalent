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

function filtrer(categorie) {
    let cartes = document.querySelectorAll(".freelance-card");
    cartes.forEach(function(carte) {
        if (
            categorie === "all" ||
            carte.dataset.cat === categorie
        ) {
            carte.style.display = "";
        } else {
            carte.style.display = "none";
        }
    });
}

// VALIDATION FORMULAIRE CONTACT

let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        // RECUPERATION DES VALEURS

        let nom = document.getElementById("nom").value.trim();

        let email = document.getElementById("email").value.trim();

        let sujet = document.getElementById("sujet").value.trim();

        let message = document.getElementById("message").value.trim();

        // ZONES D'ERREURS

        let nomError = document.getElementById("nomError");

        let emailError = document.getElementById("emailError");

        let sujetError = document.getElementById("sujetError");

        let messageError = document.getElementById("messageError");

        let successMessage = document.getElementById("successMessage");

        // RESET

        nomError.innerText = "";

        emailError.innerText = "";

        sujetError.innerText = "";

        messageError.innerText = "";

        successMessage.innerText = "";

        let valide = true;

        // NOM

        if (nom === "") {

            nomError.innerText = "Veuillez entrer votre nom";

            valide = false;

        }

        // EMAIL

        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.innerText = "Veuillez entrer votre email";

            valide = false;

        } else if (!regexEmail.test(email)) {

            emailError.innerText = "Email invalide";

            valide = false;

        }

        // SUJET

        if (sujet === "") {

            sujetError.innerText = "Veuillez entrer un sujet";

            valide = false;

        }

        // MESSAGE

        if (message === "") {

            messageError.innerText = "Veuillez entrer un message";

            valide = false;

        } else if (message.length < 20) {

            messageError.innerText =
                "Le message doit contenir au moins 20 caractères";

            valide = false;

        }

        // SUCCES

        if (valide) {

            successMessage.innerText =
                "Message envoyé avec succès !";

            form.reset();

        }

    });

}