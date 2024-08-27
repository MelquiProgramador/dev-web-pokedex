const limit = 10;
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <div class="number">#${JSON.stringify(pokemon.order)}</div>
            <h4 class="name">${pokemon.name}</h4>
                <div class="detail">
                    <div class="types">
                        <div class="type">Grass</div>
                        <div class="type">Poison</div>
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon">
                </div>
    </li>
    `
}

const pokemonList = document.getElementById("pokemonList");


fetch(url)
    .then((response) => response.json())
    .then((listaPokemons) => listaPokemons.results)
    .then((list) => {
        for (let i = 0; i < list.length; i++){
            const pokemon = convertPokemonToLi(list[i]);
            pokemonList.innerHTML += pokemon;
        }
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