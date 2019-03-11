const API = 'https://pokeapi.co/api/v2/pokemon?limit=25';

const getPokemons = () => fetch (API).then (response => response.json ())

export {getPokemons}