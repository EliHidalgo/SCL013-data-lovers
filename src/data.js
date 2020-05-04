// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};*/
/*export const filterData = (pokemonDatos, condition) => {
  //console.log(pokemonDatos);
  //console.log(condition);
  let types = [];
  for(let i = 0; i < pokemonDatos.length; i++) {
    types.push(pokemonDatos[i].type)
  }
  let type = pokemonDatos.filter((pokemonDatos) => pokemonDatos.type === condition);
  return type;
  //for (let i=0 ; i< pokemonDatos.length; i++){
   // names.push(pokemonDatos[i].name)
 // }
  //return names;
  //console.log(names);
}*/

import pokemon from './data/pokemon/pokemon.js';

const pokemonDatos = pokemon.pokemon;
console.log(pokemonDatos);

const imgOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.img);
}

const nameOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.name);
}

const numOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.num);
}

const typeOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.type);
}

const heightOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.height);
}

const weightOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.weight);
}

const candyOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.candy);
}

const candyCountOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : "No posee siguiente evolución");
}

const weaknessesOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.weaknesses);
}

const nextEvolutionOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.next_evolution);
}  


export { imgOfPokemon, nameOfPokemon, numOfPokemon, typeOfPokemon, heightOfPokemon, weightOfPokemon, candyOfPokemon, candyCountOfPokemon,
        weaknessesOfPokemon, nextEvolutionOfPokemon };