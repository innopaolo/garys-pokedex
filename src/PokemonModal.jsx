import React, {useState, useEffect } from 'react';
// import { deletePokemonByID } from './api-utils';

function PokemonModal({ pokemon, onClose, isOpen }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImage, setLoadedImage] = useState(null);
//   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // When pokemon image is loaded from database, replace the loading pokeball
  useEffect(() => {
    const img = new Image();
    img.src = pokemon.image;
    img.onload = () => {
        setLoadedImage(img.src);
        setIsLoading(false);
    };
  }, [pokemon.image]);

  // Dynamically keeps the modal display status
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  // Grabs the first type of the pokemon if there are two
  const typeClass = pokemon.type.split(', ')[0];

//   const handleConfirmDelete = () => {
//     deletePokemonById(pokemon.id);
//     setIsConfirmationOpen(false);
//     onClose();
//   };

//   const handleCancelDelete = () => {
//     setIsConfirmationOpen(false);
//   };

  return (
    <div className="modal" style={modalStyle}>
      <div className={`modal-content`}>
        <div className={`top-modal ${typeClass}-type`}>
            <img className='type-icon' src={`./src/assets/${typeClass}.svg`} alt="type icon" />
            <h2>{pokemon.name}</h2>
        </div>

        {/* Loading pokeball shows unless image is ready */}
        {isLoading && <div className="loading-screen"></div>}
        {loadedImage && !isLoading && (
            <img className="modal-image" src={pokemon.image} alt="pokemon" />
        )}

        <div className="card-descript">
            <p>HP: {pokemon.hp}</p>
            <p>ATTACK: {pokemon.attack}</p>
            <p>DEFENSE: {pokemon.defense}</p>
            <div className='delete-pokemon'>
                Delete
            </div>
        </div>
        <button className='close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PokemonModal;
