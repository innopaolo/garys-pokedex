import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import FilterBar from './FilterBar';
import PokemonModal from './PokemonModal';

const apiUrl = 'http://localhost:3000/api';

function App() {
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(15); // Initially display 10 Pokémon cards
  const increment = 15; // Increments when "see more" is clicked

  const [originalPokemonData, setOriginalPokemonData] = useState([]); // Immutable data to filter from
  const [pokemonData, setPokemonData] = useState([]); // Dynamically changes and will be displayed
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  // State for selected Pokemon and modal
  const [selectedPokemon, setSelectedPokemon] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from Express backend when the component mounts
    fetch(`${apiUrl}/pokemon`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setOriginalPokemonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Filtering by search term
   const handleSearch = (term) => {
    setSearchTerm(term);
    // Perform search logic here and update pokemonData accordingly
    const filteredResults = originalPokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setPokemonData(filteredResults);
    setDisplayedPokemonCount(15); // Reset display count
  };

  // Filtering by pokemon type
  const handleFilter = (type) => {
    setFilterType(type);
    // Perform filtering logic on wether all pokemon should show or just the type
    const filteredResults = originalPokemonData.filter((pokemon) =>
      type === '' || pokemon.type.includes(type)
    );
    setPokemonData(filteredResults);
    setDisplayedPokemonCount(15); // Reset display count
  };

  // Shows more pokemon
  const handleSeeMoreClick = () => {
    setDisplayedPokemonCount((prevCount) => prevCount + increment);
  };

   // Function to open the modal when a card is clicked
   const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  return (
    <div className="app">
      <img className='img-header' src="/pokeheader.png" alt="pokedex header" />
      <div className='header-descript'>
        <p>Gary&apos;s <span>super special limited edition</span> pokédex</p>
      </div>
      <FilterBar onSearch={handleSearch} onFilter={handleFilter} />
      {pokemonData.length === 0 ? (
        <p>&nbsp;&nbsp;No Pokémon found!</p>
      ) : (
        <PokemonList pokemonData={pokemonData.slice(0, displayedPokemonCount)} handleCardClick={handleCardClick} />
      )}

      {isModalOpen && selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} isOpen={isModalOpen} />
      )}

      {displayedPokemonCount < pokemonData.length && (
        <button className='see-more' onClick={handleSeeMoreClick}>See More</button>
      )}
    </div>
  );
}

export default App;