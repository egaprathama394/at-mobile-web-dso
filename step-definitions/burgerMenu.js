import * as burgerMenuPages from '../pages/burgerMenu';
import * as header from '../pages/header';

const { Given, When } = require('cucumber');
const { client } = require('nightwatch-api');

Given(/^a guest can see Burger Menu Content$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenuPages.veryfyBurgerMenu();
});

When(/^a guest try to access Login page$/, async () => {
  await header.clickBurgerMenu();
  await burgerMenuPages.veryfyBurgerMenu();
  await burgerMenuPages.clickLogin();
});

When(/^a guest click Berita Menu content$/, async () => {
  await client.pause(2000);
  await burgerMenuPages.clickNewsArticle();
});

When(/^a guest click Promo List$/, async () => {
  await client.pause(5000);
  await burgerMenuPages.clickPromo();
});
