// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
export const filterData = (pokemonDatos, condition) => {
  //console.log(pokemonDatos);
  //console.log(condition);
  
  let names = [];
  let idPokem
  for (let i=0 ; i< pokemonDatos.length; i++){
    names.push(pokemonDatos[i].name)
  }
  return names;
  //console.log(names);
}