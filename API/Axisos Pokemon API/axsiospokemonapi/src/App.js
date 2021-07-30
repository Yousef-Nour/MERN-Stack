import './App.css';
import FetchPokemon from './components/FetchPokemon'
import DisplayPokemon from './components/DisplayPokemon'
import React,{useState} from 'react';

function App() {
  const[pokemons, setPokemons] = useState([])
  const pokemonName = (pokemons)=>{
    setPokemons(pokemons)
  }

  return (
    <div className="App">
      <FetchPokemon pokemonName={pokemonName}/>
      <DisplayPokemon pokemons={pokemons}/>
      
    </div>
  );
}

export default App;