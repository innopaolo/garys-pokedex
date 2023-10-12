export const apiUrl = "http://localhost:3000";


// Function to fetch data from the Express backend and update state
export function fetchData(setPokemonData, setOriginalPokemonData) {
    fetch(`${apiUrl}/api/pokemon`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setOriginalPokemonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
}

export function createNewPokemon(pokemonData) {
    return fetch(`${apiUrl}/api/pokemon`, {
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
    return fetch(`${apiUrl}/api/pokemon/${id}`, {
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
    return fetch(`${apiUrl}/api/pokemon/${id}`, {
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


export function rebuildPokedexData() {
    return fetch(`${apiUrl}/reset`, {
        method: 'POST',
    })
        .then((response) => {
            console.log('Pokedex reset successfully');
        })
        .catch((error) => {
            console.error('Network error:', error);
        });
}
  