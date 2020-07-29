/* eslint-disable no-unused-vars */
import * as header from '../pages/header';

const { Given, When, Then } = require('cucumber');

When(/^a guest can see Header$/, async () => {
  await header.verifyHeader();
});

Then(/^a guest click logo astra$/, async () => {
  await header.clickMainLogoAstra();
});
