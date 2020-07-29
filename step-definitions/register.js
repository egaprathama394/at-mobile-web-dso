/* eslint-disable no-unused-vars */
import * as home from '../pages/home';
import * as header from '../pages/header';
import * as burgerMenu from '../pages/burgerMenu';
import * as register1 from '../pages/register1';
import * as register2 from '../pages/register2';

const { Given, When, Then } = require('cucumber');
const randomstring = require('randomstring');

When(/^a guest try to access Register page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenu.clickDaftar();
});

Then(/^a guest can see Register page$/, async () => {
  await register1.verifyPageReg1();
});

When(/^a guest try to Register using random email$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenu.clickDaftar();
  const email = `rennitest${randomstring.generate(10)}@gmail.com`;
  await register1.inputEmail(email);
  await register1.clickLanjutkan();
});

Then(/^a guest input data Nama lengkap: '([^"]*)'$/, async (name) => {
  await register2.inputNama(name);
});

Then(/^a guest input data No handphone: '([^"]*)'$/, async (noPhone) => {
  await register2.inputNoPhone(noPhone);
});

Then(/^a guest input data password: '([^"]*)'$/, async (pass) => {
  await register2.inputPass(pass);
  await register2.clickDaftar();
});

Then(/^user can register successfully$/, async () => {
  await home.successRegist();
});

When(/^a guest try to Register using invalid format email '([^"]*)'$/, async (invalidEmail) => {
  await header.clickBurgerMenu();
  await burgerMenu.clickDaftar();
  await register1.inputEmail(invalidEmail);
  await register1.clickTitlePage();
});

Then(/^display error message '([^"]*)' under the email field at page register$/, async (errorMsg) => {
  await register1.displayErrorInvalidEmail(errorMsg);
});

Then(/^do not fill all fields and click button Daftar$/, async () => {
  await register2.verifyPage2();
  await register2.clickDaftar();
});

Then(/^display error message under the field at page register$/, async () => {
  await register2.errorEmptyAllFields();
});

Then(/^input field No Phone using invalid No phone format not starting with 8$/, async () => {
  const name = 'Renni Test AT mob web';
  await register2.inputNama(name);
  const noPhone = '081903150019';
  await register2.inputNoPhone(noPhone);
  await register2.clickLabelPass();
});

Then(/^display error message under the field No Phone at page register$/, async () => {
  await register2.errorFieldNoPhone();
  await register2.UnclickableBtnDaftar();
});

Then(/^input field No Phone using invalid No phone format less than 8 chars$/, async () => {
  const name = 'Renni Test AT mob web';
  await register2.inputNama(name);
  const noPhone = '81903';
  await register2.inputNoPhone(noPhone);
  await register2.clickLabelPass();
});

Then(/^input field No Phone using invalid No phone format less than 13 chars$/, async () => {
  const name = 'Renni Test AT mob web';
  await register2.inputNama(name);
  const noPhone = '81903150019112';
  await register2.inputNoPhone(noPhone);
  await register2.clickLabelPass();
});

Then(/^a guest input field Password using invalid format less than 8 chars$/, async () => {
  const name = 'Renni Test AT mob web';
  await register2.inputNama(name);
  const noPhone = '81903150019';
  await register2.inputNoPhone(noPhone);
  const pass = 'rahasia';
  await register2.inputPass(pass);
  await register2.UnclickableBtnDaftar();
});

Then(/^a guest cannot click button Daftar$/, async () => {
  await register2.UnclickableBtnDaftar();
});

Then(/^a guest input field Password using invalid format more than 8 chars but no numeric char$/, async () => {
  const name = 'Renni Test AT mob web';
  await register2.inputNama(name);
  const noPhone = '81903150019';
  await register2.inputNoPhone(noPhone);
  const pass = 'rahasiaPassword';
  await register2.inputPass(pass);
  await register2.UnclickableBtnDaftar();
});

When(/^a guest try to Register using email: '([^"]*)'$/, async (email) => {
  await header.clickBurgerMenu();
  await burgerMenu.clickDaftar();
  await register1.inputEmail(email);
  await register1.clickLanjutkan();
});

Then(/^a guest will see notif at homepage$/, async () => {
  await home.inactiveEmailRegist();
});
