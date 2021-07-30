import React,{useState, useEffect} from 'react'
import axios from 'axios'

const FetchPokemon = (props) => {
    const[pokemon, setPokemon] = useState([])
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response=>setPokemon(response.data.results))

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
