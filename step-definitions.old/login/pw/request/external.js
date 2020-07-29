import * as resetPassword from '../../../../pages/login/pw/request/external';
import * as home from '../../../../pages/home';

const { When, Then, } = require('cucumber');

Then(/^user try to access Login page for reset password$/, async () => {
  await resetPassword.verifyPageLoginforResetPassword();
});

When(/^user try to reset pasword '([^"]*)'$/, async (email) => {
  await home.clickBurgerMenu();
  await home.clickMenuLogin();
  await resetPassword.clickresetPassword();
  await resetPassword.resetPassword(email);
});

Then(/^user can reset password successfully$/, async () => {
  await resetPassword.veryfyAllertSuccess();
});