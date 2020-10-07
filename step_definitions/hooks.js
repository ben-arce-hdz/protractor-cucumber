const { browser } = require("protractor");
const { Before, BeforeAll, After, AfterAll, Status } = require("cucumber");
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(30 * 1000);

BeforeAll({ timeout: 100 * 1000 }, async () => {
  console.log("before all");
});

Before(async function (scenario) {
  console.log("before");
});

After(async function (scenario) {
  console.log("after");
  if (scenario.result.status === Status.FAILED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "./reports/image");
  }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  console.log("after all");
});
