import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemonData, handleCardClick }) {
  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.thumbnail}
          type={pokemon.type}
          onClick={() => handleCardClick(pokemon)}
        />
      ))}
    </div>
  );
}

export default PokemonList;
