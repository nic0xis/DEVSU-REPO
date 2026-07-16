const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opencart.abstracta.us",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});