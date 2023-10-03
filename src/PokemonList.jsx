import React from 'react';

import PokemonCard from './PokemonCard';

function PokemonList({ pokemonData }) {
  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name.english}
          image="https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/001.png"
          type={pokemon.type[1] 
                ? pokemon.type[0] + ', ' + pokemon.type[1] 
                : pokemon.type[0]}
        />
      ))}
    </div>
  );
}

export default PokemonList;
