import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokedex</h1>
      </header>
      <div className="container">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
