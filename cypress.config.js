const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    watchForFileChanges: false, 
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/reports', 
      overwrite: true, 
      html: true, 
      json: false, 
    },
  },
});
