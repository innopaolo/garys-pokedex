import React, { useState } from "react";
import { createNewPokemon } from "./api-utils.js";

function PokemonAdd({ onClose, onCreate }) {
  const initialFormData = {
    name: "",
    type: "Normal",
    imageUrl: "",
    hp: 0,
    attack: 0,
    defense: 0,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.imageUrl ||
      !formData.hp ||
      !formData.attack ||
      !formData.defense
    ) {
      alert("All fields are required!");
      return;
    }

    createNewPokemon(formData)
      .then(() => {
        // Capitalizes the type of the new Pokemon
        formData.type = formData.type[0].toUpperCase() + formData.type.slice(1);

        onCreate(formData);
        alert("Pokemon created successfully");
      })
      .catch((error) => {
        console.error("Error creating Pokemon:", error);
      });

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content create-pokemon">
        <form action="">
          <h1>Add your pokemon!</h1>

          <p>First, tell us your Pokemon's name:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <p>What is the pokemon's type?</p>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
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

          <p>
            Add a picture link <br />
            (PNG with a transparent <br />
            background works best)
          </p>
          <p></p>
          <input
            type="text"
            placeholder="URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />

          <div>
            <p>Add their stats!</p>
            <input
              type="number"
              placeholder="HP"
              name="hp"
              value={formData.hp}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Attack"
              name="attack"
              value={formData.attack}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Defense"
              name="defense"
              value={formData.defense}
              onChange={handleInputChange}
            />
          </div>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <img className="gary" src="./public/gary-oak.png" alt="Gary Oak" />

        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PokemonAdd;
