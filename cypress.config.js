const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    baseUrl: "https://old.reddit.com/",
    video: false,
    viewportHeight: 10000,
  },
});
