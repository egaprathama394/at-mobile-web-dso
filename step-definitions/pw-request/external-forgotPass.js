/* eslint-disable no-unused-vars */
import * as home from '../../pages/home';
import * as header from '../../pages/header';
import * as burgerMenu from '../../pages/burgerMenu';
import * as login from '../../pages/login';
import * as forgotPass from '../../pages/pw-request/external-forgotPass';

const { Given, When, Then } = require('cucumber');

When(/^a guest try to access Forget Password page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenu.clickLogin();
  await login.clickLupaPass();
});

Then(/^a guest can see Forget Password page$/, async () => {
  await forgotPass.verifyPageForgotPass();
});

When(/^a guest try to forget password using email '([^"]*)'$/, async (email) => {
  await header.clickBurgerMenu();
  await burgerMenu.clickLogin();
  await login.clickLupaPass();
  await forgotPass.inputEmail(email);
  await forgotPass.clickLanjutkan();
});

Then(/^a guest can forget password successfully$/, async () => {
  await forgotPass.verifySuccessForgotPass();
});

When(/^a guest try to login using non registered email '([^"]*)'$/, async (email) => {
  await header.clickBurgerMenu();
  await burgerMenu.clickLogin();
  await login.clickLupaPass();
  await forgotPass.inputEmail(email);
  await forgotPass.clickLanjutkan();
});

Then(/^display error message unregistered email '([^"]*)'$/, async (errorMsg) => {
  await forgotPass.errorUnregisteredEmail(errorMsg);
});

When(/^a guest try to forget password using invalid email format '([^"]*)'$/, async (invalidEmail) => {
  await header.clickBurgerMenu();
  await burgerMenu.clickLogin();
  await login.clickLupaPass();
  await forgotPass.inputInvalidEmail(invalidEmail);
});

Then(/^display error message invalid email '([^"]*)'$/, async (errorMsg) => {
  await forgotPass.errorInvalidEmail(errorMsg);
});
