import * as promotion from '../pages/promotion-list';

const { client } = require('nightwatch-api');

const { Then } = require('cucumber');

Then(/^a guest can access Promo List$/, async () => {
  await client.pause(2000);
  await promotion.verifyPromoList();
  await promotion.clickLihatPromo();
});
