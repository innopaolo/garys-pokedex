// Import styles
import "./styles/App.css";
import "./styles/CardTypeColors.css";
import "./styles/FilterBar.css";
import "./styles/Modals.css";
import "./styles/PokemonAdd.css";
import "./styles/PokemonList.css";
import "./styles/Rebuild.css";

import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import FilterBar from "./FilterBar";
import PokemonModal from "./PokemonModal";
import PokemonAdd from "./PokemonAdd";
import { fetchData, rebuildPokedexData } from "./api-utils.js";

function App() {
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(15); // Initially display 10 Pokémon cards
  const increment = 15; // Increments when "see more" is clicked

  const [originalPokemonData, setOriginalPokemonData] = useState([]); // Immutable data to filter from
  const [pokemonData, setPokemonData] = useState([]); // Dynamically changes and will be displayed
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  // State for selected Pokemon and modal
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlueLightClicked, setIsBlueLightClicked] = useState(false);
  const [isRebuildClicked, setIsRebuildClicked] = useState(false);

  const [isNewPokemonAdded, setIsNewPokemonAdded] = useState(false);

  // Function to fetch data from the Express backend and update state
  useEffect(() => {
    fetchData(setPokemonData, setOriginalPokemonData);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Reloads pokedex data every time a new pokemon is added.
  // This ensures the new pokemon will show up on search
  // and filter without reloading the website.
  useEffect(() => {
    fetchData(setPokemonData, setOriginalPokemonData);
  }, [isNewPokemonAdded]);

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
    // Perform filtering logic on whether all pokemon should show or just the type
    const filteredResults = originalPokemonData.filter(
      (pokemon) => type === "" || pokemon.type.includes(type)
    );
    setPokemonData(filteredResults);
    setDisplayedPokemonCount(15); // Reset how many pokemon will show up initially
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
    setIsBlueLightClicked(false);
    setIsRebuildClicked(false);
    setSelectedPokemon(null);
  };

  // Function to delete pokemon from frontend state
  const handlePokemonDeletion = (pokemonId) => {
    setPokemonData((prevData) => prevData.filter((p) => p.id !== pokemonId));
    setOriginalPokemonData((prevData) =>
      prevData.filter((p) => p.id !== pokemonId)
    );
  };

  // Function to update pokemon's frontend data
  const handlePokemonUpdate = (updatedPokemon) => {
    // Find the index of the updated Pokemon in data
    const index = pokemonData.findIndex((p) => p.id === updatedPokemon.id);

    if (index !== -1) {
      const updatedData = [...pokemonData];
      updatedData[index] = updatedPokemon;

      // Update the state with the new data
      setPokemonData(updatedData);
    }
  };

  const handleBlueLightClick = () => {
    setIsBlueLightClicked(true);
    setIsModalOpen(true);
  };

  //Function to add a new pokemon to the frontend state
  const handlePokemonAdd = (newPokemon) => {
    setPokemonData((prevData) => [...prevData, newPokemon]);
    setIsNewPokemonAdded(true);
  };

  // Function to open the modal for rebuild
  const handleRebuildCLick = () => {
    setIsModalOpen(true);
    setIsRebuildClicked(true);
  };

  //Function to reset the data by rebuilding the database
  const handleRebuild = () => {
    rebuildPokedexData()
      .then(() => {
        window.location.reload();
        alert("Rebuild succesful");
      })
      .catch((error) => {
        console.error("Error rebuilding Pokedex:", error);
      });
  };

  return (
    <div className="app">
      <div className="blue-light-container">
        <div className="blue-light" onClick={handleBlueLightClick}>
          <div className="light-reflection"></div>
        </div>
      </div>

      <div className="rebuild-btn" onClick={handleRebuildCLick}>
        Rebuild
      </div>

      <img
        className="img-header"
        src="./public/pokeheader.png"
        alt="pokedex header"
      />

      <div className="header-descript">
        <p>
          Gary&apos;s <span>super special limited edition</span> pokédex
        </p>
      </div>

      <FilterBar onSearch={handleSearch} onFilter={handleFilter} />

      {pokemonData.length === 0 ? (
        <p>&nbsp;&nbsp;No Pokémon found!</p>
      ) : (
        <PokemonList
          pokemonData={pokemonData.slice(0, displayedPokemonCount)}
          handleCardClick={handleCardClick}
        />
      )}

      {isModalOpen && selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={handleCloseModal}
          onDelete={handlePokemonDeletion}
          onUpdate={handlePokemonUpdate}
        />
      )}

      {isModalOpen && isBlueLightClicked && (
        <PokemonAdd onClose={handleCloseModal} onCreate={handlePokemonAdd} />
      )}

      {isModalOpen && isRebuildClicked && (
        <div className="modal">
          <div className="modal-content rebuild-modal">
            <p>
              You are about to revert the pokédex data to its original form.
              Proceed?
            </p>
            <div>
              <button onClick={handleRebuild}>Yesh</button>
              <button onClick={handleCloseModal}>Nah</button>
            </div>
          </div>
        </div>
      )}

      {displayedPokemonCount < pokemonData.length && (
        <button className="see-more" onClick={handleSeeMoreClick}>
          See More
        </button>
      )}
    </div>
  );
}

export default App;
