export function createNewPokemon(pokemonData) {
    fetch('/api/pokemon', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemonData),
    })
        .then((response) => {
        if (response.status === 201) {
            console.log('Pokémon created successfully');
        } else {
            console.error('Failed to create Pokémon');
        }
        })
        .catch((error) => {
        console.error('Error creating Pokémon:', error);
        });
}

  
export function updatePokemonById(id, updatedPokemonData) {
    fetch(`/api/pokemon/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPokemonData),
    })
        .then((response) => {
        if (response.status === 200) {
            console.log('Pokémon updated successfully');
        } else {
            console.error('Failed to update Pokémon');
        }
        })
        .catch((error) => {
        console.error('Error updating Pokémon:', error);
        });
}
  

export function deletePokemonById(id) {
    fetch(`/api/pokemon/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Pokémon deleted successfully');
        } else {
          console.error('Failed to delete Pokémon');
        }
      })
      .catch((error) => {
        console.error('Error deleting Pokémon:', error);
      });
}
  