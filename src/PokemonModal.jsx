import React, {useState, useEffect } from 'react';
import { deletePokemonById, updatePokemonById } from './api-utils.js';

function PokemonModal({ pokemon, onClose, isOpen, onDelete, onUpdate }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImage, setLoadedImage] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  //   Update variables for database
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [newHP, setNewHP] = useState('');
  const [newAttack, setNewAttack] = useState('');
  const [newDefense, setNewDefense] = useState('');


  // When pokemon image is loaded from database, replace the loading pokeball
  useEffect(() => {
    const img = new Image();
    img.src = pokemon.image;
    img.onload = () => {
        setLoadedImage(img.src);
        setIsLoading(false);
    };
  }, [pokemon.image]);

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

  const handleUpdateClick = () => {
    setIsUpdateOpen(true);
  };

  const handleUpdateConfirm = () => {
    // Validate input fields
    if (newHP.trim() === '' || isNaN(newHP) 
    || newAttack.trim() === '' || isNaN(newAttack) 
    || newDefense.trim() === '' || isNaN(newDefense)) {
      alert('Please enter valid values for HP, Attack, and Defense.');
      return;
    }

    const parsedHP = parseInt(newHP, 10);
    const parsedAttack = parseInt(newAttack, 10);
    const parsedDefense = parseInt(newDefense, 10);

    const updatedPokemonData = {
      hp: parsedHP,
      attack: parsedAttack,
      defense: parsedDefense,
    };
  
    // Call the update function and update the database here
    updatePokemonById(pokemon.id, updatedPokemonData)
      .then(() => {
        // Update the data in the frontend state
        const updatedPokemon = { ...pokemon, ...updatedPokemonData };
        onUpdate(updatedPokemon);
  
        // Close the update form and modal
        setIsUpdateOpen(false);
        onClose();
        alert('Pokemon stats updated!');
      })
      .catch((error) => {
        console.error('Error updating Pokémon:', error);
      });
  };
  
  const handleUpdateCancel = () => {
    setIsUpdateOpen(false);
  };

  // Dynamically keeps the modal display status
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };
    
  // Grabs the first type of the pokemon if there are two
  const typeClass = pokemon.type.split(', ')[0];

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
            <div className='update-pokemon' onClick={handleUpdateClick}>
                Update
            </div>
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

        {/* Render update form on button click  */}
        {isUpdateOpen && (
        <div className="update-form">
            {/* Form for updating HP, Attack, and Defense */}
            <input
            type="number"
            placeholder="New HP"
            value={newHP}
            onChange={(e) => setNewHP(e.target.value)}
            />
            <input
            type="number"
            placeholder="New Attack"
            value={newAttack}
            onChange={(e) => setNewAttack(e.target.value)}
            />
            <input
            type="number"
            placeholder="New Defense"
            value={newDefense}
            onChange={(e) => setNewDefense(e.target.value)}
            />
            <div>
                <button onClick={handleUpdateConfirm}>Confirm</button>
                <button onClick={handleUpdateCancel}>Cancel</button>
            </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default PokemonModal;
