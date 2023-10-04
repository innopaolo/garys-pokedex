import React, { useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import FilterBar from './FilterBar';
import dummyPokemonData from './dummyPokemonData';

function App() {
  const [filteredData, setFilteredData] = useState(dummyPokemonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

   const handleSearch = (term) => {
    setSearchTerm(term);
    // Perform search logic here and update filteredData accordingly
    const filteredResults = dummyPokemonData.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  // Filtering by pokemon type
  const handleFilter = (type) => {
    setFilterType(type);
    // Perform filtering logic here and update filteredData accordingly
    const filteredResults = dummyPokemonData.filter((pokemon) =>
      type === '' || pokemon.type.includes(type)
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="app">
      <img className='img-header' src="/pokeheader.png" alt="pokedex header" />
      <div className='header-descript'>
        <p>Gary&apos;s <span>super special limited edition</span> pokédex</p>
        <p>(that stupid Ash Ketchum can&apos;t afford Ha Ha!)</p>
      </div>
      <FilterBar onSearch={handleSearch} onFilter={handleFilter} />
      <PokemonList pokemonData={dummyPokemonData} />
    </div>
  );
}

export default App;