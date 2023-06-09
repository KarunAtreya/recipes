const { Given, When, Then } = require('@cucumber/cucumber');
const { RecipePage } = require('../pageObjects/RecipePage')
const {LoginPage} = require('../pageObjects/LoginPage')
const config=require("../../cucumber.conf.js")

const assert = require('assert')
const loginPage = new LoginPage()
const recipePage = new RecipePage()

Given('the user has logged in with username {string} and password {string}', async function (username, password) {
    await page.goto("http://localhost/accounts/login/")
    await loginPage.login(username, password)
  });


When('the user selects create recipe button', async function () {
    await page.goto("http://localhost/search/")
    await page.click(recipePage.createRecipeButton)
    
  });
