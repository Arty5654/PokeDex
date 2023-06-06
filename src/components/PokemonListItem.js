import React, { useState, useEffect } from 'react';
import './../styles/PokemonListItem.css';

const PokemonListItem = ({ pokemon, onSelect }) => {
  const [setImage] = useState('');

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => setImage(data.sprites.front_default))
      .catch((err) => console.error(err));
  }, [pokemon.url]);

  return (
    <li className="pokemon-list-item" onClick={() => onSelect(pokemon)}>
      <div>{pokemon.name}</div>
    </li>
  );
};

export default PokemonListItem;
