import * as home from '../pages/home';
import * as burgerMenu from '../pages/burgerMenu';
import * as register from '../pages/register';
import * as bookingService from '../pages/dsoservice/book-service';

const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^a guest is at DSO Home page$/, async () => {
  await client.url('https://qa.astra-daihatsu.id');
});

Given(/^a user is at DSO Home page$/, async () => {
  await client.url('https://qa.astra-daihatsu.id');
});
When(/^a guest try to access Login page$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuLogin();
});

When(/^a customer can access akunSaya page$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuAkunSaya();
});

When(/^a guest try to access Register page$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuDaftar();
});

When(/^a guest try to access bookingService page$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuBookingService();
});

When(/^a user try to fill all field in bookingService page$/, async () => {
  await home.clickBurgerMenu();
  await home.clickMenuBookingService();
});

Then(/^a guest can see Burger Menu Content$/, async () => {
  await home.clickBurgerMenu();
  await burgerMenu.verifyContentBurgerMenu();
});

Then(/^a guest can see success registration notice text at homepage$/, async () => {
  await register.verifyPopUpRegister();
});
