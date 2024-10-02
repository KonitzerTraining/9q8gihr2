describe('My First Test', () => {
  it('Visits the initial project page', () => {

    cy.intercept('GET', 'http://localhost:3002/products/', { fixture: 'products.json' })
      .as('getProducts')

    cy.visit('/')
    cy.get('#btn_login').click()
    cy.get('#btn_login_submit').click()

    cy.contains('Welcome, Tim Taler')
    cy.get('#nav_products').click()

  })
})
