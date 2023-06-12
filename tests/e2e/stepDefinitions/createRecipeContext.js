const { Given, When, Then } = require('@cucumber/cucumber');
const { RecipePage } = require('../pageObjects/RecipePage')
const { LoginPage } = require('../pageObjects/LoginPage')

const assert = require('assert')
const loginPage = new LoginPage()
const recipePage = new RecipePage()

Given('the user has logged in with username {string} and password {string}', async function (username, password) {
  await page.goto("http://localhost/accounts/login/")
  await loginPage.login(username, password)
});

Given('the user has created his\\/her own space named {string}', async function (string) {
  await page.click("//div[@id='div_id_create-name']/following-sibling::input")
});

When('the user creates new recipe {string}', async function (recipeName) {
  await recipePage.createRecipe(recipeName)
});

When('the user saves and view the following recipe details', async function (recipeDetails) {
  await recipePage.inputRecipeDetails(recipeDetails.rowsHash())
  await page.click(recipePage.saveAndViewButtonSelector)
});

Then('the user should be redirected to the {string} recipe page', async function (recipeName) {
  actualRecipeName = await recipePage.getRecipenName()
  assert.equal(
    recipeName,
    actualRecipeName,
    `Expected to get redirected to ${recipeName} recipe page but got redirected to ${actualRecipeName}`
  )
});