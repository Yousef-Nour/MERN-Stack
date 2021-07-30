import React,{useState, useEffect} from 'react'

const FetchPokemon = (props) => {
    const[pokemon, setPokemon] = useState("")
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response=>response.json())
        .then(response=>setPokemon(response.results))

    },[])
    
    const handlePokemon=(e)=>{
        e.preventDefault();
        props.pokemonName(pokemon);

        
    }
    return (
        <div>
            <form onSubmit={handlePokemon}>
                <input type="submit" value="Fetch Pokemon"/>
            </form>
        </div>
    )
}

export default FetchPokemon
