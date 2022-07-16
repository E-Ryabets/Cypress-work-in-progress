const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  IgnoreTestFiles: ['**/2-getting-started/**', '**/3-advanced-examples/**'],
  e2e: {
    'baseUrl': 'http://automationpractice.com/',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
