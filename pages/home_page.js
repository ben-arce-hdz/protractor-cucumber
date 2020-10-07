const { $, browser } = require("protractor");
const ContactPage = require("./contact_page.js");
const BasePage = require("./base_page.js");

class HomePage extends BasePage {
  contactButton = $(".cta-button-ui");
  searchButton = $(".header-search__button");
  searchInput = $("#new_form_search");
  findButton = $(".header-search__submit");
  url = "https://www.epam.com/";

  constructor() {
    super();
  }

  getHomePage() {
    super.navigateTo(this.url);
  }

  async clickFindBtn() {
    await this.findButton.click();
  }
  async enterTextToSearch(text) {
    await this.searchInput.sendKeys(text);
  }

  async openSearchBar() {
    await this.searchButton.click();
  }

  async acessContactSection() {
    await this.contactButton.click();
    return ContactPage;
  }
}
module.exports = new HomePage();
