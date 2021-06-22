import React, { useState } from 'react';

interface PokemonContextData {
  pokemon: string
  imagePokemon: string
  setPokemon: (param: string) => void;
  setImagePokemon: (param: string) => void;
}

const PokemonContext = React.createContext({} as PokemonContextData);

export const PokemonProvider: React.FC = ({children}) => {
  const [pokemon, setPokemon] = useState('')
  const [imagePokemon, setImagePokemon] = useState('')

  return (
    <PokemonContext.Provider value={{pokemon, imagePokemon, setPokemon, setImagePokemon}} >
      {children}
    </PokemonContext.Provider>
  )
} 

export default PokemonContext;

