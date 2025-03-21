$(document).ready(function() {
    $("#connectionForm").on("submit", async function(event) {
        event.preventDefault();

        const email = $("#email").val();
        const password = $("#password").val();

        console.log("Formulaire soumis !");
        console.log("Email :", email);
        console.log("Password :", password);

        try {
            const response = await fetch("/bigjob/data/db.json");

            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const data = await response.json();
            console.log("Données JSON :", data);

            const user = data.find(user =>
                user.informations.email === email &&
                user.informations.password === password
            );

            if (user) {
                alert("Vous êtes connecté !");
                window.location.href = "/bigjob/index.html"
            } else {
                alert("Email ou mot de passe incorrect.");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
            alert("Une erreur est survenue. Vérifiez le fichier JSON.");
        }
    });
});