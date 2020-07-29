import * as update from '../pages/update';
import * as home from '../pages/home';
import * as login from '../pages/login';
import { client } from 'nightwatch-api/lib';

var randomstring = require("randomstring")
const { When, Then } = require('cucumber');

When(/^a user try to login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await home.clickBurgerMenu();
  await home.clickMenuLogin();
  await login.inputUsernamePassword(email, password);
});

When(/^user try to access akun saya$/, async () => {
  await home.clickBurgerMenuBottom();
  await home.clickMenuAkunSaya();
});

When(/^user try to update nama depan nama belakang and '([^"]*)' in regist page$/, async (tanggal) => {
  await update.updateData(`${randomstring.generate(5)}`, `${randomstring.generate(5)}`, tanggal);
});

When(/^user try to update hp and provinsi '([^"]*)'$/, async (provinsi) => {
  await update.isiHP(`${randomstring.generate(5)}`);
  await update.ketikDropdown('provinsi', provinsi);
});

When(/^user try to update kota '([^"]*)' and alamat$/, async (kota) => {
  await update.ketikDropdown('kota', kota);
  await update.updateData2(`${randomstring.generate(5)}`);
  await client.pause(1000);
  await update.clicksubmit();
});

Then(/^user can see success notification$/, async () => {
  await update.verifySuccessPage();
});
