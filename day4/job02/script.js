function jsonValueKey(jsonString, key) {
    try {
        const jsonObj = JSON.parse(jsonString);
        
        if (key in jsonObj) {
            return jsonObj[key];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erreur d'analyse JSON :", error);
        return null;
    }
}

const jsonString = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}';


const result = jsonValueKey(jsonString, "city");
console.log(result);