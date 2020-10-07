const { Then } = require("cucumber");
const contactPage = require("../pages/contact_page.js");

Then("I Accept Cookies", async function () {
  await contactPage.acceptCookies();
});
