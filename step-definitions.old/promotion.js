import * as promo from '../pages/promotion';

const { Then } = require('cucumber');

Then(/^a guest can access Promo Page$/, async () => {
  await promo.verifyPagePromo();
});
