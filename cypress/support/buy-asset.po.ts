export class BuyAssetPo {
  public inputSymbol = cy.get("#symbol");
  public inputPricePerUnit = cy.get("#price_per_unit");
  public selectorAppError = "app-error";

  public typeUnits(units: number) {
    cy.get("#units").clear().type(units.toString());
  }
  public clickButton() {
    cy.get("button").click();
  }
}
