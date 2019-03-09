import React, { Component } from "react";
import { getPokemons } from "./services/pokemonService";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      principalData: [],
      data: []
    };
  }

  componentDidMount() {
    getPokemons().then(data => {
      return data.results.map(pokemonURL => {
        fetch(pokemonURL.url)
          .then(response => response.json())
          .then(pokeData => {
            this.setState({
              data: this.state.data.concat(pokeData)
            });
          });
        return this.setState({
          principalData: this.state.principalData.concat(pokemonURL)
        });
      });
    });
  }
  render() {
    const dataToPaint = this.state.data;
    console.log (dataToPaint)

    return (
      <div className="app">
        <header>holi</header>

        <main />

        <ul>
          {dataToPaint.map(item => {
            return (
              <div>
                <li>
                  <img src={item.sprites.front_default} alt={item.name}/>
                  <p>{item.id}</p>
                  <p>{item.name}</p>
                  <ul>{item.types.map(type =>{
                    return <li>{type.type.name}</li>
                  })}

                  </ul>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
