const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'esbzcj',
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 800,
    hideXHRInCommandLog: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    baseUrl: "http://www.webdriveruniversity.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/{other,api,webdriver-uni}/*.js",
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 5000,
    video: false,
    retries: {
      runMode: 0,
      openMode: 1,

    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
