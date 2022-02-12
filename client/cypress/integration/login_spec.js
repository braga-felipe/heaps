describe("Login into Localy", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("Login without any inputs", () => {
    cy.contains('Log In').click();
    cy.get('form').submit()

    cy.get('#field-1-feedback').should('be.visible');
    cy.get("#field-2-feedback").should('be.visible');

  });

  it('Login with invalid email', () => {
    cy.contains('Log In').click()
    cy.get('form').submit()

    cy.get('input[name=email]')
      .type('aaa')
      .get('#field-2-feedback').should('be.visible');

  });
  it("Login with invalid email and password", () => {
    cy.contains('Log In').click()
    cy.get('form').submit()

    cy.get('input[name=email]')
      .type("aaa")


    cy.get('input[name=password]')
      .type("aaa")

    cy.get('form').submit()
      .get('#field-1-feedback').should('be.visible');
  });


  it("Login with Username and Password", function () {
    cy.contains('Log In').click();

    cy.get('input[name=email]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');

    cy.get('input[name=password]')
      .type('Fake Password')
      .should('have.value', 'Fake Password');

    cy.get('form').submit()
      .url().should('include', '/');

  });

});