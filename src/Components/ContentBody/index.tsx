import React, { useContext } from 'react';
import PokemonContext from '../../Context/pokemonContext'

import { Container } from './styles';
import what_is_this from '../../assets/what_Is_this.png'

const ContentBody: React.FC = () => {
  const {pokemon, imagePokemon} = useContext(PokemonContext);

  return (
    <Container>
      <h1 data-testid="name-pokemon">{pokemon}</h1>
      {imagePokemon ? 
        <img src={imagePokemon} alt="Is this pokemon" /> : 
        <img src={what_is_this} alt="What is this pokemon?" />
      }
    </Container>
  );
};

export default ContentBody;
