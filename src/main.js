import pokemon from './data/pokemon/pokemon.js';

import {
  imgOfPokemon,
  nameOfPokemon,
  numOfPokemon,
  typeOfPokemon,
  heightOfPokemon,
  weightOfPokemon,
  candyOfPokemon,
  candyCountOfPokemon,
  weaknessesOfPokemon,
  nextEvolutionOfPokemon,
  sortData
} from './data.js';

const pokemonDatos = pokemon.pokemon;
//variable para el id del selectType, selección por tipo
const selectFilterByTypePokemon = document.getElementById("selectType");
//variable para el id del container de la pagina principal de bienvenida
const welcomeContainer = document.getElementById("welcomePage");

//evento de select para filtrar por tipo de pokémon
selectFilterByTypePokemon.addEventListener('change', () => {
  //variable que reconoce cual de todos los options fue seleccionado en el droplist y te devulve el valor de ese option
  const droplistSelectType = selectFilterByTypePokemon.options[selectFilterByTypePokemon.selectedIndex].value;
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
  //ciclo para borrar todos los hijos que pueda tener la sección de root (cardsContainer) para poder imprimir los pokémon por filtro solicitado
  while (cardsContainer.hasChildNodes()) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  //devuelve los otros select de filtro debilidad y ordenar para que queden en su select inicial, vacía el input
  document.getElementById("selectWeak").value = "";
  document.getElementById("selectOrder").value = "";
  document.getElementById("searchBar").value = "";

  //mensaje que indica que tipo de pokémon se está viendo en pantalla
  let showingTypeOfPokemon = document.getElementById("topMessageOfType");
  showingTypeOfPokemon.innerHTML = `<h2 class="showingType"> Tipo de Pokémon: ${droplistSelectType}</h2>`

  //ciclo para imprimir las cards pequeñas de pokémon por separado, cuando se selecciona el filtro de tipo
  for (let i = 0; i < stringOfTypeOfPokemon.length; i++) {
    //variable para crear div para las cards de pokémon
    const smallCard = document.createElement("div");
    smallCard.classList.add("smallCardStyle"); //agrega atributo de clase
    smallCard.setAttribute("id", "divSmallCardPokemon");
    smallCard.innerHTML += `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                <h5 id="pokemonNameCard">${stringOfNameOfPokemon[i]} #${stringOfNumOfPokemon[i]}</h5>
                                <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                <p><span class="seeMorePopUp">Ver...</span></>`;
    cardsContainer.appendChild(smallCard);
    welcomeContainer.innerHTML = " "; //borrar la sección de bienvenida para mostrar la sección de root (cards container)

    //creación del div que contendra el modal
    const modalCard = document.createElement("div");
    modalCard.setAttribute("class", "modalCardStyle");
    cardsContainer.appendChild(modalCard);

    //creación del div que es el modal con la información
    const modalCardInformation = document.createElement("div");
    modalCardInformation.setAttribute("class", "modal-card-information");
    modalCard.appendChild(modalCardInformation);
    modalCardInformation.innerHTML = `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                          <h2>${stringOfNameOfPokemon[i]} #${stringOfNumOfPokemon[i]}</h2>
                                          <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Altura: </span>${stringOfHeightOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Peso: </span>${stringOfWeightOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Caramelo: </span>${stringOfCandyOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">N° de Caramelos para evolucionar: </span>${stringOfCandyCountOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Debilidades: </span>${stringOfWeaknessesOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Evolución: </span>${stringOfNextEvolutionOfPokemon[i] ? stringOfNextEvolutionOfPokemon[i][0].name : "No tiene más evoluciones"}</p>`;


    //creación del botón de cerrar el modal card de información de pokémon
    const closeModal = document.createElement("span");
    closeModal.setAttribute("id", "closeModalSpan");
    closeModal.innerHTML = "&times;";
    modalCardInformation.insertBefore(closeModal, modalCardInformation.childNodes[0]);

    //evento para abrir y cerrar el modal
    smallCard.addEventListener("click", () => {
      modalCard.classList.add("modal-bg-active");
    });
    closeModal.addEventListener("click", () => {
      modalCard.classList.remove("modal-bg-active");
    });
  }
});

//variable para el id del selectWeak, seleccionando contra que es débil el pokémon
const selectFilterByWeaknessOfPokemon = document.getElementById("selectWeak");

