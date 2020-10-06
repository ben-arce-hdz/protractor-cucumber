exports.config = {
  directConnect: true,

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--incognito", "--start-maximized"],
    },
    shardTestFiles: true,
    maxInstances: 3,
  },

  framework: "jasmine",

  specs: ["./tests/non_angular_pom_contact_spec.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000, // Default time to wait in ms before a test fails.
  },

  onPrepare: function () {

  },
};