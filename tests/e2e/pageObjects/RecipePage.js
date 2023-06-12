const config = require("../../cucumber.conf.js")

class RecipePage {
    constructor() {
        this.createRecipeDropdown = "//i[@class='fas fa-fw fa-plus fa-lg']"
        this.createRecipeButton = "//div[@class='dropdown-menu dropdown-menu-center show']/a[@href='/new/recipe/']"
        this.recipeNameInputSelector = "#id_name"
        this.saveRecipeNameButtonSelector = "//button[@class='btn btn-success']"
        this.descriptionInputSelector = "//textarea[@id='id_description']"
        this.preparationTimeInputSelector = "#id_prep_time"
        this.waitingTimeInputSelector = "#id_wait_time"
        this.servingsInputSelector = "#id_servings"
        this.servingsTextInputSelector = "#id_servings_text"
        this.imageInputSelector = "//input[@id='id_file_upload']"
        this.stepNameInputSelector = "//div[@id='id_card_step_0']//div[@class='input-group']/input"
        this.stepInstructionInputSelector = "//div[@id='id_card_step_0']//textarea"
        this.timeAddButtonSelector = "//button[contains(text(),'Time')]"
        this.timeInputSelector = "#id_step_11_time"
        this.ingredientsAddButtonSelector = "//button[@class='btn btn-success btn-block']"
        this.saveAndViewButtonSelector = "//button[contains(text(), 'Save & View')]"
        this.recipeHeadingSelector = "//div[@class='col-12']/h3"
    }

    async getRecipenName() {
        return await page.innerText(this.recipeHeadingSelector)
    }

    async createRecipe(recipeName) {
        await page.click(this.createRecipeDropdown)
        await page.click(this.createRecipeButton)
        await page.fill(this.recipeNameInputSelector, recipeName)
        await page.click(this.saveRecipeNameButtonSelector)
    }

    async inputRecipeDetails(recipeData) {
        await page.fill(this.descriptionInputSelector, recipeData['Description'])
        await page.fill(this.preparationTimeInputSelector, recipeData['Preparation_time'])
        await page.fill(this.waitingTimeInputSelector, recipeData['Waiting_time'])
        await page.fill(this.servingsInputSelector, recipeData['Servings'])
        await page.fill(this.servingsTextInputSelector, recipeData['Servings_text'])
        await page.setInputFiles(this.imageInputSelector, `${config.imagePath}${recipeData['Image']}`)
        await page.fill(this.stepNameInputSelector, recipeData['Step_name'])
        await page.fill(this.stepInstructionInputSelector, recipeData['Instructions'])
    }


}

module.exports = { RecipePage }