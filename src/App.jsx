import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import FilterBar from './FilterBar';

const apiUrl = 'http://localhost:3000/api';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    // Fetch data from Express.js backend when the component mounts
    fetch(`${apiUrl}/pokemon`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Filtering by search term
   const handleSearch = (term) => {
    setSearchTerm(term);
    // Perform search logic here and update pokemonData accordingly
    const filteredResults = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setPokemonData(filteredResults);
  };

  // Filtering by pokemon type
  const handleFilter = (type) => {
    setFilterType(type);
    // Perform filtering logic on wether all pokemon should show or just the type
    const filteredResults = pokemonData.filter((pokemon) =>
      type === '' || pokemon.type.includes(type)
    );
    setPokemonData(filteredResults);
  };

  return (
    <div className="app">
      <img className='img-header' src="/pokeheader.png" alt="pokedex header" />
      <div className='header-descript'>
        <p>Gary&apos;s <span>super special limited edition</span> pokédex</p>
        <p>(that stupid Ash Ketchum can&apos;t afford Ha Ha!)</p>
      </div>
      <FilterBar onSearch={handleSearch} onFilter={handleFilter} />
      {pokemonData.length === 0 ? (
        <p>&nbsp;&nbsp;No Pokémon found!</p>
      ) : (
        <PokemonList pokemonData={pokemonData} />
      )}
    </div>
  );
}

export default App;