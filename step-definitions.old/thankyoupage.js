
import * as thankyoupage from '../pages/thankyoupage';

const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^a guest is at thankyou page$/, async () => {
    await client.url('https://qa.astra-daihatsu.id/in/checkout/orderConfirmation/044ea43d-3d04-4571-b2f9-8dc3e6083cc4');
  });

Then(/^I can see thankyou page$/, async () => {
    await thankyoupage.successpage();

});

Then(/^I can see thankyou page of test drive$/, async () => {
  await thankyoupage.successpageoftestdrive();

});