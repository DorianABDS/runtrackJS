// function showhide() {
//     let quote = document.getElementById("quote");
    
//     if (quote) {
//         quote.remove();
//     } else {
//         quote = document.createElement("quote");
//         quote.id = "quote";
//         quote.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        
//         document.body.appendChild(quote);
//     }
// }

let button = document.getElementById('button');
button.addEventListener('click', showhide());

function showhide() {
    let article = document.getElementById('quote');

    if(article.style.display === 'none' || article.style.display === '') {
        article.style.display = 'block';
    } else {
        article.style.display = 'none';
    }
}