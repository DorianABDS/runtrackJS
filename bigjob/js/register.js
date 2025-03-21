let password = $("#password").val();

$(document).ready(function() {
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault();
        
        let email = $("#email").val();

        if (!isEmailValid(email)) {
            alert("Seuls les membres de La Plateforme_ peuvent s'inscrire. Utilisez une adresse @laplateforme.io.");
            return;
        }

        alert("Inscription réussie !");
        window.location.href = "/bigjob/pages/connection.html"
    });
});

// Fonction pour vérifier si l'email est valide
function isEmailValid(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@laplateforme\.io$/;
    return emailRegex.test(email);
}

// Fonction pour vérifier si les mots de passe correspondent
function doPasswordsMatch(password) {
    if (password.length < 8 || password.length > 64) {
        return false;
    }
}
