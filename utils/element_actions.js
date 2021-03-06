const { browser } = require("protractor");
const WaitElement = require("./wait_until.js");

class ElementActions extends WaitElement {
  async scrollUntilVisible(element) {
    //this.waitUntilclickable(element)
    await browser.actions().mouseMove(element).perform();
  }

  async click(element) {
    //this.waitUntilclickable(element)
    await element.click();
  }

  async sendKeys(element, text) {
    //this.waitUntilclickable(element)
    await element.sendKeys(text);
  }
}
module.exports = ElementActions;
