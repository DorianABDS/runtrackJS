$(document).ready(function() {
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault();
        
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirm-password").val();

        if (!isEmailValid(email)) {
            alert("Seuls les membres de La Plateforme_ peuvent s'inscrire. Utilisez une adresse @laplateforme.io.");
            return;
        }

        if (!doPasswordsMatch(password, confirmPassword)) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        alert("Inscription réussie !");
    });
});

// Fonction pour vérifier si l'email est valide
function isEmailValid(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@laplateforme\.io$/;
    return emailRegex.test(email);
}

// Fonction pour vérifier si les mots de passe correspondent
function doPasswordsMatch(password, confirmPassword) {
    if (password.length < 8 || password.length > 64) {
        return false;
    }
    return password === confirmPassword;
}
