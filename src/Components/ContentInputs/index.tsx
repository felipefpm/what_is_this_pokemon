import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { MdYoutubeSearchedFor, MdSearch } from "react-icons/md";
import api from '../../Services/api';
import PokemonContext from '../../Context/pokemonContext'

import { Container } from './styles';

const ContentInputs: React.FC = () => {
  const [numberPokemon, setNumberPokemon] = useState('')
  const {setPokemon, setImagePokemon} = useContext(PokemonContext);

  function handlerGetNumberPokemon(e: ChangeEvent<HTMLInputElement>) {
    const numberPokemon = e.target.value;
    setNumberPokemon(numberPokemon);
  }

  function getPokemon(e: FormEvent) {
    e.preventDefault()
    
    if (numberPokemon === '') {
      return;
    }

    api.get(`/${numberPokemon}`).then(response => {
      const namePokemon = response.data.name;
      const imagePokemons = response.data.sprites.other["official-artwork"].front_default;
      setPokemon(namePokemon);
      setImagePokemon(imagePokemons);
    }).catch( error => {
      alert("Poxa não encontramos esse Pokemon")
      setPokemon('');
      setImagePokemon('');
      setNumberPokemon('');
    })

  }

  function clearPokemon(e: FormEvent) {
    e.preventDefault()
    setNumberPokemon('')
    setPokemon('');
    setImagePokemon('');
  }

  return (
    <Container onSubmit={getPokemon}>
      <input 
        type="number"
        className="searchInput"
        placeholder="Digite um numero para saber seu Pokemon"
        value={numberPokemon}
        onChange={handlerGetNumberPokemon}
      />
      <div className="buttons">
        <button type="submit" className="buttonItem">
          <MdSearch />
        </button>
        <button onClick={clearPokemon} className="buttonItem">
          <MdYoutubeSearchedFor />
        </button>
      </div>
    </Container>
  );
};

export default ContentInputs;
