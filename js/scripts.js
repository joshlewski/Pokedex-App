let pokemonRepository = (function () {
let pokemonList = [];
return {
    add: function(item) {
      pokemonList.push(item);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();
  {
    name: 'Beedrill',
    height: 1,
    types: ['bug','poison'],
  },
  {
    name: 'Parasect',
    height: 1,
    types: ['grass','bug'],
  },
  {
    name: 'Dodrio',
    height: 1.8,
    types: ['flying','normal'],
  },
];
// For to list Pokemon names and heights
pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' (height: ' + pokemon.height + ')');

//Conditional to print " - Wow, that's big!" if height is over 1
  if (pokemon.height > 1) {
    document.write(" - Wow, that's big!");
  }
//Line break between each pokemon names
  document.write('<br><br>')
});
