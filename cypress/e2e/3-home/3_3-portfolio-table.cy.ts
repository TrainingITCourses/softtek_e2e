describe("Given the portfolio home", () => {
  context("When there is a portfolio", () => {
    it("Then should display the cash", () => {
      const API_URL = Cypress.env("API_URL");
      cy.intercept("GET", `${API_URL}portfolios`, {
        fixture: "portfolio.json",
      });
      cy.visit("");
      cy.get("article").find("table").as("assetsTable").should("exist");
      cy.get("@assetsTable").find("tbody").find("tr").should("have.length", 2);
    });
  });
});
