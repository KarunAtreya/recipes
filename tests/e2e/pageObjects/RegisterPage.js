require("dotenv").config();
const config=require("../../cucumber.conf.js")
class RegisterPage {
  constructor() {
    this.baseUrl = config.tandoorURL;
    this.setupURL = this.baseUrl + "setup/";
    this.username = `//input[@name="name"]`;
    this.password = `#id_password`;
    this.cPassword = `//input[@name="password_confirm"]`;
    this.registerBtn = `//button[@class="btn btn-success"]`;
    this.errorMsg = `//div[@id="div_id_password"]/div`;
    this.succesMsg = `//div[@class="alert alert-success alert-dismissible fade show"]`;
  }

  async goToRegisterPage() {
    await page.goto(this.setupURL);
  }

  async submitRegisterData(username, password, cPassword) {
    await page.fill(this.username, username);
    await page.fill(this.password, password);
    await page.fill(this.cPassword, cPassword);
    await page.click(this.registerBtn);
  }

  async getErrorMessage() {
    let error = (await page.innerText(this.errorMsg))
      .split("\n")
      .filter((n) => n);
    return error;
  }

  async getSuccessMsg() {
    return (await page.innerText(this.succesMsg)).split("\n").filter((n) => n);
  }
}

module.exports = { RegisterPage };
