const path = require("path");
const reporter = require("cucumber-html-reporter");
const yargs = require("yargs").argv;

const reporterOptions = {
  theme: "bootstrap",
  jsonFile: path.join(__dirname, "./reports/report.json"),
  output: path.join(__dirname, "./reports/cucumber_report.html"),
  reportSuiteAsScenarios: true,
  launchReport: true,
};

exports.config = {
  directConnect: true,
  allScriptsTimeout: 200000,
  getPageTimeout: 200000,
  SELENIUM_PROMISE_MANAGER: false,

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--incognito", "--start-maximized"],
    },
    shardTestFiles: true,
    maxInstances: 3,
  },

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: ["./features/*.feature"],

  cucumberOpts: {
    strict: true,
    require: ["./step_definitions/*.js"],
    tags: yargs.tag || "~@ignore",
    format: ["json:./reports/report.json", "./node_modules/cucumber-pretty"],
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(10000);
    return browser.waitForAngularEnabled(false);
  },
  afterLaunch: () => {
    //return reporter.generate(reporterOptions);
  },
};
