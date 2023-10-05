import React from 'react';

import PokemonCard from './PokemonCard';

function PokemonList({ pokemonData }) {
  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprite}
          type={pokemon.type}
        />
      ))}
    </div>
  );
}

export default PokemonList;
