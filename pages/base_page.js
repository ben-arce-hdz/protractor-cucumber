const {
  browser
} = require("protractor");
const ElementAction = require("../utils/element_actions.js");

class BasePage extends ElementAction {
  constructor() {
    super();
  }
  getTitle() {
    return browser.getTitle();
  }
  wait(waitInMilliseconds) {
    return browser.sleep(waitInMilliseconds);
  }
  getCurrenUrl() {
    return browser.getCurrentUrl();
  }

  async navigateTo(url) {
    return await browser.get(url);
  }
}
module.exports = BasePage;