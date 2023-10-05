import React, {useState, useEffect } from 'react';

function PokemonModal({ pokemon, onClose, isOpen }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = pokemon.image;
    img.onload = () => {
        setLoadedImage(img.src);
        setIsLoading(false);
    };
  }, [pokemon.image]);

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const typeClass = pokemon.type.split(', ')[0];

  return (
    <div className="modal" style={modalStyle}>
      <div className={`modal-content`}>
        <div className={`top-modal ${typeClass}-type`}>
            <img className='type-icon' src={`./src/assets/${typeClass}.svg`} alt="type icon" />
            <h2>{pokemon.name}</h2>
        </div>

        {isLoading && <div className="loading-screen"></div>}
        {loadedImage && !isLoading && (
            <img className="modal-image" src={pokemon.image} alt="pokemon" />
        )}

        <div className="card-descript">
            <p>HP: {pokemon.hp}</p>
            <p>ATTACK: {pokemon.attack}</p>
            <p>DEFENSE: {pokemon.defense}</p>
        </div>
        <button className='close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PokemonModal;
