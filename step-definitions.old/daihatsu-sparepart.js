import * as SC from '../pages/daihatsu-sparepart';

const { Then } = require('cucumber');

Then(/^a guest can access Suku Cadang Page$/, async () => {
  await SC.verifySukuCadang();
});
