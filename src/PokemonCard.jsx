import React from 'react';

function PokemonCard({ id, name, image, type, onClick }) {
  const typeClass = type.split(', ')[0] + '-type';
  return (
    <div className={`pokemon-card ${typeClass}`} onClick={onClick}>
      <img className='card-icon' src="/pokeball-card.png" alt="" />
      <p>&nbsp;&nbsp;&nbsp;#{id}</p>
      <img className='card-image' src={image} alt={name} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  );
}

export default PokemonCard;
