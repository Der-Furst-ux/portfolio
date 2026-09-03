const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

menuToggle.addEventListener("click", function () {

    menu.classList.toggle("menu-open");
    menuToggle.classList.toggle("active");

    const menuOuvert = menuToggle.classList.contains("active");

    menuToggle.setAttribute(
        "aria-label",
        menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );

});

/*fermerture menu apres click*/
menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("menu-open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

    });

});

// FORMULAIRE DE CONTACT VIA FORMSPREE
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Remplacez "f/VOTRE_CODE_ICI" par le code fourni par Formspree (ex: "f/xyzzlkap")
const formspreeKey = "f/mbgjyeyb"; 

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const data = new FormData(form);
        formStatus.textContent = "Envoi en cours...";

        fetch(`https://formspree.io/${formspreeKey}`, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formStatus.textContent = "Message envoyé avec succès !";
                form.reset(); // Réinitialise les champs du formulaire
            } else {
                formStatus.textContent = "Une erreur est survenue lors de l'envoi.";
            }
        }).catch(error => {
            formStatus.textContent = "Erreur de connexion. Réessayez plus tard.";
        });
    });
}

    /*parcours*/
    // Animation fade-in au scroll (page parcours)
    const etapes = document.querySelectorAll(".etape");

    if (etapes.length > 0) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        etapes.forEach(function (etape) {
            observer.observe(etape);
        });
    }
