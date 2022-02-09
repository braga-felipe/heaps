describe("Create a new food Item", function () {
  before(() => {
    cy.visit('http://localhost:3000/login')
    cy.login('anatest4@test4.com', '12345678')
    cy.wait(2000)
    cy.get('#createItemIcon').click()
    cy.wait(2000)
  });

  it('Cretate item without any inputs', () => {
    cy.contains('Create a Food Item').click()
    cy.get('form').submit()
    cy.get('#field-1-feedback').should('be.visible');
    cy.get("#field-2-feedback").should('be.visible');
  });

  it('Create item', () => {
    cy.contains('Create a Food Item')

    cy.get('input[name=name]')
      .type('Fake Food')
      .should('have.value', 'Fake Food')

    cy.get('input[name=description]')
      .type('Description')
      .should('have.value', 'Description')
  })
});