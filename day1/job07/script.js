// Définition d'un tableau contenant tous les jours fériés fixes en France
// Chaque jour férié est représenté par un objet avec deux propriétés: jour et mois
const holidays = [
    { day: 1,   month: 1 },   // 1er janvier (Jour de l'An)
    { day: 1,   month: 5 },   // 1er mai (Fête du Travail)
    { day: 8,   month: 5 },   // 8 mai (Victoire 1945)
    { day: 14,  month: 7 },   // 14 juillet (Fête Nationale)
    { day: 15,  month: 8 },   // 15 août (Assomption)
    { day: 1,   month: 11 },  // 1er novembre (Toussaint)
    { day: 11,  month: 11 },  // 11 novembre (Armistice)
    { day: 25,  month: 12 }   // 25 décembre (Noël)
]

/**
 * Fonction principale qui détermine si une date donnée est un jour travaillé
 * @param {Date|string} date - La date à analyser (objet Date ou chaîne de caractères)
 */
function workDay(date) {
    // Vérifie si l'argument est une chaîne de caractères (exemple: "2025-12-25")
    if (typeof(date) == "string")
        // Si c'est une chaîne, convertit-la en objet Date
        date = new Date(date);

    // Récupère le jour du mois (1-31)
    var day = date.getDate(); 
    
    // Récupère le mois (0-11) et ajoute 1 pour le rendre plus intuitif (1-12)
    // En JavaScript, les mois commencent à 0 (janvier = 0, février = 1, etc.)
    var month = date.getMonth() + 1;
    
    // Récupère l'année à 4 chiffres (ex: 2025)
    var year = date.getFullYear();

    // Vérifie si la date est un jour de semaine (lundi à vendredi)
    var is_week = isWeekDay(date);
    
    // Vérifie si la date est un jour férié
    var is_holiday = isHoliday(day, month);

    // Si c'est un jour férié, affiche un message spécifique
    if (is_holiday)
        console.log(`Le ${day} ${month} ${year} est un jour férié`);
    else
    {
        // Si ce n'est pas un jour férié, vérifie si c'est un jour de semaine
        if (is_week) 
            // Si c'est un jour de semaine (et pas férié), c'est un jour travaillé
            console.log(`Oui, ${day} ${month} ${year} est un jour travaillé`);
        else
            // Si ce n'est pas un jour de semaine, c'est un week-end
            console.log(`Non, ${day} ${month} ${year} est un week-end`);
    }
}

/**
 * Vérifie si un jour donné est un jour férié
 * @param {number} day - Le jour du mois (1-31)
 * @param {number} month - Le mois (1-12)
 * @returns {boolean} - True si c'est un jour férié, False sinon
 */
function isHoliday(day, month) {
    // Parcourt la liste des jours fériés définie plus haut
    for (const holiday of holidays) {
        // Si le jour et le mois correspondent à un jour férié
        if (day === holiday.day && month === holiday.month)
            // Renvoie true (c'est un jour férié)
            return true;
    } 
    // Si aucun jour férié n'a été trouvé, renvoie false
    return false;
}

/**
 * Vérifie si une date tombe un week-end (samedi ou dimanche)
 * @param {Date} date - La date à vérifier
 * @returns {boolean} - True si c'est un week-end, False sinon
 */
function isWeekendDay(date) {
    // Récupère le jour de la semaine (0-6, où 0 = dimanche, 1 = lundi, etc.)
    const dayOfTheWeek = date.getDay();
    
    // Renvoie true si c'est dimanche (0) ou samedi (6)
    return dayOfTheWeek === 0 || dayOfTheWeek === 6;
}

/**
 * Vérifie si une date tombe un jour de semaine (lundi à vendredi)
 * @param {Date} date - La date à vérifier
 * @returns {boolean} - True si c'est un jour de semaine, False sinon
 */
function isWeekDay(date) {
    // Utilise la fonction isWeekendDay et inverse son résultat
    // Si ce n'est pas un week-end, c'est forcément un jour de semaine
    return !isWeekendDay(date);
}

// Exemple d'utilisation: vérifie si le 25 décembre 2025 est un jour travaillé
workDay(new Date("2025-12-25"));