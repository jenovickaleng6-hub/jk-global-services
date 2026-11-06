
const formulaire = document.getElementById("contactForm");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const message = document.getElementById("message").value;

    const numeroWhatsApp = "243XXXXXXXXX";

    const texte =
        "Bonjour JK GLOBAL SERVICES !\n\n" +
        "Nom : " + nom + "\n" +
        "Email : " + email + "\n" +
        "Téléphone : " + telephone + "\n" +
        "Message : " + message;

    const lien = "https://wa.me/" +
        numeroWhatsApp +
        "?text=" + encodeURIComponent(texte);

    window.open(lien, "_blank");

});
