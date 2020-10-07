const homePage = require("../pages/home_page.js");
const contactPage = require("../pages/contact_page.js");
const { Given, When, Then } = require("cucumber");

Given(/^I navigate to HomePage$/, async function () {
  await homePage.getHomePage();
});

When(/^I click to Contact button$/, async function () {
  await homePage.acessContactSection();
});

Then(/^I fill the form out$/, async function (dataTable) {
  const map = new Map(dataTable.raw().map(([k, v]) => [k, v]));
  await contactPage.selectInquiryReason(map.get("InquiryReason"));
  await contactPage.enterUserName(map.get("Name"));
  await contactPage.enterLastName(map.get("LastName"));
  await contactPage.enterEmail(map.get("Email"));
  await contactPage.enterTelephone(map.get("Telephone"));
  await contactPage.enterCompany(map.get("Company"));
  await contactPage.selectPosition(map.get("Position"));
  await contactPage.selectCountry(map.get("Country"));
  await contactPage.selectState(map.get("State"));
  await contactPage.selectCity(map.get("City"));
  await contactPage.checkPersonalInfo();
  await contactPage.selectHowHeardAboutEpam(map.get("HowHeardAbout"));
  await contactPage.submitForm();
});
