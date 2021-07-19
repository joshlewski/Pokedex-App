let pokemonRepository = (function () {
let pokemonList = [];

function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon &&
     "height" in pokemon &&
     "types" in pokemon
   ) {
     pokemonList.push(pokemon);
   } else {
     console.log("pokemon is not correct");
   }
 }

 function getAll() {
   return pokemonList;
 }

function showDetails(pokemon) {
  console.log(pokemon);
}

 function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let listpokemon = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listpokemon.appendChild(button);
   pokemonList.appendChild(listpokemon);
   button.addEventListener('click', function(event) {
     showDetails(pokemon)
   });
 }

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem
 };
})();

pokemonRepository.add (
  {
    name: 'Beedrill',
    height: 1,
    types: ['bug','poison'],
  });

pokemonRepository.add (
  {
    name: 'Parasect',
    height: 1,
    types: ['grass','bug'],
  });

pokemonRepository.add (
  {
    name: 'Dodrio',
    height: 1.8,
    types: ['flying','normal'],
  });

console.log(pokemonRepository.getAll());//puts the array into the console to be called
// forEach to list Pokemon names and heights

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);

});
