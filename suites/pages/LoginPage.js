const env = require("../env");

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInputField = page.locator('input[type="text"]');
    this.passwordInputField = page.locator('input[type="password"]');
    this.submitButton = page.locator('button[id="submit-login"]');
  }

  async waitForLoginField() {
    await this.page.waitForSelector('input[type="text"]', { timeout: env.timeout });
    await this.page.waitForSelector('input[type="password"]', { timeout: env.timeout });
    await this.page.waitForSelector('button[id="submit-login"]', { timeout: env.timeout });
  }

  async isUsernameInputFieldVisible() {
    const usernameInputField = this.usernameInputField;
    return await usernameInputField.isVisible();
  }

  async isPasswordInputFieldVisible() {
    const passwordInputField = this.passwordInputField;
    return await passwordInputField.isVisible();
  }

  async isSubmitButtonVisible() {
    const submitButton = this.submitButton;
    return await submitButton.isVisible();
  }

  async fillUsername(username) {
    const usernameInputField = this.usernameInputField;
    await usernameInputField.fill(username);
  }

  async fillPassword(password) {
    const passwordInputField = this.passwordInputField;
    await passwordInputField.fill(password);
  }

  async logIn(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }

  async clickSubmitLoginButton() {
    const submitButton = this.submitButton;
    await submitButton.click();
  }
}
