let pokemonData = [];

    // Charger les données
    async function fetchData() {
        try {
            const response = await fetch('/day4/job03/pokemon.json');
            if (!response.ok) throw new Error('Erreur lors du chargement des données');
            pokemonData = await response.json();
        } catch (error) {
            handleError(error);
        }
    }

    // Charger les types dans le select
    function loadTypes() {
        const typeSet = new Set();

        pokemonData.forEach(pokemon => {
            pokemon.type.forEach(type => typeSet.add(type));
        });

        typeSet.forEach(type => {
            $('#typeInput').append(`<option value="${type}">${type}</option>`);
        });
    }

    // Filtrer les données
    function filterPokemons() {
        const id = $('#idInput').val().trim();
        const name = $('#nameInput').val().trim().toLowerCase();
        const type = $('#typeInput').val();

        const filtered = pokemonData.filter(pokemon => {
            return (
                (id === '' || pokemon.id == id) &&
                (name === '' || pokemon.name.french.toLowerCase().includes(name)) &&
                (type === '' || pokemon.type.includes(type))
            );
        });

        displayPokemons(filtered);
    }

    // Afficher les résultats
    function displayPokemons(pokemons) {
        const $list = $('#pokemonList');
        $list.empty(); // Efface le contenu existant

        if (pokemons.length === 0) {
            $list.html('<p>Aucun Pokémon trouvé.</p>');
            return;
        }

        pokemons.forEach(pokemon => {
            $list.append(`
                <div class="pokemon-item">
                    <strong>${pokemon.id} - ${pokemon.name.french}</strong>
                    <p>Type: ${pokemon.type.join(', ')}</p>
                    <p>Stats:</p>
                    <ul>
                        <li>HP: ${pokemon.base.HP}</li>
                        <li>Attack: ${pokemon.base.Attack}</li>
                        <li>Defense: ${pokemon.base.Defense}</li>
                        <li>Sp. Attack: ${pokemon.base['Sp. Attack']}</li>
                        <li>Sp. Defense: ${pokemon.base['Sp. Defense']}</li>
                        <li>Speed: ${pokemon.base.Speed}</li>
                    </ul>
                </div>
            `);
        });
    }

    // Gérer les erreurs
    function handleError(error) {
        console.error('Erreur:', error.message);
        $('#pokemonList').html('<p style="color: red;">Erreur de chargement des données.</p>');
    }

    // ✅ RESPONSABILITÉ 6 : Réinitialiser les filtres
    function resetFilters() {
        $('#idInput').val('');
        $('#nameInput').val('');
        $('#typeInput').val('');
        displayPokemons(pokemonData);
    }

    // Configurer les gestionnaires d'événements
    function setupEventListeners() {
        $('#filterButton').on('click', filterPokemons);
        $('#resetButton').on('click', resetFilters);
    }

    // Fonction principale
    async function main() {
        await fetchData();
        loadTypes();
        setupEventListeners();
        displayPokemons(pokemonData);
    }

    // Démarrage de l'application lors du chargement du DOM
    $(document).ready(main);