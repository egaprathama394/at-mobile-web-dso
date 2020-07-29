
import { basename } from 'path';
import * as home from '../../pages/home';
import * as testdrive from '../../pages/dsoservice/test-drive';

const { When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

When(/^a guest want access test drive$/, async () => {
  client.pause(1000);
  await home.clickBurgerMenu();
  await home.clickMenuTestDrive();
});

When(/^I want click Lanjutkan$/, async () => {
  await testdrive.clickbtnLanjutkan();
});
When(/^I input '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' in checkout page$/, async (ND, NB, Email, HP, catatan) => {
  await testdrive.testdrive(ND, NB, Email, HP, catatan);
});

When(/^I input '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' in testdrive outlet page$/, async (model, outlet, tanggal, jam, catatan) => {
  await testdrive.ketikdropdown('model', model);
  await testdrive.ketikdropdown('outlet', outlet);
  await testdrive.chooseOptionDropdown('tanggal', tanggal);
  await testdrive.chooseOptionDropdown('jam', jam);
  await testdrive.inputcatatan(catatan);
});

// negative test

When(/^a customer try to access Test Drive through burger menu$/, async () => {
  client.pause(1000);
  await home.clickBurgerMenu();
  await home.clickMenuTestDrive();
});

When(/^a customer try to submit form at Test Drive page$/, async () => {
  client.pause(1000);
  await testdrive.clickbtnLanjutkan();
});

Then(/^a customer can see validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyLabelError();
});

When(/^a customer try to submit form with '([^"]*)' on Catatan$/, async (catatan) => {
  client.pause(1000);
  await testdrive.inputCatatan(catatan);
  await testdrive.clickbtnLanjutkan();
});

Then(/^a customer can see minimum validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyMinError();
});

Then(/^a customer can see maximum validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyMaxError();
});

When(/^I input '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' in Test Drive$/, async (model, outlet, tanggal, jam) => {
  await testdrive.ketikdropdown('model', model);
  client.pause(1000);
  await testdrive.ketikdropdown('outlet', outlet);
  await testdrive.scrollToLanjutkan();
  await testdrive.chooseOptionDropdown('tanggal', tanggal);
  client.pause(1000);
  await testdrive.chooseOptionDropdown('jam', jam);
});

When(/^I input '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' in Test Drive Checkout page$/, async (ND, NB, Email, HP, ALAMAT) => {
  await testdrive.verifyCheckoutTD();
  await testdrive.testdrive(ND, NB, Email, HP, ALAMAT);
});

Then(/^a customer can see error validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyCheckoutError();
});

Then(/^a customer can see error email validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyEmailCheckoutError();
});

Then(/^a customer can see maximum error validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyMaxCheckoutError();
});

Then(/^a customer can see number error validation$/, async () => {
  client.pause(1000);
  await testdrive.verifyHPCheckoutError();
});
