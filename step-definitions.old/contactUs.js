import * as contact from '../pages/contactUs';
import * as home from '../pages/home';
// import { basename } from 'path';

const { When, Then } = require('cucumber');

// Hubungi Kami as a guest

When(/^a guest try to access Hubungi Kami Page through Burger Menu$/, async () => {
  await home.clickBurgerMenu();
  await contact.clickMenuContact();
});

Then(/^a guest will see Login Page$/, async () => {
  await contact.verifyLogin();
});

// Hubungi Kami as a customer

When(/^a customer try to access Hubungi Kami Page through Burger Menu$/, async () => {
  // await contact.verifyHome();
  await home.clickBurgerMenu();
  await contact.clickMenuContact();
});

When(/^a customer will see Login Page$/, async () => {
  await contact.verifyLogin();
});

When(/^a customer try to Login$/, async () => {
  await contact.clickLogin();
});

When(/^a customer can see Hubungi Kami Page$/, async () => {
  await contact.verifyContact();
});

When(/^a customer try to submit message$/, async () => {
  await contact.submit();
});

Then(/^a customer can see Thank You Pop Up$/, async () => {
  // await contact.clickLogin();
  // await contact.submitRiwayat();
  await contact.verifyPopUp();
});

Then(/^a customer can see Home Page$/, async () => {
  // await contact.clickLogin();
  await contact.submitHome();
  await contact.verifyHome();
});

// Riwayat Hubungi Kami

When(/^a customer try to access Riwayat Hubungi Kami Page through Hubungi Kami Menu on Burger Menu$/, async () => {
  await home.clickBurgerMenu();
  await contact.clickMenuContact();
  // await contact.clickLogin();
  // await contact.submitRiwayat();
});

When(/^a customer try to access Riwayat Hubungi Kami Page$/, async () => {
  await contact.submitRiwayat();
});

Then(/^a customer can see Riwayat Hubungi Kami Page$/, async () => {
  await contact.verifyRiwayat();
});

// Riwayat Hubungi Kami through Akun Saya

When(/^a customer try to access Riwayat Hubungi Kami Page through Akun Saya Menu on Burger Menu$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuAkunSaya();
});

When(/^a customer will see Akun Saya Page$/, async () => {
  await contact.verifyAkunSaya();
});

When(/^a customer try to access Riwayat Hubungi Kami Page through Akun Saya page$/, async () => {
  await contact.clickDropDown();
});
