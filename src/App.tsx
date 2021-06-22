import React from 'react';
import { GLobalStyles } from './styles/GlobalStyles';
import Routes from './routes';

import { PokemonProvider } from './Context/pokemonContext'

function App() {
  
  
  return (
    <PokemonProvider>
      <Routes />
      <GLobalStyles />
    </PokemonProvider>
  );
}

export default App;
