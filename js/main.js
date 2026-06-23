// =====================
// LOADER
// =====================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.classList.add("hidden-loader");
        setTimeout(() => loader.style.display = "none", 400);
    }
});

// =====================
// ANNÉE COURANTE (footer)
// =====================
const yearEl = document.getElementById("currentYear");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =====================
// MENU BURGER
// =====================
const burgerBtn  = document.getElementById("burgerBtn");
const navMenu    = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");

function openMenu() {
    if (burgerBtn)  burgerBtn.classList.add("open");
    if (navMenu)    navMenu.classList.add("open");
    if (navOverlay) navOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (burgerBtn)  burgerBtn.classList.remove("open");
    if (navMenu)    navMenu.classList.remove("open");
    if (navOverlay) navOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", function () {
        navMenu.classList.contains("open") ? closeMenu() : openMenu();
    });
}

if (navOverlay) navOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-menu .nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 992) closeMenu();
});

// =====================
// MODE SOMBRE
// =====================
const toggleBtn = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleBtn.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleBtn.textContent = "🌙";
        }
    });
}

// =====================
// NAVBAR OMBRE AU SCROLL
// =====================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.classList.toggle("shadow", window.scrollY > 50);
});

// =====================
// BOUTON RETOUR EN HAUT
// =====================
const bouton = document.getElementById("topBtn");
if (bouton) {
    window.addEventListener("scroll", function () {
        bouton.style.display = window.scrollY > 200 ? "block" : "none";
    });
    bouton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// =====================
// COMPTEURS
// =====================
function compteur(id, fin) {
    const el = document.getElementById(id);
    if (!el) return;
    let debut = 0;
    const increment = Math.ceil(fin / 100);
    const interval = setInterval(function () {
        debut += increment;
        if (debut >= fin) { debut = fin; clearInterval(interval); }
        el.innerText = "+" + debut.toLocaleString();
    }, 20);
}
compteur("count1", 2500);
compteur("count2", 800);
compteur("count3", 12000);

// =====================
// ANIMATIONS AU SCROLL
// =====================
const hiddenEls = document.querySelectorAll(".hidden");
function afficherElements() {
    const h = window.innerHeight;
    hiddenEls.forEach(el => {
        if (el.getBoundingClientRect().top < h - 100) el.classList.add("show");
    });
}
window.addEventListener("scroll", afficherElements);
afficherElements();

// =====================
// FILTRAGE FREELANCES
// =====================
const freelanceFilterBtns = document.querySelectorAll(".filter-btn");
const freelanceCards = document.querySelectorAll(".freelance-card");
if (freelanceCards.length > 0) {
    freelanceFilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            freelanceFilterBtns.forEach(b => {
                b.classList.remove("btn-primary");
                b.classList.add("btn-outline-primary");
            });
            btn.classList.remove("btn-outline-primary");
            btn.classList.add("btn-primary");
            const cat = btn.dataset.category;
            freelanceCards.forEach(card => {
                card.style.display =
                    (cat === "all" || card.dataset.category === cat) ? "block" : "none";
            });
        });
    });
}

// =====================
// VALIDATION FORMULAIRE
// =====================
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nom     = document.getElementById("nom").value.trim();
        const email   = document.getElementById("email").value.trim();
        const sujet   = document.getElementById("sujet").value.trim();
        const message = document.getElementById("message").value.trim();
        const nomError     = document.getElementById("nomError");
        const emailError   = document.getElementById("emailError");
        const sujetError   = document.getElementById("sujetError");
        const messageError = document.getElementById("messageError");
        const successMsg   = document.getElementById("successMessage");
        [nomError, emailError, sujetError, messageError, successMsg]
            .forEach(el => { if (el) el.innerText = ""; });
        let valide = true;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!nom)              { nomError.innerText = "Veuillez entrer votre nom"; valide = false; }
        if (!email)            { emailError.innerText = "Veuillez entrer votre email"; valide = false; }
        else if (!re.test(email)) { emailError.innerText = "Email invalide"; valide = false; }
        if (!sujet)            { sujetError.innerText = "Veuillez entrer un sujet"; valide = false; }
        if (!message)          { messageError.innerText = "Veuillez entrer un message"; valide = false; }
        else if (message.length < 20) { messageError.innerText = "Au moins 20 caractères requis"; valide = false; }
        if (valide) { successMsg.innerText = "✅ Message envoyé avec succès !"; form.reset(); }
    });
}


// =====================
// FILTRES BLOG
// =====================
const blogFilterBtns = document.querySelectorAll(".blog-filter-btn");
if (blogFilterBtns.length > 0) {
    blogFilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            blogFilterBtns.forEach(b => {
                b.classList.remove("btn-primary");
                b.classList.add("btn-outline-primary");
            });
            btn.classList.remove("btn-outline-primary");
            btn.classList.add("btn-primary");
            const cat = btn.dataset.category;
            document.querySelectorAll(".article-card").forEach(card => {
                card.style.display =
                    (cat === "all" || card.dataset.category === cat) ? "block" : "none";
            });
        });
    });
}