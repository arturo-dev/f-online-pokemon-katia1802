import React, { Component } from 'react';
import {getPokemons} from './services/pokemonService'
import './App.css';


class App extends Component {
  constructor (props){
    super (props);

    this.state = {
      principalData: [],
      data: []
    }
  }

  componentDidMount (){
    getPokemons ()
    .then (data => {
      return data.results.map (pokemonURL => {
        fetch (pokemonURL.url)
        .then (response => response.json ())
        .then (pokeData => {
          this.setState ({
            data: this.state.data.concat (pokeData)
          })
        })      
      return this.setState({
        principalData: this.state.principalData.concat(pokemonURL)
      })
      })
  })
  }
  render() {

    const principalDataToPaint = this.state.principalData;
    console.log ('principalDataToPaint', principalDataToPaint)

    const dataToPaint = this.state.data;
    console.log ('dataToPaint', dataToPaint)

    return (
      <div className="app">
      holi
      </div>
    );
  }
}

export default App;
