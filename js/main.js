 const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

fetch(url)
    .then(function (response){
        console.log(response.json());
    })
    .catch(function (error){
        console.log(error);
    })