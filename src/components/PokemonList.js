import React, { useState, useEffect } from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemonList();
  }, []);

  const handleSelectPokemon = async (pokemon) => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pokemon-list-container">
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonListItem key={pokemon.name} pokemon={pokemon} onSelect={handleSelectPokemon} />
        ))}
      </ul>
      {selectedPokemon && (
        <div className="selected-pokemon">
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
