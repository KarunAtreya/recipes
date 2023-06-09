class RecipePage {
    constructor() {
        this.createRecipeButton="//div[@class='card-body']//a[contains(text(),'Create')]"
        this.recipeNameInputSelector = "#id_name"
        this.saveRecipeNameButtonSelector = "//button[@class='btn btn-success']"
        this.descriptionInputSelector = "#id_description"
        this.preparationTimeInputSelector = "#id_prep_time"
        this.waitingTimeInputSelector = "#id_wait_time"
        this.servingsInputSelector = "#id_servings"
        this.servingsTextInputSelector = "#id_servings_text"
        this.stepNameInputSelector = "#id_step_10name"
        this.timeAddButtonSelector = "//button[contains(text(),'Time')]"
        this.timeInputSelector = "#id_step_11_time"
        this.ingredientsAddButtonSelector = "//button[@class='btn btn-success btn-block']"
    }

    async recipeEdit(recipeData) {
        await page.fill(this.description, recipeData['Description'])
        await page.fill(this.preparationTimeInputSelector, recipeData['Preparation_time'])
        await page.fill(this.waitingTimeInputSelector, recipeData['Waiting_time'])
        await page.fill(this.servingsInputSelector, recipeData['Servings'])
        await page.fill(this.servingsTextInputSelector, recipeData['Servings_text'])
    }
}

module.exports = { RecipePage }