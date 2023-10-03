import React from 'react';
import PokemonList from './PokemonList';
import FilterBar from './FilterBar';
import dummyPokemonData from './dummyPokemonData';

function App() {
  return (
    <div className="app">
      <h1>Pokédex</h1>
      <FilterBar />
      <PokemonList pokemonData={dummyPokemonData} />
    </div>
  );
}

export default App;