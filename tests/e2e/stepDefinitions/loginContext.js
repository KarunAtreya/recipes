const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pageObjects/LoginPage')
const { SearchPage } = require('../pageObjects/SearchPage')
const assert = require('assert')
const loginPage = new LoginPage()
const searchPage = new SearchPage()

Given('the user has browsed to login page', async function () {
  await page.goto(loginPage.loginPageUrl)
});


When('the user logs in with valid username {string} and valid password {string}', async function (username, password) {
  await loginPage.login(username, password)
});

When('the user logs in with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password)
});

Then('the user should be navigated to the search page', async function () {
  actualUrl=await page.url()
  assert.equal(
    searchPage.searchPageUrl,
    actualUrl,
    `Expected user to be navigated to search page but redirected to ${actualUrl}`
    )
});


Then('the user should be displayed the message {string}', async function (message) {
  actualMessage=(await searchPage.getSigninSuccessMessage()).split("\n")
  assert.equal(
    message,
    actualMessage[0],
    `Expected error message to be ${message} but received ${actualMessage}`
  )
});

Then('the user should be displayed the error message {string}', async function (message) {
  actualMessage=await loginPage.getMessage()
  assert.equal(
    message,
    actualMessage,
    `Expected error message to be ${message} but received ${actualMessage}`
  )
});
