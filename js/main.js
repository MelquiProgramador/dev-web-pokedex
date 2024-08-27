 const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (responseBody){
        console.log(responseBody.results);
    })
    .catch(function (error){
        console.log(error);
    })