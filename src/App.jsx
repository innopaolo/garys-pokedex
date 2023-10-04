import React from 'react';
import './App.css';
import PokemonList from './PokemonList';
import FilterBar from './FilterBar';
import dummyPokemonData from './dummyPokemonData';

function App() {
  return (
    <div className="app">
      <img className='img-header' src="/pokeheader.png" alt="pokedex header" />
      <div className='header-descript'>
        <p>Gary&apos;s <span>super special limited edition</span> pokédex</p>
        <p>(that poor Ash Ketchum can&apos;t afford Ha Ha!)</p>
      </div>
      <FilterBar />
      <PokemonList pokemonData={dummyPokemonData} />
    </div>
  );
}

export default App;