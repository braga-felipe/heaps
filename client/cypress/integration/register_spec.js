describe("Register an account", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });
  it("Register an account without any inputs", () => {
    cy.contains("Register").click()
    cy.get('form').submit()

    cy.get("#field-7-feedback").should('be.visible');
    cy.get("#field-8-feedback").should('be.visible');
    cy.get("#field-9-feedback").should('be.visible');
    cy.get("#field-10-feedback").should('be.visible');
    cy.get("#field-11-feedback").should('be.visible');

  });
  it("Register an account", () => {
    cy.contains("Register").click()

    cy.get("input[name=username]")
      .type("Fake First Name")
      .should("have.value", "Fake First Name");

    cy.get("input[name=address]")
      .type("Fake First Name")
      .should("have.value", "Fake First Name");

    cy.get("input[name=zipCode]")
      .type("Fake Last Name")
      .should("have.value", "Fake Last Name");

    cy.get("input[name=email]")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get("input[name=password]")
      .type("Fake Password")
      .should("have.value", "Fake Password");

    cy.get("#Register").click()

    cy.url().should("include", "/")
  });

  //Add scenario if account already exists
});