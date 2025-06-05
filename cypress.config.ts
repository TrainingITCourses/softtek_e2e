import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200/",
    defaultCommandTimeout: 2000,
    viewportHeight: 768,
    viewportWidth: 1024,
  },
});
