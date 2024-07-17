const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: 'zrcpia',
  e2e: {
    baseUrl: 'https://www.wikipedia.org/#/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile});
    },
  },
}); 
