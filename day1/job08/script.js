/**
 * Fonction qui vérifie si un nombre est premier
 * Un nombre premier n'est divisible que par 1 et par lui-même
 * @param {number} num - Le nombre à vérifier
 * @returns {boolean} - True si le nombre est premier, sinon False
 */
function isPrime(num) {
    // Initialise un compteur pour suivre le nombre de diviseurs
    var count = 0;

    // Boucle à travers tous les nombres de 0 jusqu'à num
    for (let divisor = 0; divisor <= num; divisor++)
        // Si num est divisible par divisor (reste de la division égal à 0)
        if(num % divisor === 0)
            // Incrémente le compteur de diviseurs
            count++;

    // Un nombre premier a exactement 2 diviseurs (1 et lui-même)
    return count === 2;
}

/**
 * Fonction qui additionne deux nombres s'ils sont tous les deux premiers
 * @param {number} number_1 - Premier nombre à vérifier et potentiellement additionner
 * @param {number} number_2 - Deuxième nombre à vérifier et potentiellement additionner
 * @returns {number|boolean} - La somme des deux nombres s'ils sont premiers, sinon False
 */
function sumFirstNumber(number_1, number_2)
{
    // Vérifie si number_1 est un nombre premier (True/False)
    var num_1 = isPrime(number_1); 
    // Vérifie si number_2 est un nombre premier (True/False)
    var num_2 = isPrime(number_2);
    
    // Si les deux nombres sont premiers
    if (num_1 && num_2)
        // Retourne leur somme
        return number_1 + number_2;

    // Si l'un des nombres (ou les deux) n'est pas premier, retourne False
    return false;
}

console.log(sumFirstNumber(2, 3));