const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opencart.abstracta.us",

    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/api/**/*.cy.js"
    ],

    setupNodeEvents(on, config) {
      return config;
    },
  },
});