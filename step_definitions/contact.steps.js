const {
    browser
} = require("protractor");
const homePage = require("../pages/home_page.js");
const {
    Given,
    When,
    Then
} = require("cucumber");
const contactPage = ""

Given(/^I navigate to HomePage$/, function () {
    homePage.getHomePage();
});

When(/^I click to Contact button$/, function () {
    contactPage = homePage.acessContactSection();
});

Then(/^I fill the form out$/, function () {
    contactPage.acceptCookies();
    contactPage.selectInquiryReason("Talk to Sales in North America");
    contactPage.enterUserName("Benjamin");
    contactPage.enterLastName("Arce");
    contactPage.enterEmail("barce@outlook.com");
    contactPage.enterTelephone("33-12-34-56-78");
    contactPage.enterCompany("Epam");
    contactPage.selectPosition("C-Level");
    contactPage.selectCountry("United States");
    contactPage.selectState("Alabama");
    contactPage.selectCity("Abbeville, AL");
    contactPage.checkPersonalInfo();
    contactPage.selectHowHeardAboutEpam("Event");
    contactPage.submitForm();
});