let pokemonList = [
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
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');

//Conditional to print " - Wow, that's big!" if height is over 1
  if (pokemonList[i].height > 1) {
    document.write(" - Wow, that's big!");
  }
//Line break between each pokemon names
  document.write('<br><br>')
}
