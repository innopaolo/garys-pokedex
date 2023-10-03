import React from 'react';

function PokemonCard({ name, image, type }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  );
}

export default PokemonCard;
