/* eslint-disable no-unused-vars */
import * as home from '../pages/home';
import * as header from '../pages/header';
import * as bottomMenu from '../pages/bottom-menu';
import * as burgerMenu from '../pages/burgerMenu';

const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^a guest is at DSO Home page$/, async () => {
  await client.url('https://qa.astra-daihatsu.id');
});

Then(/^a guest can Login successfully using akun '([^"]*)'$/, async (akun) => {
  await client.url('https://qa.astra-daihatsu.id');
  await header.clickBurgerMenu();
  await burgerMenu.verifySuccesLogin(akun);
});

Then(/^a guest can see Homepage Content$/, async () => {
  await home.verifyUrlHomepage1();
  await header.verifyHeader();
  await home.verifyMenuComponent();
  await home.verifyPromoBanner();
  await home.verifyDaihatsuFavorite();
  await home.verifyLayananPurnaJual();
  await bottomMenu.verifyBottomMenu();
});

Then(/^a guest can see Homepage$/, async () => {
  await home.verifyUrlHomepage2();
  await header.verifyHeader();
  await bottomMenu.verifyBottomMenu();
  await home.verifyMenuComponent();
  await home.verifyPromoBanner();
  await home.verifyDaihatsuFavorite();
});

Then(/^a guest can see Footer1 on Home page$/, async () => {
  await home.verifyFooter1();
});

Then(/^a guest can see Footer2 on Home page$/, async () => {
  await home.verifyFooter2();
});

When(/^a guest click Burger Menu content$/, async () => {
  await header.clickBurgerMenu();
});