//evento de select para filtrar por debilidad que tengan los pokémon
selectFilterByWeaknessOfPokemon.addEventListener('change', () => {
  //devuelve los otros select de filtro por tipo y ordenar para que queden en su select inicial, vacía el input
  document.getElementById("selectType").value = "";
  document.getElementById("selectOrder").value = "";
  document.getElementById("searchBar").value = "";
  document.getElementById("topMessageOfType").innerHTML = "";

  //variable que reconoce cual de todos los options fue seleccionado en el droplist y te devulve el valor de ese option
  const droplistSelectWeakness = selectFilterByWeaknessOfPokemon.options[selectFilterByWeaknessOfPokemon.selectedIndex].value;
  //creando las variables de string de la información que debe aparecer en las cards de cada pokémon
  const stringOfImgOfPokemon = imgOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfNameOfPokemon = nameOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfNumOfPokemon = numOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfTypeOfPokemon = typeOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfHeightOfPokemon = heightOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfWeightOfPokemon = weightOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfCandyOfPokemon = candyOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfCandyCountOfPokemon = candyCountOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfWeaknessesOfPokemon = weaknessesOfPokemon("weaknesses", droplistSelectWeakness);
  const stringOfNextEvolutionOfPokemon = nextEvolutionOfPokemon("weaknesses", droplistSelectWeakness);

  //variable que llama la sección (root) que contendra todas las cards de los pokémon
  const cardsContainer = document.getElementById("root");
  //ciclo para borrar todos los hijos que pueda tener la sección de root (cardsContainer) para poder imprimir los pokémon por filtro solicitado
  while (cardsContainer.hasChildNodes()) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

  //mensaje que indica contra que debilidad se está viendo en pantalla 
  let showingWeaknessOfPokemon = document.getElementById("topMessageOfType");
  showingWeaknessOfPokemon.innerHTML = `<h2 class="showingType"> Debilidad contra tipo: ${droplistSelectWeakness}</h2>`

  //ciclo para imprimir las cards pequeñas de pokémon por separado, cuando se selecciona el filtro por debilidad
  for (let i = 0; i < stringOfNameOfPokemon.length; i++) {
    //variable para crear div para las cards de pokémon
    const smallCard = document.createElement("div");
    smallCard.classList.add("smallCardStyle"); //agrega atributo de clase
    smallCard.setAttribute("id", "divSmallCardPokemon");
    smallCard.innerHTML += `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                <h5 id="pokemonNameCard">${stringOfNameOfPokemon[i]} #${stringOfNumOfPokemon[i]}</h5>
                                <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                <p><span class="seeMorePopUp">Ver...</span></>`;
    cardsContainer.appendChild(smallCard);
    welcomeContainer.innerHTML = " "; //borrar la sección de bienvenida para mostrar la sección de root (cards container)

    //creación del div que contendra el modal
    const modalCard = document.createElement("div");
    modalCard.setAttribute("class", "modalCardStyle");
    cardsContainer.appendChild(modalCard);

    //creación del div que es el modal con la información
    const modalCardInformation = document.createElement("div");
    modalCardInformation.setAttribute("class", "modal-card-information");
    modalCard.appendChild(modalCardInformation);
    modalCardInformation.innerHTML = `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                          <h2>${stringOfNameOfPokemon[i]} #${stringOfNumOfPokemon[i]}</h2>
                                          <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Altura: </span>${stringOfHeightOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Peso: </span>${stringOfWeightOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Caramelo: </span>${stringOfCandyOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">N° de Caramelos para evolucionar: </span>${stringOfCandyCountOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Debilidades: </span>${stringOfWeaknessesOfPokemon[i]}</p>
                                          <p><span class="modalPokemon">Evolución: </span>${stringOfNextEvolutionOfPokemon[i] ? stringOfNextEvolutionOfPokemon[i][0].name : "No tiene más evoluciones"}</p>`;

    //creación del botón de cerrar el modal card de información de pokémon
    const closeModal = document.createElement("span");
    closeModal.setAttribute("id", "closeModalSpan");
    closeModal.innerHTML = "&times;";
    modalCardInformation.insertBefore(closeModal, modalCardInformation.childNodes[0]);

    //evento par abrir y cerrar el modal
    smallCard.addEventListener("click", () => {
      modalCard.classList.add("modal-bg-active");
    });
    closeModal.addEventListener("click", () => {
      modalCard.classList.remove("modal-bg-active");
    });
  }
});

