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

//import * as data from './data.js';

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
    
    //test('sortData con parámetros de atoZ y data debería devolver Abra en la primera posición (0)', () => {
     // expect(sortData("data","atoZ")[0]).toEqual([{"id": 63,"num": "063","name": "Abra","img": "http://www.serebii.net/pokemongo/pokemon/063.png","type": ["Psychic"],
     //   "height": "0.89 m","weight": "19.5 kg","candy": "Abra Candy","candy_count": 25,"egg": "5 km","spawn_chance": 0.42,"avg_spawns": 42,"spawn_time": "04:30",
     //   "multipliers": [1.36,1.95],"weaknesses": ["Bug","Ghost","Dark"],"next_evolution": [{"num": "064","name": "Kadabra"}, {"num": "065","name": "Alakazam"}]}]);
   // });
  });