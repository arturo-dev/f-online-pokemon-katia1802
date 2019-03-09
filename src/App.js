import React, { Component } from "react";
import { getPokemons } from "./services/pokemonService";
import PokeList from "./components/PokeList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getPokemons().then(data => {
      return data.results.map(principalData => {
        fetch(principalData.url)
          .then(response => response.json())
          .then(pokeData => {
            this.setState({
              data: this.state.data.concat(pokeData)
            });
          });
        return principalData;
      });
    });
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        <header>holi</header>

        <main>
          <PokeList data={data}/>
        </main>
      </div>
    );
  }
}

export default App;
