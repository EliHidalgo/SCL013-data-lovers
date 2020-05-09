import pokemon from './data/pokemon/pokemon.js';

const pokemonDatos = pokemon.pokemon;

export const imgOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.img);
}

export const nameOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.name);
}

export const numOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.num);
}

export const typeOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.type);
}

export const heightOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.height);
}

export const weightOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.weight);
}

export const candyOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.candy);
}

export const candyCountOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.candy_count).map((x) => x !== undefined ? x : "No aplica");
}

export const weaknessesOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.weaknesses);
}

export const nextEvolutionOfPokemon = (newFilter, condition) => {
  return pokemonDatos.filter((pokemon) => pokemon[newFilter].includes(condition)).map((pokemon) => pokemon.next_evolution);
}

export const sortData = (data, sortBy, condition) => {
  if (condition === "aToZ") {
    return data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  } else {
    return data.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1);
  }
}
