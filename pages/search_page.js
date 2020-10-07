const { $ } = require("protractor");
const BasePage = require("./base_page.js");

class SearchPage extends BasePage {
  resultsCounterH2 = $(".search-results__counter");
  constructor() {
    super();
  }

  async getResultCounterLabel() {
    await super.waitUntilVisible(this.resultsCounterH2);
    await super.scrollUntilVisible(this.resultsCounterH2);
    return await this.resultsCounterH2.getText();
  }
}
module.exports = new SearchPage();
