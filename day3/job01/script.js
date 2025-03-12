$(function() {

    const button = $("<button></button>");
    button.attr("id", "toggleButton");
    button.text("Apparaître");

    const textContainer = $("<div></div>");
    textContainer.attr("id", "text-container");

    $("body").append(button);
    $("body").append(textContainer);

    button.on("click", function() {
        if (textContainer.is(":empty")) {
            textContainer.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
            button.text("Disparaître");
        } else {
            textContainer.empty();
            button.text("Apparaître");
        }
    });
});