const { browser } = require("protractor");
const ElementAction = require("../utils/element_actions.js");

class BasePage extends ElementAction {
  constructor() {
    super();
  }

  async getTitle() {
    return await browser.getTitle();
  }
  async wait(waitInMilliseconds) {
    await browser.sleep(waitInMilliseconds);
  }
  async getCurrenUrl() {
    return await browser.getCurrentUrl();
  }
  async navigateTo(url) {
    await browser.get(url);
  }
}
module.exports = BasePage;
