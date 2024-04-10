const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage").LoginPage;
const config = require("../env");
const env = require("../env");

test.beforeEach(async ({ page }) => {
  // const loginPage = new LoginPage(page);
  await page.goto(config.baseUrl);
  // loginPage.waitForLoginField();
},{ timeout: config.timeout });


test.only('Verify "Username" input field visibility', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const usernameInputFieldIsVisible =
    await loginPage.isUsernameInputFieldVisible();
    console.log("Username field", usernameInputFieldIsVisible);
  expect(usernameInputFieldIsVisible).toBe(true);
});

//Visibility Test
// test.only("Check elements visibility", async () => {
//   test('Verify "Username" input field visibility', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const usernameInputFieldIsVisible =
//       await loginPage.isUsernameInputFieldVisible();
//     expect(usernameInputFieldIsVisible).toBe(true);
//   });

//   test('Verify "Password" input field visibility', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const passwordInputFieldIsVisible =
//       await loginPage.isPasswordInputFieldVisible();
//     expect(passwordInputFieldIsVisible).toBe(true);
//   });

//   test('Verify "Submit" button visibility', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const sumbitButtonIsVisible = await loginPage.isSubmitButtonVisible();
//     expect(sumbitButtonIsVisible).toBe(true);
//   });
// }, { timeout: config.timeout });


test.describe('Test "Log in" functionality', () => {
  test('Test log in functionality with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.logIn(env.username, env.password);
    await loginPage.clickSubmitLoginButton();
    await expect(page).toHaveURL(env.successfullyLoggedInURL);
  })
}, { timeout: config.timeout })








