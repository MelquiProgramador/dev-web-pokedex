const limit = 10;
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

function convertPokemonToLi(pokemon) {

    let pokemonIndex = pokemon.url.split("/")

    return `
    <li class="pokemon">

             <div class="img-container">
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex[pokemonIndex.length - 2]}.svg" alt="Pokemon: ${pokemon.name}">
                <p class="number">#${pokemonIndex[pokemonIndex.length - 2]}</p>
             </div>
            <div class="detail">
                <h4 class="name">${pokemon.name}</h4>
                <div class="types">

                </div>
            </div>
    </li>
    `
}

const pokemonList = document.getElementById("pokemonList");

fetch(url)
    .then((response) => (response.json()))
    .then((listaPokemons) => listaPokemons.results)
    .then((list) => {
        list.forEach((element) => {
            const pokemon = convertPokemonToLi(element);
            pokemonList.innerHTML += pokemon;
        });
    })
    .catch((error) => console.log(error));


/* JAVACRIPT 3 MANEIRAS DE FAZER FUNÇÃO */

/* 1 */
function soma(a, b) {
    return a + b;
}

/* 2 */
const soma1 = (a, b) => a + b;

/* 3 */
const soma2 = (a, b) => {
    return a + b;
}