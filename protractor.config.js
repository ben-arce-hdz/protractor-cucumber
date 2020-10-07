const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

const reporterOptions = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, './reports/report.json'),
  output: path.join(__dirname, './reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true
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
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    './features/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    require: [
      './step_definitions/*.steps.js' // accepts a glob
    ],
    tags: true,
    format: 'json:./reports/report.json'
    //format: ['json:./reports/report.json', './node_modules/cucumber-pretty']
  },

  onPrepare: function () {

  },
  afterLaunch: () => {
    //return reporter.generate(reporterOptions);
  }
};