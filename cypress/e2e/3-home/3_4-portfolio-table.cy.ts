describe("Given the portfolio home", () => {
  context("When there is a portfolio", () => {
    it("Then should display the cash", () => {
      const API_URL = Cypress.env("API_URL");
      cy.intercept("GET", `${API_URL}portfolios`, {
        fixture: "portfolio.json",
      }).as("getPortfolios");
      cy.visit("");
      cy.wait("@getPortfolios");
      //cy.get("article").find("table").as("assetsTable").should("exist");
      // cy.get("@assetsTable").find("tbody").find("tr").should("have.length", 2);
      cy.get("article").find("table").as("assetsTable");
      cy.get("@assetsTable")
        .find("tbody")
        .find("tr")
        .should("have.length", cy.get("data"));
      cy.get("@assetsTable").find("tfoot").find("tr").should("have.length", 1);
    });
  });
});
