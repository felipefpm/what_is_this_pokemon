import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContentInputs from '../Components/ContentInputs'
import '@testing-library/jest-dom/extend-expect'

describe("Content Inputs: form imput and buttons", () => {
  
  it("placeholder area input tester", () => {
    render(<ContentInputs />)
    
    const placeHolder = screen.getByPlaceholderText("Digite um numero para saber seu Pokemon")
    expect(placeHolder).toBeInTheDocument();
  })

  it("pokemon search button test and class name: buttonItem", () => {
    render(<ContentInputs />)
    
    const searchButton = screen.getAllByRole("button")[0]
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveClass("buttonItem");
    fireEvent.submit(searchButton)
  })
  
  it("pokemon clear button test and class name: buttonItem", () => {
    render(<ContentInputs />)
    
    const clearButton = screen.getAllByRole("button")[1]
    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toHaveClass("buttonItem");
  })
})