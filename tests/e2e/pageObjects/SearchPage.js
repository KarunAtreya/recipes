require("dotenv").config();

class SearchPage {

    constructor() {
        this.searchPageUrl = process.env.APP_URL + "search/"
        this.signinSuccessMessage = "//div[@class='alert alert-success alert-dismissible fade show']"
    }

    async getSigninSuccessMessage() {
        return (await page.innerText(this.signinSuccessMessage))
    }
}
module.exports = { SearchPage }