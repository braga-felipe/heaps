describe("Register an account", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });
  /* it("Register an account without any inputs", () => {
    cy.contains("Register").click();
    cy.get("#Register").click();
    cy.get("input: ");

    cy.get("input[name=username]").then(($input) => {
      expect($input[0].validationMessage).to.eq("username is required");
    });

    cy.get("input[name=address]").then(($input) => {
      expect($input[0].validationMessage).to.eq("address is required");
    });

    cy.get("input[name=zipCode]").then(($input) => {
      expect($input[0].validationMessage).to.eq("zipCode is required");
    });
    cy.get("input[name=email]").then(($input) => {
      expect($input[0].validationMessage).to.eq("email is required");
    });
    cy.get("inputd[name=password]").then(($input) => {
      expect($input[0].validationMessage).to.eq("password is required");
    });
  }); */
  it("Register an account", () => {
    cy.contains("Register").click();

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

    cy.get("#Register").click();

    cy.url().should("include", "/");
  });

  //Add scenario if account already exists
});