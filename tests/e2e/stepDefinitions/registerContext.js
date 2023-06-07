const { Given, When, Then } = require("@cucumber/cucumber");
const { RegisterPage } = require("../pageObjects/RegisterPage.js");
const { LoginPage } = require("../pageObjects/LoginPage.js");

const assert = require("assert");
const registerPage = new RegisterPage();
const loginPage = new LoginPage();


Given("user has navigated to the setup page", async function () {
  await registerPage.goToRegisterPage();
  assert.equal(
    page.url(),
    await registerPage.setupURL,
    `Expected user to redirect to homepage but redirected to page with url ${page.url()}`
  );
});

When(
  "user sign up with username {string}, password {string} and confirm password {string}",
  async function (username, password, cPassword) {
    await registerPage.submitRegisterData(username, password, cPassword);
  }
);

Then("user should see message {string}", async function (message) {
  let actualErrorMessage = await registerPage.getErrorMessage(message);
  let expectedErrorMessage = await message.split(",");
  assert.deepEqual(
    actualErrorMessage,
    expectedErrorMessage,
    `Expected to get ${expectedErrorMessage} but got diffrent errors: ${actualErrorMessage}`
  );
});

Then("user should redirect to sign in page", async function () {
  assert.equal(
    page.url(),
    await loginPage.loginPageUrl,
    `Expected user to redirect to login page but redirected to page with url ${page.url()}`
  );
});

Then("user should get success message {string}", async function (succesMsg) {
  let actualMessage = await registerPage.getSuccessMsg();
  assert.equal(
    actualMessage[0],
    succesMsg,
    `Expected to get message "${succesMsg}" but got "${actualMessage}"`
  );
});
