/* eslint-disable import/no-named-as-default */
import akunSaya from '../pages/akunSaya';

const { Then } = require('cucumber');

Then(/^a customer can see email '([^"]*)' at akunSaya page$/, async (email) => {
  await akunSaya(email);
});
