import React, {useState, useEffect } from 'react';
import { createNewPokemon } from './api-utils.js';

function PokemonAdd({ onClose }) {
    return (
        <div className='modal'>
            <div className='modal-content create-pokemon'>
                <form action="">
                    <h1>Add your pokemon!</h1>

                    <p>First, tell us your Pokemon's name:</p>
                    <input type="text" />

                    <p>What is the pokemon's type?</p>
                    <select>
                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="ice">Ice</option>
                        <option value="fighting">Fighting</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="flying">Flying</option>
                        <option value="psychic">Psychic</option>
                        <option value="bug">Bug</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="steel">Steel</option>
                        <option value="fairy">Fairy</option>
                    </select>

                    <p>Add a picture link</p>
                    <input type="text" placeholder="URL" />
                    
                    <div>
                        <p>Add their stats!</p>
                        <input
                        type="number"
                        placeholder="HP"
                        required
                        />
                        <input
                        type="number"
                        placeholder="Attack"
                        required
                        />
                        <input
                        type="number"
                        placeholder="Defense"
                        required
                        />
                    </div>

                    <button type='button'>Submit</button>
                </form>

                <img className='gary' src="./src/assets/gary-oak.png" alt="Gary Oak" />

                <button className='close' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default PokemonAdd;