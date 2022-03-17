import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import pokedex from "../pokedex.json"

// AREA DE TRABALHO --> Substituir pelo JSON
// const pokedex = [
//   {
//     "id": 1,
//     "name": "Bulbasaur",
//     "type": [
//       "Grass",
//       "Poison"
//     ]
//   },
//   {
//     "id": 2,
//     "name": "Ivysaur",
//     "type": [
//       "Grass",
//       "Poison"
//     ]
//   }]
// AREA DE TRABALHO -----------------------------------



export default class App extends Component {


  // AREA DE TRABALHO --> Usar estrutura de Class Component
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokedex,
      pokemon: pokedex[0]
    };
  }
  // AREA DE TRABALHO -------------------------------------------


  update(pokemon) {
    console.log(pokemon);
    this.setState({
      pokemon: pokemon
    });
    // Nesta função, o Pokémon visível deve ser atualizado
    // Não vamos esquecer que se for uma função, devemos vinculá-la... como podemos evitar o uso do vínculo?
  }

  formatId = (id) =>  id.toString().padStart(3, '0')

  formatTypes = (types) => types.join(' and ')
    
  

  render() {
    /* AREA DE TRABALHO
      Podemos usar a desestruturação ou modificar diretamente as variáveis ​​this.pokemon por this.state ...
    */

    const {pokemon, pokemons} = this.state

    return (
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <Pokedex updateParent={this.update.bind(this)} pokemons={pokemons} />

        <div className="container">
          <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.formatId(pokemon.id)}.png`} 
          alt={pokemon.name} />
          <p id="name">{`${pokemon.name} is a pokemon type ${this.formatTypes(pokemon.type)}`}</p>
        </div>
      </div>
    )
  }
}
