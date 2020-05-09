/*import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/

import { imgOfPokemon, nameOfPokemon, numOfPokemon, typeOfPokemon, heightOfPokemon, weightOfPokemon, candyOfPokemon, candyCountOfPokemon,
  weaknessesOfPokemon, nextEvolutionOfPokemon, sortData } from '../src/data.js';

  describe('imgOfPokemon', () => {
    test("debería ser una funcion", () => {
      expect(typeof imgOfPokemon).toBe('function');
    });
    
    test("imgOfPokemon con parámetros de name y Bulbasaur debería devolver [http://www.serebii.net/pokemongo/pokemon/001.png]", () => {
      expect(imgOfPokemon("name", "Bulbasaur")).toEqual(["http://www.serebii.net/pokemongo/pokemon/001.png"]);
    });
  });

  describe('nameOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof nameOfPokemon).toBe('function');
    });
    
    test("nameOfPokemon con parámetros de type y dragon debería devolver ['Dratini','Dragonair','Dragonite']", () => {
      expect(nameOfPokemon("type", "Dragon")).toEqual(["Dratini","Dragonair","Dragonite"]);
    });
  });

  describe('numOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof numOfPokemon).toBe('function');
    });
    
    test("numOfPokemon con parámetros de weaknesses y Poison debería devolver ['046','047','102','103','114']", () => {
      expect(numOfPokemon("weaknesses", "Poison" )).toEqual(["046","047","102","103","114"]);
    });
  });

  describe('typeOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof typeOfPokemon).toBe('function');
    });
    
    test("typeOfPokemon con parámetros de type y Ghost debería devolver [['Ghost','Poison'],['Ghost','Poison'],['Ghost','Poison']]", () => {
      expect(typeOfPokemon("type","Ghost")).toEqual([["Ghost","Poison"],["Ghost","Poison"],["Ghost","Poison"]]);
    });
  });

  describe('heightOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof heightOfPokemon).toBe('function');
    });
    
    test("heightOfPokemon con parámetros de type y Ice debería devolver ['1.70 m','1.50 m','1.40 m','2.49 m','1.70 m']", () => {
      expect(heightOfPokemon("type","Ice")).toEqual(["1.70 m","1.50 m","1.40 m","2.49 m","1.70 m"]);
    });
  });

  describe('weightOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof weightOfPokemon).toBe('function');
    });
    
    test("weightOfPokemon con parámetros de weaknesses y Dragon debería devolver ['3.3 kg','16.5 kg','210.0 kg']", () => {
      expect(weightOfPokemon("weaknesses","Dragon")).toEqual(["3.3 kg","16.5 kg","210.0 kg"]);
    });
  });

  describe('candyOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof candyOfPokemon).toBe('function');
    });
    
    test("candyOfPokemon con parámetros de weaknesses y Dragon deberia devolver ['Dratini Candy','Dratini Candy','Dratini Candy']", () => {
      expect(candyOfPokemon("weaknesses", "Dragon")).toEqual(["Dratini Candy","Dratini Candy","Dratini Candy"]);
    });
  });

  describe('candyCountOFPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof candyCountOfPokemon).toBe('function');
    });
    
    test("candyCountOfPokemon con parámetros de type y Ghost debería devolver [25,100,'No aplica']", () => {
      expect(candyCountOfPokemon("type","Ghost")).toEqual([25,100,"No aplica"]);
    });
  });

  describe('weaknessesOfPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof weaknessesOfPokemon).toBe('function');
    });
    
    test('weaknessesOfPokemon con parámetros de type y Electric debería devolver [["Ground"],["Ground"],["Fire","Water","Ground"],["Fire","Water","Ground"],["Ground"],["Ground"],["Ground"],["Ground"],["Ice","Rock"]]', () => {
      expect(weaknessesOfPokemon("type","Electric")).toEqual([["Ground"],["Ground"],["Fire","Water","Ground"],["Fire","Water","Ground"],["Ground"],["Ground"],["Ground"],["Ground"],["Ice","Rock"]]);
    });
  });

  describe('nextEvolutionOfPokemon', () => {
    test("debería ser una función", () => {
      expect(typeof nextEvolutionOfPokemon).toBe('function');
    });
    
    test('nextEvolutionOfPokemon con parámetros de type y Dragon debería devolver [[{"num": "148","name": "Dragonair"}, {"num": "149","name": "Dragonite"}],[{"num": "149","name": "Dragonite"}]]', () => {
      expect(nextEvolutionOfPokemon("type","Dragon")).toEqual([[{"num": "148","name": "Dragonair"},{"num": "149","name": "Dragonite"}],[{"num": "149","name": "Dragonite"}], undefined]);
    });
  });

  describe('sortData', () => {
    test("debería ser una función", () => {
      expect(typeof sortData).toBe('function');
    });
    
    const untidyPoke = [{
      "id": 7,
      "num": "007",
      "name": "Squirtle",
      "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
      "type": [
        "Water"
      ],
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Squirtle Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.58,
      "avg_spawns": 58,
      "spawn_time": "04:25",
      "multipliers": [2.1],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "next_evolution": [{
        "num": "008",
        "name": "Wartortle"
      }, {
        "num": "009",
        "name": "Blastoise"
      }]
    }, {
      "id": 8,
      "num": "008",
      "name": "Wartortle",
      "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
      "type": [
        "Water"
      ],
      "height": "0.99 m",
      "weight": "22.5 kg",
      "candy": "Squirtle Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "07:02",
      "multipliers": [1.4],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "prev_evolution": [{
        "num": "007",
        "name": "Squirtle"
      }],
      "next_evolution": [{
        "num": "009",
        "name": "Blastoise"
      }]
    }, {
      "id": 9,
      "num": "009",
      "name": "Blastoise",
      "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
      "type": [
        "Water"
      ],
      "height": "1.60 m",
      "weight": "85.5 kg",
      "candy": "Squirtle Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "00:06",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "prev_evolution": [{
        "num": "007",
        "name": "Squirtle"
      }, {
        "num": "008",
        "name": "Wartortle"
      }]
    }];
    const tidyPoke = [{
      "id": 9,
      "num": "009",
      "name": "Blastoise",
      "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
      "type": [
        "Water"
      ],
      "height": "1.60 m",
      "weight": "85.5 kg",
      "candy": "Squirtle Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.0067,
      "avg_spawns": 0.67,
      "spawn_time": "00:06",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "prev_evolution": [{
        "num": "007",
        "name": "Squirtle"
      }, {
        "num": "008",
        "name": "Wartortle"
      }]
    },
    { "id": 7,
      "num": "007",
      "name": "Squirtle",
      "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
      "type": [
        "Water"
      ],
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Squirtle Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.58,
      "avg_spawns": 58,
      "spawn_time": "04:25",
      "multipliers": [2.1],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "next_evolution": [{
        "num": "008",
        "name": "Wartortle"
      }, {
        "num": "009",
        "name": "Blastoise"
      }]
    }, {
      "id": 8,
      "num": "008",
      "name": "Wartortle",
      "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
      "type": [
        "Water"
      ],
      "height": "0.99 m",
      "weight": "22.5 kg",
      "candy": "Squirtle Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.034,
      "avg_spawns": 3.4,
      "spawn_time": "07:02",
      "multipliers": [1.4],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "prev_evolution": [{
        "num": "007",
        "name": "Squirtle"
      }],
      "next_evolution": [{
        "num": "009",
        "name": "Blastoise"
      }]
    }];
    test('sortData con parámetros de aToZ debería devolver los pokémon ordenado por nombre', () => {
      expect(sortData(untidyPoke, "name", "aToZ")).toStrictEqual(tidyPoke);
    });

    test('sortData con parámetros de zToA debería devolver los pokémon ordenado por nombre de la Z a la A', () => {
      expect(sortData(untidyPoke, "name", "zToA")).toStrictEqual(tidyPoke.reverse());
    });    
  });
    