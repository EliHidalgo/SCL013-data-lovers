//import pokemonData from './../data/pokemon/pokemon.js';
import { imgOfPokemon, nameOfPokemon, numOfPokemon, typeOfPokemon, heightOfPokemon, weightOfPokemon,
        candyOfPokemon, candyCountOfPokemon, weaknessesOfPokemon, nextEvolutionOfPokemon } from './data.js';

// constante para traer los valores de la propiedad (key) pokemon del objeto pokemonData
//const pokemonDatos = pokemonData.pokemon;
// mostrando pokemonDatos que es un arreglo de objetos
//console.log(pokemonDatos);


// mostrando el primer valor del arreglo pokemonDatos (indexOf 0)
/*console.log(pokemonDatos[0]);
// mostrando la primera propiedad que conforma el objeto ubicado en el index 0 del arreglo 
console.log(pokemonDatos[0].name);
console.log(pokemonDatos[0].id);
console.log(pokemonDatos[0].type);
console.log(pokemonDatos[0].candy);
console.log(pokemonDatos[0].candy_count);
console.log(pokemonDatos[0].weaknesses);*/

//variable para el id del selectType, seleeción por tipo
const selecFilterByTypePokemon = document.getElementById("selectType");
//variable para el id del container de la pagina principal de bienvenida
const welcomeContainer = document.getElementById("welcomePage");

//evento de select para filtrar por tipo de pokémon
selecFilterByTypePokemon.addEventListener('change', () => {
    //variable que reconoce cual de todos los options fue seleccionado en el droplist y te devulve el valor de ese option
    const droplistSelectType = selecFilterByTypePokemon.options[selecFilterByTypePokemon.selectedIndex].value;
    //creando las variables de string de la información que debe aparecer en las cards de cada pokémon
    const stringOfImgOfPokemon = imgOfPokemon("type", droplistSelectType);
    const stringOfNameOfPokemon = nameOfPokemon("type", droplistSelectType);
    const stringOfNumOfPokemon = numOfPokemon("type", droplistSelectType);
    const stringOfTypeOfPokemon = typeOfPokemon("type", droplistSelectType);
    const stringOfHeightOfPokemon = heightOfPokemon("type", droplistSelectType);
    const stringOfWeightOfPokemon = weightOfPokemon("type", droplistSelectType);
    const stringOfCandyOfPokemon = candyOfPokemon("type", droplistSelectType);
    const stringOfCandyCountOfPokemon = candyCountOfPokemon("type", droplistSelectType);
    const stringOfWeaknessesOfPokemon = weaknessesOfPokemon("type", droplistSelectType);
    const stringOfNextEvolutionOfPokemon = nextEvolutionOfPokemon("type", droplistSelectType);
    
    //variable que llama la sección (root) que contendra todas las cards de los pokémon
    const cardsContainer = document.getElementById("root");
    //ciclo para borrar todos los hijos que pueda tener la seccion de root (cardsContainer) para poder imprimir los pokémon por filtro solicitado
    while (cardsContainer.hasChildNodes()) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
    //devuleve los otros select de filtro debilidad y ordenar por  para que queden en su select inicial
    document.getElementById("selectWeak").value = ""; 
    document.getElementById("selectOrder").value = "";
    document.getElementById("searchBar").value = ""; // vacia el input dado el caso tenga alguna palabra escrita
    
    let showingTypeOfPokemon = document.getElementById("topMessageOfType");
    /*showingTypeOfPokemon.classList.add("showingTypeStyle");
    cardsContainer.appendChild(showingTypeOfPokemon);*/
    showingTypeOfPokemon.innerHTML = `<h2 class="showingType"> Tipo de Pokémon: ${droplistSelectType}</h2>`
    
    //ciclo para imprimir las cards pequeñas de pokémon por separado, cuando se selecciona el filtro de tipo
    for(let i = 0; i < stringOfTypeOfPokemon.length; i++){
        const smallCard = document.createElement("div"); //variable para crear div para las cards de pokémon
        /*const containerForSmallCards = document.createElement("div"); //variasble que contenga el div de smallCard
        containerForSmallCards.setAttribute("id", "container-for-small-cards");*/
        smallCard.classList.add("smallCardStyle"); //agrega atributo de clase
        smallCard.setAttribute("id", "divSmallCardPokemon");
        smallCard.innerHTML += `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                <h4 id="pokemonNameCard">${stringOfNameOfPokemon[i]} # ${stringOfNumOfPokemon[i]}</h4>
                                <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                <p><span class="modalPokemon">Evolución: </span>${stringOfNextEvolutionOfPokemon[i] ? stringOfNextEvolutionOfPokemon[i][0].name : 'No tiene más evoluciones'}</p>
                                <p><span class="seeMorePopUp">Ver...</span></p>`;
        cardsContainer.appendChild(smallCard);
        /*containerForSmallCards.appendChild(smallCard);*/
        welcomeContainer.innerHTML = " "; //borrar la sección de bienvenida para mostrar la seccion de root (cards container)

        //creacion del div que contendra el modal

    
    
    
    
    
    }


    
});