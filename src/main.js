//import { example } from './data.js';
import pokemonData from './../data/pokemon/pokemon.js';
import { filterData } from './data.js';

// constante para traer los valores de la propiedad (key) pokemon del objeto pokemonData
const pokemonDatos = pokemonData.pokemon;
// mostrando pokemonDatos que es un arreglo de objetos
console.log(pokemonDatos);
// mostrando el primer valor del arreglo pokemonDatos (indexOf 0)
console.log(pokemonDatos[0]);
// mostrando la primera propiedad que conforma el objeto ubicado en el index 0 del arreglo 
console.log(pokemonDatos[0].name);
console.log(pokemonDatos[0].id);
console.log(pokemonDatos[0].type);
console.log(pokemonDatos[0].candy);
console.log(pokemonDatos[0].candy_count);
console.log(pokemonDatos[0].weaknesses);


const selecTypePokemon = document.getElementById("selectType");
const cardsContainer = document.getElementById("root");
const welcomeContainer = document.getElementById("welcomePage");
console.log(selecTypePokemon);

//selectTypePokemon.options[selectTypePokemon.selectedIndex].text ese codigo reconoce cual de todos los options fue seleccionado y te devulve el valor de ese option

selecTypePokemon.addEventListener('change', () => {
    let condition = selecTypePokemon.options[selecTypePokemon.selectedIndex].text;
    //console.log(condition);
    let namesResult = filterData(pokemonDatos, condition);
    
    for(let i = 0; i < namesResult.length; i++){
        cardsContainer.innerHTML += `<p> ${namesResult[i]}</p>`;
       // cardsContainer.innerHTML += `<img src ="${pokemonDatos} `
        welcomeContainer.innerHTML = " ";

    }
    
})