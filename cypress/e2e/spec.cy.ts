/// <reference types="cypress" />

/////////////////////////////////////////////////////////////////////////////////////////////////
// ADIÇÃO:

describe('Adição', () => {
  it('1 + 1 = 2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('1').click()
    cy.get('#plus').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '2')
  })

  it('2 + 3 = 5', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('2').click()
    cy.get('#plus').click()
    cy.get('button').contains('3').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '5')
  })

  it('0 + 0 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('0').click()
    cy.get('#plus').click()
    cy.get('button').contains('0').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '0')
  })

  it('-1 + -1 = -2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('-1').click()
    cy.get('#plus').click()
    cy.get('button').contains('-1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '-2')
  })

  it('1.5 + 2.5 = 4', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('1').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('#plus').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '4')
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////
// SUBTRAÇÃO

describe('Subtração', () => {
  it('1 - 1 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('1').click()
    cy.get(':nth-child(10)').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '0')
  })

  it('5 - 3 = 2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('5').click()
    cy.get(':nth-child(10)').click()
    cy.get('button').contains('3').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '2')
  })

  it('0 - 0 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('0').click()
    cy.get(':nth-child(10)').click()
    cy.get('button').contains('0').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '0')
  })

  it('-1 - -1 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('-1').click()
    cy.get(':nth-child(10)').click()
    cy.get('button').contains('-1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '0')
  })

  it('5.5 - 2.5 = 3', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('5').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get(':nth-child(10)').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '3')
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////
// MULTIPLICAÇÃO

describe('Multiplicação', () => {
  it('2 * 5 = 10', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('2').click()
    cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('5').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '10')
  })

  it('3 * 3 = 9', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('3').click()
    cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('3').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '9')
  })

  it('0 * 5 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('0').click()
    cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('5').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '0')
  })

  it('-2 * -3 = 6', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('-2').click()
    cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('-3').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '6')
  })

  it('2.5 * 4 = 10', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('4').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '10')
  })
})


/////////////////////////////////////////////////////////////////////////////////////////////////
// DIVISÃO

describe('Divisão', () => {
  it('6 / 2 = 3', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('6').click()
    cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('2').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '3')
  })

  it('9 / 3 = 3', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('9').click()
    cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('3').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '3')
  })

  it('0 / 1 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('0').click()
    cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '0')
  })

  it('-6 / -2 = 3', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('-6').click()
    cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('-2').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '3')
  })

  it('7.5 / 2.5 = 3', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('7').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', '3')
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////
// imc


