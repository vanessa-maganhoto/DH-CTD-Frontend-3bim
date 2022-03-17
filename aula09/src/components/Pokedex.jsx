import React, { Component } from 'react'
import {pokeContainer, pokeList, pokeOption} from "../styles/styles"

export default class Pokedex extends Component {

    render() {
        const {updateParent, pokemons} = this.props
        return (
            <div style={pokeContainer}>
                <h3>POKEDEX</h3>
                <div style={pokeList}>
                    {pokemons.map(pokemon => (
                    <p key={pokemon.id} onClick={() => updateParent(pokemon)} style={pokeOption}>{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}


