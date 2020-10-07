const homePage = require("../pages/home_page.js");
const searchPage = require("../pages/search_page.js");
const { When, Then } = require("cucumber");
const expect = require("chai").expect;

When("I click to Search button", async function () {
  await homePage.openSearchBar();
});

Then(/^I search "(.*)"$/, async function (word) {
  await homePage.enterTextToSearch(word);
  await homePage.clickFindBtn();
});

Then(/^I verify "(.*)" entered is on the label$/, async function (word) {
  let result = await searchPage.getResultCounterLabel();
  expect(result).to("Inner text");
  console.log("valor:", a);
});
