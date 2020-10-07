const {
  $,
  browser
} = require("protractor");
const ContactPage = require("./contact_page.js");
const BasePage = require("./base_page.js");

class HomePage extends BasePage {

  contactButton = $(".cta-button-ui");
  url = "https://www.epam.com/";

  constructor() {
    super();
  }

  getHomePage() {
    super.navigateTo(this.url);
  }

  async acessContactSection() {
    await this.contactButton.click();
    return ContactPage;
  }
}
module.exports = new HomePage();