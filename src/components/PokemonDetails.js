import React from 'react';
import './src/styles/PokemonDetails.css';

const PokemonDetails = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <div>
        Height: {pokemon.height} | Weight: {pokemon.weight}
      </div>
    </div>
  );
};

export default PokemonDetails;
