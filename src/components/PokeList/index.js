import React, { Component } from "react";
import Pokemon from '../Pokemon'
import "./PokeList.scss"


class PokeList extends Component {
  render() {
    const { data } = this.props;
    return (
      <ul className="pokeApp__list">
        {data.map((item, index) => {
          return (
            <div >
              <li key={index}>

                <Pokemon 
                image = {item.sprites.front_default}
                id = {item.id}
                name = {item.name}
                types = {item.types}
                />

              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default PokeList;
