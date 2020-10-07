const BasePage = require("./base_page.js");
const { $, element, by } = require("protractor");
const DropDownWrapper = require("../utils/dropdown_wrapper.js");

class ContactPage extends BasePage {
  /**
   * Page Elements
   */
  acceptCookiesButton = $(".cookie-disclaimer__button");
  firstNameInput = element(by.name("user_first_name"));
  lastNameInput = element(by.name("user_last_name"));
  userEmailInput = element(by.name("user_email"));
  userPhoneInput = $("input[name='user_phone']");
  userCompanyInput = $("input[name='user_company']");
  positionDropDown = $(
    "select[name='user_position'] ~ span span[class='select2-selection__arrow']"
  );
  countryDropDown = $(
    "select[name='user_country'] ~ span span[class='select2-selection__arrow']"
  );
  stateDropDown = $(
    "select[name='user_region'] ~ span span[class='select2-selection__arrow']"
  );
  cityDropDown = $(
    "select[name='user_city'] ~ span span[class='select2-selection__arrow']"
  );
  personalInfoCheckBox = $("#new_form_gdprConsent + label");
  submitButton = $(".button-ui");
  hearAboutEpamDropDown = $(
    "select[name='user_comment_how_hear_about'] ~ span span.select2-selection__arrow"
  );
  reasonInquieryDropDown = $(
    "select[name='mail_subjects'] ~ span span.select2-selection__arrow"
  );

  constructor() {
    super();
  }

  selectInquiryReason(reason) {
    try {
      new DropDownWrapper(this.reasonInquieryDropDown).selectByText(reason);
    } catch (error) {
      console.log(error);
    }
  }
  selectHowHeardAboutEpam(reason) {
    new DropDownWrapper(this.hearAboutEpamDropDown).selectByText(reason);
  }
  async submitForm() {
    await this.submitButton.click();
  }
  async checkPersonalInfo() {
    await super.scrollUntilVisible(this.personalInfoCheckBox);
    await this.personalInfoCheckBox.click();
  }
  async selectCity(cityName) {
    await new DropDownWrapper(this.cityDropDown).selectByText(cityName);
  }
  async selectState(stateName) {
    super.wait(2000);
    await new DropDownWrapper(this.stateDropDown).enterText(stateName);
  }
  async selectCountry(countryName) {
    await new DropDownWrapper(this.countryDropDown).selectByText(countryName);
  }
  async selectPosition(positionName) {
    await new DropDownWrapper(this.positionDropDown).selectByText(positionName);
  }
  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }
  async enterUserName(userName) {
    await this.firstNameInput.sendKeys(userName);
  }
  async enterLastName(lastName) {
    await this.lastNameInput.sendKeys(lastName);
  }
  async enterEmail(email) {
    await this.userEmailInput.sendKeys(email);
  }
  async enterTelephone(telephoneNum) {
    await this.userPhoneInput.sendKeys(telephoneNum);
  }
  async enterCompany(companyName) {
    await this.userCompanyInput.sendKeys(companyName);
  }
}
module.exports = new ContactPage();
