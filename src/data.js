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

import pokemonData from './../data/pokemon/pokemon.js';

const pokemonDatos = pokemonData.pokemon;
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

const candy_countOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : "No posee siguiente evolución");
}

const weaknessesOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.weaknesses);
}

const next_evolution = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.next_evolution.name).map((x) => x !== undefined ? x : "No tiene mas evoluciones");
}


export { imgOfPokemon, nameOfPokemon, numOfPokemon, typeOfPokemon, heightOfPokemon, weightOfPokemon, candyOfPokemon, candy_countOfPokemon,
        weaknessesOfPokemon, next_evolution };