//ordenar de A a la Z
document.getElementById("selectOrder").addEventListener('change', () => {
  //devuelve los otros select de filtro por tipo y ordenar por para que queden en su select inicial, vacía el input
  document.getElementById("selectType").value = "";
  document.getElementById("selectWeak").value = "";
  document.getElementById("searchBar").value = "";
  document.getElementById("topMessageOfType").innerHTML = " ";

  //variable que toma el valor seleccionado por el usuario
  const orderbyName = document.getElementById("selectOrder").value;
  //inicializando variable para ordenar los pokémon 
  let pokeOrdered = sortData(pokemonDatos, "name", orderbyName);

  //variable que llama la sección (root) que contendra todas las cards de los pokémon
  const cardsContainer = document.getElementById("root");
  while (cardsContainer.hasChildNodes()) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

  //ciclo para imprimir las cards pequeñas de pokémon por separado, cuando se selecciona el filtro por orden
  for (let i = 0; i < pokeOrdered.length; i++) {
    //variable para crear div para las cards de pokémon
    const smallCard = document.createElement("div");
    smallCard.classList.add("smallCardStyle"); //agrega atributo de clase
    smallCard.setAttribute("id", "divSmallCardPokemon");
    smallCard.innerHTML += `<img id="imgPokemonCard" src= ${pokeOrdered[i].img}>
                                <h5 id="pokemonNameCard">${pokeOrdered[i].name} #${pokeOrdered[i].num}</h5>
                                <p><span class="modalPokemon">Tipo: </span>${pokeOrdered[i].type}</p>
                                <p><span class="seeMorePopUp">Ver...</span></>`;
    cardsContainer.appendChild(smallCard);
    welcomeContainer.innerHTML = " ";

    //creación del div que contendra el modal
    const modalCard = document.createElement("div");
    modalCard.setAttribute("class", "modalCardStyle");
    cardsContainer.appendChild(modalCard);

    //creación del div que es el modal con la información
    const modalCardInformation = document.createElement("div");
    modalCardInformation.setAttribute("class", "modal-card-information");
    modalCard.appendChild(modalCardInformation);
    modalCardInformation.innerHTML = `<img id="imgPokemonCard" src= ${pokeOrdered[i].img}>
                                          <h2>${pokeOrdered[i].name} #${pokeOrdered[i].num}</h2>
                                          <p><span class="modalPokemon">Tipo: </span>${pokeOrdered[i].type}</p>
                                          <p><span class="modalPokemon">Altura: </span>${pokeOrdered[i].height}</p>
                                          <p><span class="modalPokemon">Peso: </span>${pokeOrdered[i].weight}</p>
                                          <p><span class="modalPokemon">Caramelo: </span>${pokeOrdered[i].candy}</p>
                                          <p><span class="modalPokemon">N° de Caramelos para evolucionar: </span>${pokeOrdered[i].candy_count}</p>
                                          <p><span class="modalPokemon">Debilidades: </span>${pokeOrdered[i].weaknesses}</p>
                                          <p><span class="modalPokemon">Evolución: </span>${pokeOrdered[i].next_evolution ? pokeOrdered[i].next_evolution[0].name : "No tiene más evoluciones"}</p>`;

    //creación del botón de cerrar el modal card de información de pokémon
    const closeModal = document.createElement("span");
    closeModal.setAttribute("id", "closeModalSpan");
    closeModal.innerHTML = "&times;";
    modalCardInformation.insertBefore(closeModal, modalCardInformation.childNodes[0]);

    //evento par abrir y cerrar el modal
    smallCard.addEventListener("click", () => {
      modalCard.classList.add("modal-bg-active");
    });
    closeModal.addEventListener("click", () => {
      modalCard.classList.remove("modal-bg-active");
    });
  }
});

