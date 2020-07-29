/* eslint-disable no-unused-vars */
import * as home from '../pages/home';
import * as header from '../pages/header';
import * as burgerMenu from '../pages/burgerMenu';
import * as login from '../pages/login';

const { Given, When, Then } = require('cucumber');

Then(/^a guest can see Login page$/, async () => {
  await login.urlLoginRegular();
  await login.veryfyLoginPage();
});

Then(/^a guest can see Login page that redirect to testdrive$/, async () => {
  await login.urlLoginTestDrive();
  await login.veryfyLoginPage();
});

When(/^a guest try to login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await header.clickBurgerMenu();
  await burgerMenu.veryfyBurgerMenu();
  await burgerMenu.clickLogin();
  await login.veryfyLoginPage();
  await login.inputDataLogin(email, password);
  await login.clickBtnLogin();
});

When(/^a guest login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.inputDataLogin(email, password);
  await login.clickBtnLogin();
});


When(/^a guest try to login using unregistered email '([^"]*)' and password '([^"]*)'$/, async (unregisteredEmail, password) => {
  await header.clickBurgerMenu();
  await burgerMenu.veryfyBurgerMenu();
  await burgerMenu.clickLogin();
  await login.veryfyLoginPage();
  await login.inputDataLogin(unregisteredEmail, password);
  await login.clickBtnLogin();
});

Then(/^display error message '([^"]*)'$/, async (errorMsg) => {
  await login.displayErrorMsg(errorMsg);
});

When(/^a guest try to login using invailid email format '([^"]*)' and password '([^"]*)'$/, async (invalidEmail, password) => {
  await header.clickBurgerMenu();
  await burgerMenu.veryfyBurgerMenu();
  await burgerMenu.clickLogin();
  await login.veryfyLoginPage();
  await login.inputDataLogin(invalidEmail, password);
  await login.clickBtnLogin();
});

Then(/^display error message '([^"]*)' under the email field$/, async (errorMsg) => {
  await login.displayErrorMsgEmail(errorMsg);
});

When(/^a guest try to login email '([^"]*)' and empty Password$/, async (email) => {
  await header.clickBurgerMenu();
  await burgerMenu.veryfyBurgerMenu();
  await burgerMenu.clickLogin();
  await login.veryfyLoginPage();
  await login.inputEmptyPass(email);
});

Then(/^display error message '([^"]*)' under the password field$/, async (errorMsg) => {
  await login.displayErrorMsgPass(errorMsg);
});

Then(/^a guest must login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.veryfyLoginPagePLP();
  await login.inputDataLogin(email, password);
  await login.clickBtnLogin();
});
When(/^a guest must login using email '([^"]*)' and password '([^"]*)' before go to Booking Service Page$/, async (email, password) => {
  await login.veryfyLoginBookingService();
  await login.inputDataLogin(email, password);
  await login.clickBtnLogin();
});
