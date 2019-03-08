import React, { Component } from 'react';
import {getPokemons} from './services/pokemonService'
import './App.css';


class App extends Component {

  componentDidMount (){
    getPokemons ()
    .then (data => {
      const pokemonFullData = data.results.map (pokemon => {
        fetch (pokemon.url)
        .then (response2 => response2.json())
        .then (pokemonData => {
          return console.log (pokemonData.id)
        })
      })

    })
  }
  render() {
    return (
      <div className="app">
      holi
      </div>
    );
  }
}

export default App;
