$(document).ready(function() {
    $("#redirect").on("click", function(event) {
        event.preventDefault();
        
        window.location.href = "https://laplateforme.io/";
    });
});

$(document).ready(function() {
    $("dialog + button").on("click", function() {
        $("dialog").get(0).showModal();
    });

    $("dialog button").on("click", function() {
        $("dialog").get(0).close();
    });
});

$(document).ready(function() {
    const texteInitial = "Lorem ipsum dolor sit amet.";
    const nouvellePhrase = "Pas le 2049 !";
    let toggle = true;

    $("#reboot").on("click", function(event) {
        event.preventDefault(); 

        if (toggle) {
            $("#texte-change").text(nouvellePhrase);
        } else {
            $("#texte-change").text(texteInitial);
        }

        toggle = !toggle;
    });
});