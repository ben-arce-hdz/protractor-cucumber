const { browser, Key } = require("protractor");
const ElementAction = require("./element_actions.js");

class DropDownWrapper extends ElementAction {
  constructor(element) {
    super();
    this.element = element;
  }

  async selectByText(text) {
    await super.click(this.element);
    super.waitUntilclickable(this.element);
    browser
      .findElement(by.xpath("//li[contains(text(),'" + text + "')]"))
      .click();
  }

  async enterText(text) {
    await super.click(this.element);
    browser
      .$("select[name='user_region'] ~span input")
      .sendKeys(text, Key.ENTER);
  }
}
module.exports = DropDownWrapper;
