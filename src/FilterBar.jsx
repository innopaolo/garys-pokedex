import React, { useState } from 'react';

function FilterBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value)
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    onFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(searchTerm);
  };

  return (
    <div className="filter-bar">
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
        />
        <button>Search</button>
      </form> 
      Sort by type <select value={filterType} onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
}

export default FilterBar;
