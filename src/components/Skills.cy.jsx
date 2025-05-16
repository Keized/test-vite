import React from 'react'
import Skills from './Skills'

describe('<Skills />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Skills />)
  })
})