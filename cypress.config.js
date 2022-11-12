const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  // defaultCommandTimeout:6000,

  "watchForFileChanges":true,
  "reporter": "mochawesome",
  "reporterOptions":{
    "charts":true,
    "overwrite":false,
    "html":false,
    "json":true,
    "reportDir":"cypress/reports"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
