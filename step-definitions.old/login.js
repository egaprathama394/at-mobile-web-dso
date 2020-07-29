import * as login from '../pages/login';
import * as home from '../pages/home';

const { When, Then } = require('cucumber');


Then(/^a guest can see Login page$/, async () => {
  await login.verifyPage();
});

When(/^a guest try to login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await home.clickBurgerMenu();
  await home.clickMenuLogin();
  await login.inputUsernamePassword(email, password);
});

Then(/^a guest can Login successfully$/, async () => {
  await login.verifyPagesucesslogin();
});

When(/^a customer try to login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await home.clickBurgerMenu();
  await home.clickMenuLogin();
  await login.inputUsernamePassword(email, password);
});

// negative test

When(/^a customer try to login through Test Drive using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.loginTestDrive();
  await login.inputUsernamePassword(email, password);
});

When(/^a customer try to login through Booking Service using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.loginBookService();
  await login.inputUsernamePassword(email, password);
});

Then(/^a guest can see email and password validation$/, async () => {
  await login.validation();
});

Then(/^a guest can see error validation$/, async () => {
  await login.error();
});

// Footer 9

When(/^a guest try to login using email '([^"]*)' and password '([^"]*)' to access Test Drive page$/, async (email, password) => {
  await login.inputUsernamePassword(email, password);
});
