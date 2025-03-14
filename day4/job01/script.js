$(function () {
    const button = $("<button></button>");
    button.attr("id", "button");
    button.text("Fetch");

    const p = $("<p></p>");
    p.attr("id", "quote");
    p.text("/day4");

    $("body").append(button);

    button.on("click", async function() {
        try {
            const response = await fetch("/day4/job01/expression.txt");
            const quote = await response.text();
            
            $("body").append(quote);
        } catch (error) {
            console.error("Erreur lors du fetch:", error);
        }
    });
});