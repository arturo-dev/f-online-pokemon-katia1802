import React, { Component } from 'react';

class Pokemon extends Component {
    render() { 
        const {image, id, name, types} = this.props;
        return ( 
            <div>
            <img src={image} alt={name} />
            <p>{id}</p>
            <p>{name}</p>
            <ul>
              {types.map((type, index) => {
                  console.log (type)
                return <li key={index}>{type.type.name}</li>;
              })}
            </ul>
            </div>
         );
    }
}
 
export default Pokemon;