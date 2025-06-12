import { BuyAssetPo } from "../../support/buy-asset.po";

/**
 * Given the a adding a new asset
 *   When is invalid buy
 *    Then should display error
 */
describe("Given the a adding a new asset", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.deleteAllPortfolios();
    cy.createPortfolio(1000, "Test Portfolio");
    cy.get("a").contains("Add new asset").click();
  });
  context("When is invalid buy", () => {
    it("should navigate to the asset form page", () => {
      const buyAssetPo = new BuyAssetPo();
      buyAssetPo.selectSymbol("MSFT");
      buyAssetPo.typeUnits(100);
      buyAssetPo.clickButton();
      cy.get(buyAssetPo.selectorAppError).should("exist");
    });
  });
});
