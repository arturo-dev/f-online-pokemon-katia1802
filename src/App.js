import React, { Component } from "react";
import { getPokemons } from "./services/pokemonService";
import PokeList from "./components/PokeList";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ""
    };
    this.getSearch = this.getSearch.bind(this);
    this.filterThis();
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

  getSearch(event) {
    const userSearch = event.currentTarget.value;
    this.setState({
      search: userSearch
    });
  }

  filterThis() {
    const filteredSearchResults = this.state.data.filter(item => {
      const pokemonName = item.name;
      if (
        pokemonName
          .toLocaleLowerCase()
          .includes(this.state.search.toLocaleLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredSearchResults;
  }

  render() {
    const pokemonResults = this.filterThis();

    return (
      <div>
        <header>
          <h1>PokeDex</h1>
          <Search 
          onKeySearch={this.getSearch} 
          userSearch={this.state.search} />
        </header>

        <main>
          <PokeList 
          pokemonResults={pokemonResults}
          />
        </main>
      </div>
    );
  }
}

export default App;
