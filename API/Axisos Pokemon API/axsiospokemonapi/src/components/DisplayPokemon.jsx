import React from 'react'

const DisplayPokemon = (props) => {
    return (
        <div>
            {props.pokemons.map((pokemon, index)=>{
                return (<p>{pokemon.name}</p>)
            })}
        </div>
    )
}

export default DisplayPokemon
