import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  render() {
    return (
      <div className = "app__search-item">
        <input
          placeholder="Busca aquí tu Pokemon 👀"
          className="app__input"
          type="text"
          onChange= {this.props.onKeySearch}
          value={this.props.userSearch}
        />
      </div>
    );
  }
}

export default Search;
