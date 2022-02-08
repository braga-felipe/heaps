describe("Create a new food Item", function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
    cy.login('anatest4@test4.com', '12345678')
  });
  it('Cretate item without any inputs', () => {
    cy.visit('http://localhost:3000/createItem')
    cy.contains('Create a Food Item').click()
    cy.get('form').submit()

    cy.get('#field-1-feedback').should('be.visible');
    cy.get("#field-2-feedback").should('be.visible');
  });
});