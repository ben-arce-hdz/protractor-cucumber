const homePage = require("../pages/home_page.js");
const contactPage = require("../pages/contact_page.js");
const { Given, When, Then } = require("cucumber");

Given(/^I navigate to HomePage$/, async function () {
  await homePage.getHomePage();
});

When(/^I click to Contact button$/, async function () {
  await homePage.acessContactSection();
});

Then(/^I fill the form out$/, async function () {
  await contactPage.acceptCookies();
  await contactPage.selectInquiryReason("Talk to Sales in North America");
  await contactPage.enterUserName("Benjamin");
  await contactPage.enterLastName("Arce");
  await contactPage.enterEmail("barce@outlook.com");
  await contactPage.enterTelephone("33-12-34-56-78");
  await contactPage.enterCompany("Epam");
  await contactPage.selectPosition("C-Level");
  await contactPage.selectCountry("United States");
  await contactPage.selectState("Alabama");
  await contactPage.selectCity("Abbeville, AL");
  await contactPage.checkPersonalInfo();
  await contactPage.selectHowHeardAboutEpam("Event");
  await contactPage.submitForm();
});
