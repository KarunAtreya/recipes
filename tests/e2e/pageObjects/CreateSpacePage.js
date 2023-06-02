require("dotenv").config();
class CreateSpacePage {
  constructor() {
    this.baseUrl = process.env.URL;
    this.spacePageURL = `space-overview`;
    this.spaceName = `#id_create-name`;
    this.errorMsg = `//p[@id="#error_1_id_create-name"]/strong`;
    this.succesMsg = `//div[@class="alert alert-success alert-dismissible fade show"]`;
  }

  async goToRegisterPage() {
    await page.goto(this.setupURL);
  }

  async goToLoginPage() {
    await page.goto(this.loginURL);
  }

  async submitRegisterData(username, password, cPassword) {
    await page.fill(this.username, username);
    await page.fill(this.password, password);
    await page.fill(this.cPassword, cPassword);
    await page.click(this.registerBtn);
  }

  async getErrorMessage(errorMsg) {
    let error = (await page.innerText(this.errorMsg))
      .split("\n")
      .filter((n) => n);
    let featureError = await errorMsg.split(",");
    return [error, featureError];
  }

  async getSuccessMsg() {
    return (await page.innerText(this.succesMsg)).split("\n").filter((n) => n);
    // console.log(await page.innerText(this.succesMsg))
    // return await page.innerText(this.succesMsg);
  }
}

module.exports = { CreateSpacePage };
