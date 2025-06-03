describe("The home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer");
  });
  it("should contains Softtek int the footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer").contains("Softtek");
  });
  it("should have un link to albertobasalo.dev", () => {
    cy.visit("http://localhost:4200/");
    cy.get("[href='https://albertobasalo.dev']");
  });
  it("should have nav anchor", () => {
    cy.visit("http://localhost:4200/");
    cy.get("nav > :nth-child(1) > a").should("exist");
  });
});
