import React from 'react'
import { render, screen } from '@testing-library/react'
import ContentBody from '../Components/ContentBody'
import '@testing-library/jest-dom/extend-expect'

describe("Content Body: form img and pokemon name", () => {
  
  it("pokemon name area", () => {
    render(<ContentBody />)
    
    const pokemonName = screen.getByTestId("name-pokemon")
    expect(pokemonName).toBeInTheDocument();
  })

  it("pokemon img area", () => {
    render(<ContentBody />)
    
    const pokemonImg = screen.getByRole('img', 
      {name: /what is this pokemon\?/i}
    )
    expect(pokemonImg).toBeInTheDocument();
  })
  
})