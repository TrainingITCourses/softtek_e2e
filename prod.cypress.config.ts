import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200/",
    defaultCommandTimeout: 2000,
    viewportHeight: 1000,
    viewportWidth: 680,
    screenshotOnRunFailure: false,
    specPattern: "cypress/e2e/1*.cy.ts",
  },
});
