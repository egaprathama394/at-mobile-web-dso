import * as register from '../pages/register';
import * as home from '../pages/home';

var randomstring = require("randomstring")
const { When, Then } = require('cucumber');
const { client } = require('nightwatch-api');


When(/^a guest try to access regist page$/, async () => {
  await home.clickMenuDaftar();
});

When(/^a guest try to fill all regist field '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)'$/, async (ND, NB, HP, Password, Password2) => {
  await register.register(ND, NB, `email.random${randomstring.generate(7)}@mailinator.com`, HP, Password, Password2);
});
