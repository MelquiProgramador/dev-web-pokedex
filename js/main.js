const limit = 12;
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
const pokemonList = document.getElementById("pokemonList");

function convertPokemonToLi(pokemon) {

    const types = document.createElement('div')
    types.classList.add('types')

    const typeSearch = pokemon.types.map((typeObj) => types.innerHTML += `<div class='${typeObj.type.name} type'>${typeObj.type.name}</div>`)
    
    return `
    <li class="pokemon">

             <div class="img-container">
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="Pokemon: ${pokemon.name}">
                <p class="number">#${pokemon.id}</p>
             </div>
            <div class="detail">
                <h4 class="name">${pokemon.name}</h4>
                <div class="types">
                    ${types.innerHTML}
                </div>
            </div>
    </li>
    `
}

async function LoadPokemon() {
    
    try {

        const res = await fetch(url)
        const {results: data} = await res.json()

        const promisses = data.map((result) => fetch(result.url))
        const responses = await Promise.allSettled(promisses)
        const ready = responses.filter(res => res.status === 'fulfilled')
        const pokePromisses = ready.map((uri) => uri.value.json())
        const pokemon = await Promise.all(pokePromisses)

        pokemon.forEach((poke) => {
            let pokeCard = convertPokemonToLi(poke)
            pokemonList.innerHTML += pokeCard
        })

    }catch(e) {
        console.error(e)
    }

}

LoadPokemon()

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