//evento para el buscador por nombre de pokémon
document.getElementById('searchBar').addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    //devuelve los otros select para que queden en su valor inicial
    document.getElementById("selectType").value = "";
    document.getElementById("selectOrder").value = "";
    document.getElementById("selectWeak").value = "";
    document.getElementById("topMessageOfType").innerHTML = "";

    //constante que toma el valor que el usuario ingresa en el input
    const inputSearchValue = document.getElementById("searchBar").value;

    //colocando la primera letra en mayúscula y el resto en minúscula para buscar dentro de la data
    const inputSearchName = inputSearchValue.charAt(0).toUpperCase() + inputSearchValue.slice(1).toLowerCase();

    //creando las variables de string de la información que debe aparecer en las cards de cada pokémon
    const stringOfImgOfPokemon = imgOfPokemon("name", inputSearchName);
    const stringOfNameOfPokemon = nameOfPokemon("name", inputSearchName);
    const stringOfNumOfPokemon = numOfPokemon("name", inputSearchName);
    const stringOfTypeOfPokemon = typeOfPokemon("name", inputSearchName);
    const stringOfHeightOfPokemon = heightOfPokemon("name", inputSearchName);
    const stringOfWeightOfPokemon = weightOfPokemon("name", inputSearchName);
    const stringOfCandyOfPokemon = candyOfPokemon("name", inputSearchName)
    const stringOfCandyCountOfPokemon = candyCountOfPokemon("name", inputSearchName);
    const stringOfWeaknessesOfPokemon = weaknessesOfPokemon("name", inputSearchName);
    const stringOfNextEvolutionOfPokemon = nextEvolutionOfPokemon("name", inputSearchName);

    //borra todos los hijos que pueda tener la sección de root
    const cardsContainer = document.getElementById("root");
    while (cardsContainer.hasChildNodes()) {
      cardsContainer.removeChild(cardsContainer.firstChild);
    }

    for (let i = 0; i < stringOfNameOfPokemon.length; i++) {
      //variable para crear div para las cards de pokémon
      const smallCard = document.createElement("div");
      smallCard.classList.add("smallCardStyle"); //agrega atributo de clase
      smallCard.setAttribute("id", "divSmallCardPokemon");
      smallCard.innerHTML += `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                <h5 id="pokemonNameCard">${stringOfNameOfPokemon[i]} #${stringOfNumOfPokemon[i]}</h5>
                                <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                <p><span class="seeMorePopUp">Ver...</span></>`;
      cardsContainer.appendChild(smallCard);
      welcomeContainer.innerHTML = " "; //borrar la sección de bienvenida para mostrar la sección de root (cards container)

      //creación del div que contendra el modal
      const modalCard = document.createElement("div");
      modalCard.setAttribute("class", "modalCardStyle");
      cardsContainer.appendChild(modalCard);

      //creación del div que es el modal con la información de cada pokémon
      const modalCardInformation = document.createElement("div");
      modalCardInformation.setAttribute("class", "modal-card-information");
      modalCard.appendChild(modalCardInformation);
      modalCardInformation.innerHTML = `<img id="imgPokemonCard" src= ${stringOfImgOfPokemon[i]}>
                                   <h2>${stringOfNameOfPokemon[i]} #${stringOfNumOfPokemon[i]}</h2>
                                   <p><span class="modalPokemon">Tipo: </span>${stringOfTypeOfPokemon[i]}</p>
                                   <p><span class="modalPokemon">Altura: </span>${stringOfHeightOfPokemon[i]}</p>
                                   <p><span class="modalPokemon">Peso: </span>${stringOfWeightOfPokemon[i]}</p>
                                   <p><span class="modalPokemon">Caramelo: </span>${stringOfCandyOfPokemon[i]}</p>
                                   <p><span class="modalPokemon">N° de Caramelos para evolucionar: </span>${stringOfCandyCountOfPokemon[i]}</p>
                                   <p><span class="modalPokemon">Debilidades: </span>${stringOfWeaknessesOfPokemon[i]}</p>
                                   <p><span class="modalPokemon">Evolución: </span>${stringOfNextEvolutionOfPokemon[i] ? stringOfNextEvolutionOfPokemon[i][0].name : "No tiene más evoluciones"}</p>`;


      //creación del botón de cerrar el modal card de información de pokémon
      const closeModal = document.createElement("span");
      closeModal.setAttribute("id", "closeModalSpan");
      closeModal.innerHTML = "&times;";
      modalCardInformation.insertBefore(closeModal, modalCardInformation.childNodes[0]);

      //evento par abrir y cerrar el modal
      smallCard.addEventListener("click", () => {
        modalCard.classList.add("modal-bg-active");
      });
      closeModal.addEventListener("click", () => {
        modalCard.classList.remove("modal-bg-active");
      });
    }
  }
});
