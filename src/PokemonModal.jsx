import React, {useState, useEffect } from 'react';
import { deletePokemonById } from './api-utils.js';

function PokemonModal({ pokemon, onClose, isOpen, onDelete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImage, setLoadedImage] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

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

  const handleDeleteClick = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    deletePokemonById(pokemon.id)
        .then(() => {
            onDelete(pokemon.id);
            setIsConfirmationOpen(false);
            onClose();
        })
        .catch((error) => {
            console.error('Error deleting Pokémon:', error);
        });
  };

  const handleCancelDelete = () => {
    setIsConfirmationOpen(false);
  };

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
            <div className='delete-pokemon' onClick={handleDeleteClick} >
                Delete
            </div>
        </div>
        <button className='close' onClick={onClose}>Close</button>

        {/* Confirmation Modal inside modal-content */}
        {isConfirmationOpen && (
            <div className="confirmation-modal">
            <p>Delete {pokemon.name} from the database?</p>
                <div>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default PokemonModal;
